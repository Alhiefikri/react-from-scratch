import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter((count) => count + 1);
  const decrement = () => setCounter((count) => (count > 0 ? count - 1 : 0)); // Pembatasan nilai minimal

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1 style={{ fontSize: "3em" }}>{counter}</h1>
      <button
        onClick={decrement}
        style={{
          fontSize: "2em",
          padding: "10px 20px",
          margin: "10px",
          cursor: "pointer",
        }}
      >
        -
      </button>
      <button
        onClick={increment}
        style={{
          fontSize: "2em",
          padding: "10px 20px",
          margin: "10px",
          cursor: "pointer",
        }}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
