import "./App.css";
import ProductList from "./components/products";
import ClassBasedComponent from "./components/Class-based-component";
import Users from "./components/users";
import ContextButtonComponen from "./components/context-concept/button";
import ContextTextComponen from "./components/context-concept/text";
import UseReducerExample from "./components/Use-reducer-example";
import FormComponent from "./components/form";
import LoginComponent from "./components/login";
import RegisterComponent from "./components/register";
// import FunctionalComponent from "./components/Functional-based-component";

// const dummyProductData = ["Product 1", "Product 2", "Product 3"];

function App() {
  return (
    <div>
      <h1>React JS Concepts 2024</h1>
      {/*   */}
      {/* <FunctionalComponent /> */}

      {/* <ProductList
        listOfProducts={dummyProductData}
        name="Fikri"
        city="Mumbai"
      /> */}
      {/* <Users /> */}
      {/* <UseReducerExample /> */}
      {/* <ContextButtonComponen />
      <ContextTextComponen /> */}
      {/* <FormComponent /> */}
      <div style={{ display: "flex", gap: "20px" }}>
        <LoginComponent />
        <RegisterComponent />
      </div>
    </div>
  );
}

export default App;
