import React from "react";

const randomNumber = (min: number, max: number, precision: number) => {
  const factor = Math.pow(10, precision);
  return Math.floor(factor * (min + Math.random() * (max - min))) / factor;
};

const randomAngle = () => randomNumber(20, 80, 1);
const randomVelocity = () => randomNumber(1, 8, 1);

export const ExampleQuestion: React.FC = () => {
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
            <span className="me-2">meters</span>
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
