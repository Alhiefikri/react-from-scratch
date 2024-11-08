import { useState } from "react";

function FormComponent() {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");

  const [formData, setFormData] = useState({ name: "", email: "" });

  function handleOnChange(event) {
    console.log(event.target.name);

    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  console.log(formData);

  function handleSubmit(event) {
    event.preventvDefault();

    //call the api and pass the name value

    console.log(nameValue, emailValue, "nameValue");
  }

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={formData.name}
          name="name"
          id="name"
          placeholder="Enter your name"
          //   onChange={handleOnChange}

          onChange={(e) =>
            setFormData({
              ...formData,
              [e.target.name]: e.target.value,
            })
          }
        />
        <input
          value={formData.email}
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          //   onChange={handleOnChange}

          onChange={(e) =>
            setFormData({
              ...formData,
              [e.target.email]: e.target.value,
            })
          }
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormComponent;
