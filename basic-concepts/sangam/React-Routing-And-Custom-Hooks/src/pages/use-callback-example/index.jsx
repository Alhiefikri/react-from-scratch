import { useState } from "react";
import Counter from "./counter";
import { useCallback } from "react";
import { memo } from "react";

function UseCallbackExample() {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const memoriseSetCountOnefunc = useCallback(
    () => setCountOne(countOne + 1),
    [countOne]
  );
  const memoriseSetCountTwofunc = useCallback(
    () => setCountTwo(countTwo + 1),
    [countTwo]
  );

  return (
    <div>
      <h1>Use Callback Example</h1>
      <Counter countValue={countOne} onClick={memoriseSetCountOnefunc} />
      <Counter countValue={countTwo} onClick={memoriseSetCountTwofunc} />
    </div>
  );
}

export default UseCallbackExample;
