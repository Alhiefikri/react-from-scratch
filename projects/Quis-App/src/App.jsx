import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Start from "./pages/Start";
import Question from "./pages/Question";
import Score from "./pages/Score";
import Review from "./pages/Review";

function App() {
  const [display, setDisplay] = useState("start");
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState({});
  const [score, setScore] = useState({});
  const handlePrev = () => {
    setIndex((index) => index - 1);
  };
  const handleNext = () => {
    setIndex((index) => index + 1);
  };
  const handleReset = () => {
    setIndex(0);
    setAnswer({});
    setDisplay("start");
    setScore({});
  };
  return (
    <div className="flex h-screen flex-col">
      <Header display={display} />
      <div className="w-full flex-1 bg-charcoal">
        {display == "start" && <Start setDisplay={setDisplay} />}
        {display == "question" && (
          <Question
            setScore={setScore}
            index={index}
            handleNext={handleNext}
            handlePrev={handlePrev}
            answer={answer}
            setAnswer={setAnswer}
            setDisplay={setDisplay}
          />
        )}
        {display === "score" && (
          <Score score={score} setDisplay={setDisplay} setIndex={setIndex} />
        )}
        {display === "review" && (
          <Review
            index={index}
            answer={answer}
            setDisplay={setDisplay}
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
        )}
      </div>
      <Footer handleReset={handleReset} />
    </div>
  );
}

export default App;
