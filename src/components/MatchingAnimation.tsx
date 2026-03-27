import { useState } from "react";
import classNames from "classnames";
import { motion } from "framer-motion";

import { formatDescription } from "./animationUtils";
import styles from "./MatchingAnimation.module.scss";

const SOURCE_LINES = [
  "{{#bold}}<b>{{/bold}}",
  "{{#bold}}</b>{{/bold}}",
  "{{#italic}}<i>{{/italic}}",
];

const TREE_LINES = [
  "(mustache_section",
  "  (html_element",
  "    (html_start_tag)",
  "    (html_forced_end_tag))",
  "  ...)",
  "(mustache_section",
  "  (html_erroneous_end_tag)",
  "  ...)",
  "(mustache_section",
  "  (html_element",
  "    (html_start_tag)",
  "    (html_forced_end_tag))",
  "  ...)",
];

interface TagEvent {
  tag: string;
  type: "open" | "close";
}

interface ForkData {
  id: string;
  sectionName: string;
  trueEvents: TagEvent[];
  falseEvents: TagEvent[];
  trueBalanced?: boolean;
  falseBalanced?: boolean;
  dimmed?: boolean;
}

type Phase = "extract" | "merge" | "balance" | "enumerate";

interface EnumerationPath {
  assignment: { sectionName: string; value: boolean };
  flattenedEvents: TagEvent[];
  result: { balanced: boolean; message: string };
}

interface MatchingStep {
  phase: Phase;
  phaseLabel: string;
  highlightLine: number | null;
  forks: ForkData[];
  description: string;
  enumerations?: EnumerationPath[];
  resultMessage?: string;
  collectedSections?: string[];
  pathCount?: number;
  treeHighlight?: number[];
  treeEmphasis?: number[];
}

const PHASE_COLORS: Record<Phase, string> = {
  extract: "#fd7e14",
  merge: "#0d6efd",
  balance: "#198754",
  enumerate: "#6f42c1",
};

const STEPS: MatchingStep[] = [
  {
    phase: "extract",
    phaseLabel: "Extract",
    highlightLine: 0,
    forks: [
      {
        id: "bold-1",
        sectionName: "bold",
        trueEvents: [{ tag: "b", type: "open" }],
        falseEvents: [],
      },
    ],
    description:
      "Line 1: `forced_end_tag` on `<b>` \u2192 `fork(bold, T=[<b>], F=[])`",
    treeHighlight: [0, 1, 2, 3, 4],
    treeEmphasis: [3],
  },
  {
    phase: "extract",
    phaseLabel: "Extract",
    highlightLine: 1,
    forks: [
      {
        id: "bold-1",
        sectionName: "bold",
        trueEvents: [{ tag: "b", type: "open" }],
        falseEvents: [],
      },
      {
        id: "bold-2",
        sectionName: "bold",
        trueEvents: [{ tag: "b", type: "close" }],
        falseEvents: [],
      },
    ],
    description: "Line 2: erroneous `</b>` \u2192 `fork(bold, T=[</b>], F=[])`",
    treeHighlight: [5, 6, 7],
    treeEmphasis: [6],
  },
  {
    phase: "extract",
    phaseLabel: "Extract",
    highlightLine: 2,
    forks: [
      {
        id: "bold-1",
        sectionName: "bold",
        trueEvents: [{ tag: "b", type: "open" }],
        falseEvents: [],
      },
      {
        id: "bold-2",
        sectionName: "bold",
        trueEvents: [{ tag: "b", type: "close" }],
        falseEvents: [],
      },
      {
        id: "italic-1",
        sectionName: "italic",
        trueEvents: [{ tag: "i", type: "open" }],
        falseEvents: [],
      },
    ],
    description:
      "Line 3: `forced_end_tag` on `<i>` \u2192 `fork(italic, T=[<i>], F=[])`",
    treeHighlight: [8, 9, 10, 11, 12],
    treeEmphasis: [11],
  },
  {
    phase: "merge",
    phaseLabel: "Merge",
    highlightLine: null,
    forks: [
      {
        id: "bold-merged",
        sectionName: "bold",
        trueEvents: [
          { tag: "b", type: "open" },
          { tag: "b", type: "close" },
        ],
        falseEvents: [],
      },
      {
        id: "italic-1",
        sectionName: "italic",
        trueEvents: [{ tag: "i", type: "open" }],
        falseEvents: [],
      },
    ],
    description:
      "Two adjacent `bold` forks merge \u2192 `fork(bold, T=[<b>, </b>], F=[])`",
  },
  {
    phase: "balance",
    phaseLabel: "Balance",
    highlightLine: null,
    forks: [
      {
        id: "bold-merged",
        sectionName: "bold",
        trueEvents: [
          { tag: "b", type: "open" },
          { tag: "b", type: "close" },
        ],
        falseEvents: [],
        trueBalanced: true,
        falseBalanced: true,
        dimmed: true,
      },
      {
        id: "italic-1",
        sectionName: "italic",
        trueEvents: [{ tag: "i", type: "open" }],
        falseEvents: [],
        trueBalanced: false,
        falseBalanced: true,
        dimmed: false,
      },
    ],
    collectedSections: ["italic"],
    pathCount: 2,
    description:
      "`bold`: both branches balanced \u2192 skip. `italic`: T unbalanced \u2192 collect. 2\u00b9 = 2 paths to check.",
  },
  {
    phase: "enumerate",
    phaseLabel: "Enumerate",
    highlightLine: null,
    forks: [],
    enumerations: [
      {
        assignment: { sectionName: "italic", value: false },
        flattenedEvents: [
          { tag: "b", type: "open" },
          { tag: "b", type: "close" },
        ],
        result: { balanced: true, message: "Balanced" },
      },
      {
        assignment: { sectionName: "italic", value: true },
        flattenedEvents: [
          { tag: "b", type: "open" },
          { tag: "b", type: "close" },
          { tag: "i", type: "open" },
        ],
        result: { balanced: false, message: "Unclosed <i>" },
      },
    ],
    resultMessage: "Unclosed HTML tag: <i> (when italic is truthy)",
    description:
      "Enumerate all paths: `italic=false` is balanced, `italic=true` has unclosed `<i>`.",
  },
];

