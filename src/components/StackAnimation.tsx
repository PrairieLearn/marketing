import React, { useState } from "react";
import classNames from "classnames";
import { motion, AnimatePresence } from "framer-motion";

import { formatDescription } from "./animationUtils";
import styles from "./StackAnimation.module.scss";

const SOURCE_LINES = [
  "{{#bold}}",
  "  <b>",
  "  {{#italic}}",
  "    <i>",
  "  {{/italic}}",
  "{{/bold}}",
  "{{#bold}}",
  "  </b>",
  "{{/bold}}",
];

interface StackItem {
  label: string;
  id: string;
}

interface Step {
  htmlStack: StackItem[];
  mustacheStack: StackItem[];
  highlightLine: number;
  snapshotFence: number | null;
  description: string;
  action: "push" | "pop" | "implicit-pop" | "check" | "erroneous";
  outputLines: string[];
  newLineCount: number;
}

// Build output lines incrementally — each entry is the new lines added at that step.
const OUTPUT_ADDITIONS: string[][] = [
  // Step 0: {{#bold}} opens
  [
    "(mustache_section",
    "  (mustache_section_begin",
    "    (mustache_tag_name))",
  ],
  // Step 1: <b> opens
  ["  (html_element", "    (html_start_tag", "      (html_tag_name))"],
  // Step 2: {{#italic}} opens (nested inside <b>)
  [
    "    (mustache_section",
    "      (mustache_section_begin",
    "        (mustache_tag_name))",
  ],
  // Step 3: <i> opens (inside italic, child of <b>)
  [
    "      (html_element",
    "        (html_start_tag",
    "          (html_tag_name))",
  ],
  // Step 4: check for {{/italic}}
  [],
  // Step 5: forced_end_tag <i>
  ["        (html_forced_end_tag))"],
  // Step 6: {{/italic}} consumed
  ["      (mustache_section_end", "        (mustache_tag_name)))"],
  // Step 7: check for {{/bold}}
  [],
  // Step 8: forced_end_tag <b>
  ["    (html_forced_end_tag))"],
  // Step 9: {{/bold}} consumed
  ["  (mustache_section_end", "    (mustache_tag_name)))"],
  // Step 10: Second {{#bold}} opens
  [
    "(mustache_section",
    "  (mustache_section_begin",
    "    (mustache_tag_name))",
  ],
  // Step 11: </b> erroneous
  ["  (html_erroneous_end_tag", "    (html_tag_name))"],
  // Step 12: {{/bold}} consumed
  ["  (mustache_section_end", "    (mustache_tag_name)))"],
];

const OUTPUT_LINES: string[][] = (() => {
  const result: string[][] = [];
  let accumulated: string[] = [];
  for (const addition of OUTPUT_ADDITIONS) {
    accumulated = [...accumulated, ...addition];
    result.push([...accumulated]);
  }
  return result;
})();

