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

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  const date = new Date();
  date.setDate(date.getDate() + count);

  // Format tanggal dalam Bahasa Indonesia (id-ID)
  const formattedDate = new Intl.DateTimeFormat("id-ID", {
    weekday: "long", // Hari dalam minggu, seperti "Senin"
    year: "numeric", // Tahun dalam angka, seperti "2024"
    month: "long", // Nama bulan, seperti "November"
    day: "numeric", // Tanggal dalam angka, seperti "15"
  }).format(date);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          justifyContent: "center",
          marginBottom: "1rem",
        }}
      >
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span style={{ fontSize: "2rem" }}>Step: {step}</span>
      </div>

      <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>

      <p style={{ fontSize: "2rem" }}>
        <span>
          {count === 0
            ? "Hari ini adalah"
            : count > 0
            ? `${count} hari dari hari ini adalah`
            : `${Math.abs(count)} hari yang lalu adalah`}
        </span>
        <span> {formattedDate}</span>
      </p>

      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}

export default App;
