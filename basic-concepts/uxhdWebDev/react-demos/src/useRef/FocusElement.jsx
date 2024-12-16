import { useRef } from "react";

const FocusElement = () => {
  const inputElement = useRef(null);

  const focusInput = () => {
    inputElement.current.focus();
    inputElement.current.value = "Alhie";
  };

  return (
    <div>
      <input type="text" ref={inputElement} />
      <button onClick={() => focusInput()}>Focus & Write Alhie</button>
    </div>
  );
};
export default FocusElement;
