import { useDispatch } from "react-redux";
import { handleIncreaseCountAction } from "../store/slices/counter";

function CounterButton() {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(
      handleIncreaseCountAction({
        id: 1,
        name: "alhie",
      })
    );
  }

  return (
    <button
      onClick={handleClick}
      style={{ backgroundColor: "white", color: "black", fontWeight: "bold" }}
    >
      Increase Counter
    </button>
  );
}

export default CounterButton;
