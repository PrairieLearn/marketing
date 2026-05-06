import classNames from "classnames";

import styles from "./AccessControlCascade.module.scss";

type Field = "release" | "due" | "timeLimit";

interface Layer {
  name: string;
  description: string;
  className: string;
  values: Partial<Record<Field, string>>;
}

interface ResolvedExample {
  studentName: string;
  studentLabels: string;
  source: Record<Field, number>;
}

const FIELDS: { key: Field; label: string }[] = [
  { key: "release", label: "Release date" },
  { key: "due", label: "Due date" },
  { key: "timeLimit", label: "Time limit" },
];

const LAYERS: Layer[] = [
  {
    name: "Default",
    description: "Applies to everyone",
    className: styles.layerDefault,
    values: { release: "Mar 2", due: "Mar 13", timeLimit: "60 min" },
  },
  {
    name: "Section A",
    description: "Label override",
    className: styles.layerSectionA,
    values: { release: "Mar 4", due: "Mar 15" },
  },
  {
    name: "Section B",
    description: "Label override",
    className: styles.layerSectionB,
    values: { due: "Mar 16" },
  },
  {
    name: "Extended time",
    description: "Accommodation label",
    className: styles.layerExtended,
    values: { timeLimit: "90 min" },
  },
];

const RESOLVED: ResolvedExample[] = [
  {
    studentName: "Alice",
    studentLabels: "Section A · Extended time",
    source: { release: 1, due: 1, timeLimit: 3 },
  },
  {
    studentName: "Bob",
    studentLabels: "Section B",
    source: { release: 0, due: 2, timeLimit: 0 },
  },
];

export function AccessControlCascade() {
  return (
    <div className={styles.cascade}>
      <div>
        <div className={styles.sectionTitle}>Layered overrides</div>
        <div className={styles.table}>
          <div className={styles.headerRow}>
            <div className={styles.headerCell}>Layer</div>
            {FIELDS.map((f) => (
              <div key={f.key} className={styles.headerCell}>
                {f.label}
              </div>
            ))}
          </div>
          {LAYERS.map((layer) => (
            <div
              key={layer.name}
              className={classNames(styles.row, layer.className)}
            >
              <div className={styles.layerColumn}>
                <div className={styles.layerName}>{layer.name}</div>
                <div className={styles.layerDesc}>{layer.description}</div>
              </div>
              {FIELDS.map((f) => {
                const value = layer.values[f.key];
                return (
                  <div
                    key={f.key}
                    data-label={f.label}
                    className={classNames(
                      styles.cell,
                      value ? styles.cellSet : styles.cellInherit,
                    )}
                  >
                    {value ?? "inherits"}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className={styles.sectionTitle}>Effective rules per student</div>
        {RESOLVED.map((r) => (
          <div key={r.studentName} className={styles.resolvedCard}>
            <div className={styles.resolvedHeader}>
              <span className={styles.resolvedName}>{r.studentName}</span>
              <span className={styles.resolvedLabels}>{r.studentLabels}</span>
            </div>
            <div className={styles.resolvedFields}>
              {FIELDS.map((f) => {
                const layer = LAYERS[r.source[f.key]];
                const value = layer.values[f.key];
                return (
                  <div key={f.key} className={styles.resolvedField}>
                    <div className={styles.resolvedFieldLabel}>{f.label}</div>
                    <div className={styles.resolvedFieldValue}>{value}</div>
                    <div
                      className={classNames(
                        styles.resolvedFieldSource,
                        layer.className,
                      )}
                    >
                      from {layer.name}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