function TagPill({ event }: { event: TagEvent }) {
  const label = event.type === "open" ? `<${event.tag}>` : `</${event.tag}>`;
  return (
    <span
      className={classNames(
        styles.tagPill,
        event.type === "open" ? styles.openTag : styles.closeTag,
      )}
    >
      {label}
    </span>
  );
}

function BalanceIcon({ balanced }: { balanced: boolean }) {
  return (
    <span
      className={classNames(
        styles.balanceIcon,
        balanced ? styles.balanced : styles.unbalanced,
      )}
    >
      {balanced ? "\u2713" : "\u2717"}
    </span>
  );
}

function TreePanel({ step }: { step: MatchingStep }) {
  const highlightSet = new Set(step.treeHighlight ?? []);
  const emphasisSet = new Set(step.treeEmphasis ?? []);

  return (
    <div className={styles.tree}>
      {TREE_LINES.map((line, i) => {
        const isHighlighted = highlightSet.has(i);
        const isEmphasis = emphasisSet.has(i);
        const isErroneous = line.includes("erroneous");

        return (
          <div
            key={i}
            className={classNames(
              styles.treeLine,
              isHighlighted && !isEmphasis && styles.treeLineHighlight,
              isEmphasis &&
                (isErroneous
                  ? styles.treeLineErroneous
                  : styles.treeLineForced),
            )}
          >
            {line}
          </div>
        );
      })}
    </div>
  );
}

function ForkCard({
  fork,
  showBalance,
}: {
  fork: ForkData;
  showBalance: boolean;
}) {
  return (
    <motion.div
      className={classNames(
        styles.forkCard,
        fork.dimmed && styles.forkCardDimmed,
      )}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: fork.dimmed ? 0.5 : 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <div className={styles.forkHeader}>
        {fork.sectionName}
        {showBalance && fork.dimmed && (
          <span className={styles.skipLabel}>SKIP</span>
        )}
        {showBalance && !fork.dimmed && (
          <span className={styles.collectLabel}>COLLECT</span>
        )}
      </div>
      <div className={styles.branchRow}>
        <span className={styles.branchLabel}>T:</span>
        {fork.trueEvents.length > 0 ? (
          fork.trueEvents.map((e, i) => <TagPill key={i} event={e} />)
        ) : (
          <span className={styles.emptyLabel}>(empty)</span>
        )}
        {showBalance && fork.trueBalanced !== undefined && (
          <BalanceIcon balanced={fork.trueBalanced} />
        )}
      </div>
      <div className={styles.branchRow}>
        <span className={styles.branchLabel}>F:</span>
        {fork.falseEvents.length > 0 ? (
          fork.falseEvents.map((e, i) => <TagPill key={i} event={e} />)
        ) : (
          <span className={styles.emptyLabel}>(empty)</span>
        )}
        {showBalance && fork.falseBalanced !== undefined && (
          <BalanceIcon balanced={fork.falseBalanced} />
        )}
      </div>
    </motion.div>
  );
}

