import { useEffect, useState } from "react";

const CounterEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
    </div>
  );
};
export default CounterEffect;
