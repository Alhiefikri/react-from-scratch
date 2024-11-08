import { useState } from "react";
import { RegisterFormElements } from "../../config";
import CommonForm from "../common-form";

const initialRegisterFormData = {
  name: "",
  email: "",
  password: "",
};

function RegisterComponent() {
  const [registerFormData, setRegisterFormData] = useState(
    initialRegisterFormData
  );

  function handleRegisterOnSubmit(event) {
    event.preventDefault();

    console.log(registerFormData);

    setRegisterFormData(initialRegisterFormData);
  }

  return (
    <div>
      <h1>Register page/component</h1>

      <CommonForm
        formControls={RegisterFormElements}
        formData={registerFormData}
        setFormData={setRegisterFormData}
        buttonText={"Register"}
        onHandleSubmit={handleRegisterOnSubmit}
      />
    </div>
  );
}

export default RegisterComponent;
