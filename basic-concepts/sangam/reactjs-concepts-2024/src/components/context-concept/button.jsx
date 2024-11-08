import { useContext } from "react";
import { GlobalContext } from "../../context";

function ContextButtonComponen() {
  const { handleChangeThemeOnButtonClick } = useContext(GlobalContext);

  return <button onClick={handleChangeThemeOnButtonClick}>Change Theme</button>;
}

export default ContextButtonComponen;