const STEPS: Step[] = [
  // {{#bold}}
  {
    htmlStack: [],
    mustacheStack: [{ label: "bold (html_size=0)", id: "bold1" }],
    highlightLine: 0,
    snapshotFence: 0,
    description:
      "`{{#bold}}` opens \u2014 pushed onto the Mustache stack, snapshots HTML stack size = 0.",
    action: "push",
    outputLines: OUTPUT_LINES[0],
    newLineCount: OUTPUT_ADDITIONS[0].length,
  },
  // <b>
  {
    htmlStack: [{ label: "B", id: "b1" }],
    mustacheStack: [{ label: "bold (html_size=0)", id: "bold1" }],
    highlightLine: 1,
    snapshotFence: 0,
    description:
      "`<b>` opens inside the section \u2014 pushed onto the HTML stack.",
    action: "push",
    outputLines: OUTPUT_LINES[1],
    newLineCount: OUTPUT_ADDITIONS[1].length,
  },
  // {{#italic}}
  {
    htmlStack: [{ label: "B", id: "b1" }],
    mustacheStack: [
      { label: "bold (html_size=0)", id: "bold1" },
      { label: "italic (html_size=1)", id: "italic1" },
    ],
    highlightLine: 2,
    snapshotFence: 1,
    description:
      "`{{#italic}}` opens \u2014 pushed onto the Mustache stack, snapshots HTML stack size = 1.",
    action: "push",
    outputLines: OUTPUT_LINES[2],
    newLineCount: OUTPUT_ADDITIONS[2].length,
  },
  // <i>
  {
    htmlStack: [
      { label: "B", id: "b1" },
      { label: "I", id: "i1" },
    ],
    mustacheStack: [
      { label: "bold (html_size=0)", id: "bold1" },
      { label: "italic (html_size=1)", id: "italic1" },
    ],
    highlightLine: 3,
    snapshotFence: 1,
    description:
      "`<i>` opens inside the section \u2014 pushed onto the HTML stack.",
    action: "push",
    outputLines: OUTPUT_LINES[3],
    newLineCount: OUTPUT_ADDITIONS[3].length,
  },
  // {{/italic}} — check
  {
    htmlStack: [
      { label: "B", id: "b1" },
      { label: "I", id: "i1" },
    ],
    mustacheStack: [
      { label: "bold (html_size=0)", id: "bold1" },
      { label: "italic (html_size=1)", id: "italic1" },
    ],
    highlightLine: 4,
    snapshotFence: 1,
    description:
      "Scanner sees `{{/` \u2014 HTML stack size (2) > italic\u2019s snapshot (1). Unclosed tags detected!",
    action: "check",
    outputLines: OUTPUT_LINES[4],
    newLineCount: OUTPUT_ADDITIONS[4].length,
  },
  // {{/italic}} — force-close <i>
  {
    htmlStack: [{ label: "B", id: "b1" }],
    mustacheStack: [
      { label: "bold (html_size=0)", id: "bold1" },
      { label: "italic (html_size=1)", id: "italic1" },
    ],
    highlightLine: 4,
    snapshotFence: 1,
    description:
      "Emits `forced_end_tag` for `<i>` and pops it. Stack shrinks back to italic\u2019s snapshot fence.",
    action: "implicit-pop",
    outputLines: OUTPUT_LINES[5],
    newLineCount: OUTPUT_ADDITIONS[5].length,
  },
  // {{/italic}} — consumed
  {
    htmlStack: [{ label: "B", id: "b1" }],
    mustacheStack: [{ label: "bold (html_size=0)", id: "bold1" }],
    highlightLine: 4,
    snapshotFence: 0,
    description:
      "`{{/italic}}` is consumed normally \u2014 popped from the Mustache stack.",
    action: "pop",
    outputLines: OUTPUT_LINES[6],
    newLineCount: OUTPUT_ADDITIONS[6].length,
  },
  // {{/bold}} — check
  {
    htmlStack: [{ label: "B", id: "b1" }],
    mustacheStack: [{ label: "bold (html_size=0)", id: "bold1" }],
    highlightLine: 5,
    snapshotFence: 0,
    description:
      "Scanner sees `{{/` \u2014 HTML stack size (1) > bold\u2019s snapshot (0). Unclosed tags detected!",
    action: "check",
    outputLines: OUTPUT_LINES[7],
    newLineCount: OUTPUT_ADDITIONS[7].length,
  },
  // {{/bold}} — force-close <b>
  {
    htmlStack: [],
    mustacheStack: [{ label: "bold (html_size=0)", id: "bold1" }],
    highlightLine: 5,
    snapshotFence: 0,
    description:
      "Emits `forced_end_tag` for `<b>` and pops it. Stack shrinks back to bold\u2019s snapshot fence.",
    action: "implicit-pop",
    outputLines: OUTPUT_LINES[8],
    newLineCount: OUTPUT_ADDITIONS[8].length,
  },
  // {{/bold}} — consumed
  {
    htmlStack: [],
    mustacheStack: [],
    highlightLine: 5,
    snapshotFence: null,
    description:
      "`{{/bold}}` is consumed normally \u2014 popped from the Mustache stack.",
    action: "pop",
    outputLines: OUTPUT_LINES[9],
    newLineCount: OUTPUT_ADDITIONS[9].length,
  },
  // {{#bold}} (second)
  {
    htmlStack: [],
    mustacheStack: [{ label: "bold (html_size=0)", id: "bold2" }],
    highlightLine: 6,
    snapshotFence: 0,
    description:
      "`{{#bold}}` opens \u2014 pushed onto the Mustache stack, snapshots HTML stack size = 0.",
    action: "push",
    outputLines: OUTPUT_LINES[10],
    newLineCount: OUTPUT_ADDITIONS[10].length,
  },
  // </b> — erroneous
  {
    htmlStack: [],
    mustacheStack: [{ label: "bold (html_size=0)", id: "bold2" }],
    highlightLine: 7,
    snapshotFence: 0,
    description:
      "`</b>` has no matching open tag on the HTML stack \u2014 erroneous end tag.",
    action: "erroneous",
    outputLines: OUTPUT_LINES[11],
    newLineCount: OUTPUT_ADDITIONS[11].length,
  },
  // {{/bold}} — consumed
  {
    htmlStack: [],
    mustacheStack: [],
    highlightLine: 8,
    snapshotFence: null,
    description:
      "`{{/bold}}` consumed \u2014 popped from the Mustache stack. Both stacks empty.",
    action: "pop",
    outputLines: OUTPUT_LINES[12],
    newLineCount: OUTPUT_ADDITIONS[12].length,
  },
];

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

const htmlStackVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: (action: string) =>
    action === "implicit-pop"
      ? { opacity: 0, x: 40, backgroundColor: "rgba(220, 53, 69, 0.2)" }
      : { opacity: 0, y: 20 },
};

const springTransition = {
  type: "spring" as const,
  stiffness: 500,
  damping: 30,
};

const FenceLine = () => (
  <motion.div
    key="fence"
    className={styles.fence}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <span className={styles.fenceLabel}>tag depth</span>
  </motion.div>
);

export function StackAnimation() {
  const [stepIndex, setStepIndex] = useState(0);
  const step = STEPS[stepIndex];

  const isErroneous = step.action === "erroneous";

  const oldLineCount = step.outputLines.length - step.newLineCount;

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
                    step.highlightLine === i &&
                      (isErroneous
                        ? styles.erroneousLine
                        : styles.highlightedLine),
                  )}
                >
                  {line}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* HTML stack panel */}
        <div className="col-lg-2">
          <div className={styles.panel}>
            <div className={styles.panelHeader}>HTML Stack</div>
            <div className={styles.stackContainer}>
              <AnimatePresence custom={step.action}>
                {step.snapshotFence === 0 && <FenceLine />}
                {step.htmlStack.map((item, i) => (
                  <React.Fragment key={item.id}>
                    <motion.div
                      key={item.id}
                      className={classNames(styles.stackItem, styles.htmlTag)}
                      variants={htmlStackVariants}
                      custom={step.action}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={springTransition}
                    >
                      {item.label}
                    </motion.div>
                    {step.snapshotFence !== null &&
                      step.snapshotFence > 0 &&
                      step.snapshotFence === i + 1 && <FenceLine />}
                  </React.Fragment>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Mustache stack panel */}
        <div className="col-lg-2">
          <div className={styles.panel}>
            <div className={styles.panelHeader}>Mustache Stack</div>
            <div className={styles.stackContainer}>
              <AnimatePresence mode="popLayout">
                {step.mustacheStack.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    className={classNames(styles.stackItem, styles.mustacheTag)}
                    variants={itemVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={springTransition}
                  >
                    {item.label}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Parse tree output panel */}
        <div className="col-lg-5">
          <div className={styles.panel}>
            <div className={styles.panelHeader}>Parse Tree</div>
            <div className={styles.output}>
              {step.outputLines.map((line, i) => (
                <div
                  key={i}
                  className={classNames(
                    styles.outputLine,
                    i >= oldLineCount &&
                      (isErroneous
                        ? styles.erroneousOutputLine
                        : styles.newOutputLine),
                  )}
                >
                  {line}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className={styles.controls}>
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
          <small className="text-muted">
            Step {stepIndex + 1} of {STEPS.length}
          </small>
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
