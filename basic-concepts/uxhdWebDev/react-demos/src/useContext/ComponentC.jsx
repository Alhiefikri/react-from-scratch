import { useContext } from "react";
import { Data, Data1 } from "../App";

const ComponentC = () => {
  const userName = useContext(Data);
  const age = useContext(Data1);

  return (
    <div>
      <h1>
        my name is: {userName} and my age is: {age}{" "}
      </h1>
    </div>
  );
};
export default ComponentC;
