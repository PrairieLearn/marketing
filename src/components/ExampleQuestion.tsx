import React from "react";

/**
 * Deterministic random number generator based on a seed.
 *
 * Source: https://github.com/bryc/code/blob/a7c9e4c53c2ca4f3e33c6338d5c72f5faf6d5024/jshash/PRNGs.md
 */
function mulberry32(a: number): () => number {
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const randomNumber = (
  min: number,
  max: number,
  precision: number,
  random: () => number,
) => {
  const factor = Math.pow(10, precision);
  return Math.floor(factor * (min + random() * (max - min))) / factor;
};

interface ExampleQuestionProps {
  /**
   * A number between 0 and 1 that will be used as a seed for a deterministic
   * random number generator. It must be deterministic so that the same numbers
   * are generated on both the server and client.
   */
  seed: number;
}

export const ExampleQuestion: React.FC<ExampleQuestionProps> = ({ seed }) => {
  const generator = React.useMemo(() => mulberry32(seed * 100000), [seed]);
  const randomAngle = () => randomNumber(20, 80, 1, generator);
  const randomVelocity = () => randomNumber(1, 8, 1, generator);
  const [angle, setAngle] = React.useState(randomAngle);
  const [velocity, setVelocity] = React.useState(randomVelocity);
  const [answer, setAnswer] = React.useState("");
  const [graded, setGraded] = React.useState(false);
  const [correct, setCorrect] = React.useState(false);

  const grade = () => {
    try {
      const parsedAnswer = Number.parseFloat(answer);
      const correctAnswer =
        (Math.sin(2 * ((angle * Math.PI) / 180)) * velocity * velocity) / 9.8;
      // Accept answers with absolute tolerance of 0.1
      setCorrect(Math.abs(correctAnswer - parsedAnswer) <= 0.1);
    } catch (e) {
      setCorrect(false);
    }
    setGraded(true);
  };

  const newVariant = () => {
    setGraded(false);
    setAnswer("");

    setAngle(randomAngle());
    setVelocity(randomVelocity());
  };

  return (
    <div className="card shadow">
      <div className="card-header d-flex align-items-center">
        <span className="badge rounded-pill bg-success me-3">Try me!</span>
        Question 5: Ball trajectory
      </div>
      <div className="card-body">
        <p>
          Suppose a ball is thrown from a level surface at a {angle}° angle with
          a velocity of {velocity} m/s. How far will the ball travel?
        </p>
        <span className="input-group">
          <input
            type="text"
            className="form-control"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
          <span className="input-group-text">
            <span className="me-2">m</span>
            {graded && correct && (
              <span className="badge bg-success">100%</span>
            )}
            {graded && !correct && <span className="badge bg-danger">0%</span>}
          </span>
        </span>
      </div>
      <div className="card-footer d-flex justify-content-end">
        <button
          type="button"
          className="btn btn-primary me-2"
          onClick={newVariant}
        >
          New variant
        </button>
        <button type="button" className="btn btn-primary" onClick={grade}>
          Grade
        </button>
      </div>
    </div>
  );
};
