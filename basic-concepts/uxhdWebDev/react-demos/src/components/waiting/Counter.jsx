import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter((counter) => counter + 1);
  const decrement = () => setCounter((counter) => counter - 1);

  return (
    <div>
      <p>You clicked {counter} times</p>
      <button onClick={decrement}>decrement</button>
      <button onClick={increment}>Increment</button>
    </div>
  );
};
export default Counter;
