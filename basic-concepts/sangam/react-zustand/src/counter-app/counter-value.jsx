import useCounter from "../store/use-counter";

function CounterValue() {
  const count = useCounter((state) => state.count);

  console.log(count);

  return <div>Counter Value is {count}</div>;
}

export default CounterValue;