function ForksArea({ step }: { step: MatchingStep }) {
  const showBalance = step.phase === "balance";
  return (
    <div className={styles.forksArea}>
      {step.forks.map((fork) => (
        <ForkCard key={fork.id} fork={fork} showBalance={showBalance} />
      ))}
      {step.collectedSections && (
        <motion.div
          className={styles.collectedAnnotation}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Collected: [{step.collectedSections.join(", ")}] &mdash;{" "}
          {step.pathCount} paths
        </motion.div>
      )}
    </div>
  );
}

function EnumerateArea({ step }: { step: MatchingStep }) {
  return (
    <motion.div
      className={styles.enumerateArea}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {step.enumerations?.map((path, i) => (
        <div key={i} className={styles.enumerationRow}>
          <div className={styles.assignmentPill}>
            {path.assignment.sectionName} ={" "}
            <strong>{String(path.assignment.value)}</strong>
          </div>
          <div className={styles.eventsStrip}>
            {path.flattenedEvents.map((e, j) => (
              <TagPill key={j} event={e} />
            ))}
          </div>
          <div
            className={classNames(
              styles.resultBadge,
              path.result.balanced
                ? styles.resultBalanced
                : styles.resultUnbalanced,
            )}
          >
            {path.result.message}
          </div>
        </div>
      ))}
      {step.resultMessage && (
        <div className={styles.resultAlert}>{step.resultMessage}</div>
      )}
    </motion.div>
  );
}

const PANEL_HEADERS: Record<Phase, string> = {
  extract: "Forks",
  merge: "Merge Adjacent",
  balance: "Balance Check",
  enumerate: "Enumerate Paths",
};

export function MatchingAnimation() {
  const [stepIndex, setStepIndex] = useState(0);
  const step = STEPS[stepIndex];

  return (
    <div className={styles.container}>
      <div className="row g-0">
        {/* Source panel */}
        <div className="col-lg-3">
          <div className={styles.panel}>
            <div className={styles.panelHeader}>Source</div>
            <div className={styles.source}>
              {SOURCE_LINES.map((line, i) => (
                <div
                  key={i}
                  className={classNames(
                    styles.sourceLine,
                    step.highlightLine === i && styles.highlightedLine,
                  )}
                >
                  {line}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Parse tree panel */}
        <div className="col-lg-3">
          <div className={styles.panel}>
            <div className={styles.panelHeader}>Parse Tree</div>
            <TreePanel step={step} />
          </div>
        </div>

        {/* Working area */}
        <div className="col-lg-6">
          <div className={styles.panel}>
            <div className={styles.panelHeader}>
              {PANEL_HEADERS[step.phase]}
            </div>
            <div className={styles.workArea}>
              {(step.phase === "extract" ||
                step.phase === "merge" ||
                step.phase === "balance") && <ForksArea step={step} />}
              {step.phase === "enumerate" && <EnumerateArea step={step} />}
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className={styles.controls}>
        <div className="d-flex align-items-center gap-2 mb-2">
          <span
            className="badge rounded-pill text-uppercase"
            style={{ backgroundColor: PHASE_COLORS[step.phase] }}
          >
            {step.phaseLabel}
          </span>
          <small className="text-muted">
            Step {stepIndex + 1} of {STEPS.length}
          </small>
        </div>
        <div className={styles.description}>
          {formatDescription(step.description)}
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <button
            className="btn btn-outline-secondary btn-sm"
            onClick={() => setStepIndex((i) => i - 1)}
            disabled={stepIndex === 0}
          >
            Prev
          </button>
          <button
            className="btn btn-outline-secondary btn-sm"
            onClick={() => setStepIndex((i) => i + 1)}
            disabled={stepIndex === STEPS.length - 1}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
