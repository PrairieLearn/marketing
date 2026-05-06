import styles from "./CreditTimeline.module.scss";

interface Milestone {
  label: string;
  date: string;
  position: number;
}

interface Segment {
  credit: number;
  label: string;
  className: string;
  startIndex: number;
  endIndex: number;
}

const MILESTONES: Milestone[] = [
  { label: "Release", date: "Mar 2", position: 0 },
  { label: "Early deadline", date: "Mar 10", position: 44 },
  { label: "Due date", date: "Mar 13", position: 61 },
  { label: "Late deadline", date: "Mar 18", position: 89 },
  { label: "End", date: "Mar 20", position: 100 },
];

const SEGMENTS: Segment[] = [
  {
    credit: 110,
    label: "Bonus",
    className: "segmentBonus",
    startIndex: 0,
    endIndex: 1,
  },
  {
    credit: 100,
    label: "Full credit",
    className: "segmentFull",
    startIndex: 1,
    endIndex: 2,
  },
  {
    credit: 80,
    label: "Late credit",
    className: "segmentLate",
    startIndex: 2,
    endIndex: 3,
  },
  {
    credit: 0,
    label: "Practice",
    className: "segmentPractice",
    startIndex: 3,
    endIndex: 4,
  },
];

const PLOT_LEFT_PCT = 8;
const PLOT_RIGHT_PCT = 96;
const CREDIT_MAX = 120;

function xPct(position: number) {
  return PLOT_LEFT_PCT + (position / 100) * (PLOT_RIGHT_PCT - PLOT_LEFT_PCT);
}

function yPct(credit: number) {
  return (1 - credit / CREDIT_MAX) * 100;
}

export function CreditTimeline() {
  const stepPath = (() => {
    let d = "";
    SEGMENTS.forEach((seg, i) => {
      const x1 = xPct(MILESTONES[seg.startIndex].position);
      const x2 = xPct(MILESTONES[seg.endIndex].position);
      const y = yPct(seg.credit);
      if (i === 0) d += `M ${x1} ${y} L ${x2} ${y}`;
      else d += ` L ${x1} ${y} L ${x2} ${y}`;
    });
    return d;
  })();

  const areaPath = (() => {
    const baseY = yPct(0);
    let d = `M ${xPct(MILESTONES[0].position)} ${baseY}`;
    SEGMENTS.forEach((seg) => {
      const x1 = xPct(MILESTONES[seg.startIndex].position);
      const x2 = xPct(MILESTONES[seg.endIndex].position);
      const y = yPct(seg.credit);
      d += ` L ${x1} ${y} L ${x2} ${y}`;
    });
    d += ` L ${xPct(MILESTONES[MILESTONES.length - 1].position)} ${baseY} Z`;
    return d;
  })();

  const gridLines = [0, 50, 100];

  return (
    <div className={styles.timeline}>
      <div className={styles.sectionTitle}>Example credit timeline</div>

      <div className={styles.chartWrap}>
        <div className={styles.chartInner}>
          {gridLines.map((g) => (
            <div
              key={g}
              className={styles.gridRow}
              style={{ top: `${yPct(g)}%` }}
            >
              <span className={styles.axisLabel}>{g}%</span>
            </div>
          ))}

          <svg
            className={styles.svg}
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="creditArea" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.16" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.02" />
              </linearGradient>
            </defs>

            <path d={areaPath} fill="url(#creditArea)" />

            {MILESTONES.map((m) => (
              <line
                key={m.label}
                x1={xPct(m.position)}
                x2={xPct(m.position)}
                y1="0"
                y2="100"
                className={styles.milestoneLine}
                vectorEffect="non-scaling-stroke"
              />
            ))}

            <path
              d={stepPath}
              className={styles.stepLine}
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          {SEGMENTS.map((seg) => {
            const startPos = MILESTONES[seg.startIndex].position;
            const endPos = MILESTONES[seg.endIndex].position;
            const midPct = xPct((startPos + endPos) / 2);
            const top = yPct(seg.credit);
            return (
              <div
                key={seg.label}
                className={`${styles.creditBadge} ${styles[seg.className]}`}
                style={{
                  left: `${midPct}%`,
                  top: `calc(${top}% - 1.6rem)`,
                }}
              >
                {seg.credit}%
              </div>
            );
          })}

          {MILESTONES.map((m, idx) => {
            let dotCredit;
            if (idx === 0) dotCredit = SEGMENTS[0].credit;
            else if (idx === MILESTONES.length - 1)
              dotCredit = SEGMENTS[SEGMENTS.length - 1].credit;
            else dotCredit = SEGMENTS[idx - 1].credit;
            return (
              <div
                key={m.label}
                className={styles.milestoneDot}
                style={{
                  left: `${xPct(m.position)}%`,
                  top: `${yPct(dotCredit)}%`,
                }}
              />
            );
          })}
        </div>

        <div className={styles.milestoneLabels}>
          {MILESTONES.map((m) => (
            <div
              key={m.label}
              className={styles.milestoneLabel}
              style={{ left: `${xPct(m.position)}%` }}
            >
              <div className={styles.milestoneName}>{m.label}</div>
              <div className={styles.milestoneDate}>{m.date}</div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.legend}>
        {SEGMENTS.map((seg) => (
          <div key={seg.label} className={styles.legendItem}>
            <span
              className={`${styles.legendSwatch} ${styles[seg.className]}`}
            />
            <span className={styles.legendLabel}>{seg.label}</span>
            <span className={styles.legendValue}>{seg.credit}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
