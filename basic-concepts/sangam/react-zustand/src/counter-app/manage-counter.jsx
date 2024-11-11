import { useActions } from "../store/use-counter";

function ManageCounter() {
  const { handleIncrementCount } = useActions();

  return (
    <button
      style={{
        marginBottom: "20px",
        background: "black",
        color: "white",
        fontSize: "20px",
        fontWeight: "bold",
      }}
      onClick={handleIncrementCount}
    >
      Handle Counter Value
    </button>
  );
}

export default ManageCounter;
