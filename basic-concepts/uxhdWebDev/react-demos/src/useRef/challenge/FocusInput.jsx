import { useRef } from "react";

const FocusInput = () => {
  const inputRef = useRef(null);

  const inputFocus = () => inputRef.current.focus();

  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        placeholder="Click the button to focus"
      />
      <button onClick={inputFocus}>Focus the input</button>
    </div>
  );
};
export default FocusInput;
