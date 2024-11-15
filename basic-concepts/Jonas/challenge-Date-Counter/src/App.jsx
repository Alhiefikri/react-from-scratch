import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
          marginBottom: "1rem",
        }}
      >
        <button onClick={() => setStep((c) => c - 1)}>-</button>
        <span style={{ fontSize: "2rem" }}>Step: {step}</span>
        <button onClick={() => setStep((c) => c + 1)}>+</button>
      </div>

      <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <span style={{ fontSize: "2rem" }}>Count: {count}</span>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>

      <p style={{ fontSize: "2rem" }}>
        <span>
          {count === 0
            ? "Today is"
            : count > 0
            ? `${count} days from today is`
            : `${Math.abs(count)} days ago was`}
        </span>
        <span> {date.toDateString()}</span>
      </p>
    </div>
  );
}

export default App;
