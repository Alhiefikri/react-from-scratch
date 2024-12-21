import { useQuiz } from "../context/QuizContext";

/* eslint-disable react/prop-types */
function Progress() {
  const { numQuestions, index, answer, points, maxPoissiblePoints } = useQuiz();
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>

      <p>
        <strong>{points}</strong> / {maxPoissiblePoints}
      </p>
    </header>
  );
}

export default Progress;
