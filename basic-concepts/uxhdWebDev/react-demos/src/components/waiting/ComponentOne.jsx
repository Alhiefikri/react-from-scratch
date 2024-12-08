const ComponentOne = ({ count, onClick }) => {
  const handleClick = () => onClick();
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};
export default ComponentOne;
