import CounterReducer from "./useReducer/challenge/CounterReducer";
import FocusInput from "./useRef/challenge/FocusInput";
import Timer from "./useRef/challenge/Timer";
import FocusElement from "./useRef/FocusElement";

function App() {
  return (
    <div>
      {/* <CounterReducer /> */}
      <FocusElement />
      <FocusInput />
      <Timer />
    </div>
  );
}

export default App;
