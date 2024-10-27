import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div
      id="porto"
      className="flex w-full flex-col bg-black-2 px-[30px] md:px-[100px]"
    >
      <Navbar />
      <div className="mt-[70px] md:mt-[100px]">
        <hr className="my-5 h-[1px] border-none bg-[#4D4D4D]" />
        <Main />
        <hr className="my-5 h-[1px] border-none bg-[#4D4D4D]" />
        <About />
        <hr className="my-5 h-[1px] border-none bg-[#4D4D4D]" />
        <Skills />
        <hr className="my-5 h-[1px] border-none bg-[#4D4D4D]" />
        <Projects />
        <hr className="my-5 h-[1px] border-none bg-[#4D4D4D]" />
        <Contact />
      </div>
    </div>
  );
}

export default App;
