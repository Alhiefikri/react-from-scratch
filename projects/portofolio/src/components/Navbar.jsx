import { useEffect } from "react";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  //   Check Shadow dengan menggunakan eventListener scroll arah Y dengan useEffect
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 100) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  });
  return (
    <div
      className={`${shadow ? "shadow-xl shadow-slate-900" : ""} bg-black-2 fixed right-0 z-[1000] flex h-[70px] w-full items-center justify-between px-[30px] text-white md:h-[70px] md:px-[100px]`}
    >
      <div className="font-poppins text-[24px] font-bold">Alhie</div>
      <ul
        className={`${nav ? "top-[70px]" : "top-[-490px]"} bg-black-2 absolute left-0 z-[100] w-full gap-2 px-[30px] pb-12 transition-all duration-300 ease-in md:static md:z-auto md:flex md:w-auto md:items-center md:pb-0`}
      >
        <li className="cursor-pointer bg-[linear-gradient(134deg,_#3BF686_40.75%,_#ACA9FF_90.52%)] bg-clip-text p-2 hover:text-transparent xl:hover:scale-110">
          <a href="/#home">Home</a>
        </li>
        <li className="cursor-pointer bg-[linear-gradient(134deg,_#3BF686_40.75%,_#ACA9FF_90.52%)] bg-clip-text p-2 hover:text-transparent xl:hover:scale-110">
          <a href="/#about">About</a>
        </li>
        <li className="cursor-pointer bg-[linear-gradient(134deg,_#3BF686_40.75%,_#ACA9FF_90.52%)] bg-clip-text p-2 hover:text-transparent xl:hover:scale-110">
          <a href="/#skills">Skills</a>
        </li>
        <li className="cursor-pointer bg-[linear-gradient(134deg,_#3BF686_40.75%,_#ACA9FF_90.52%)] bg-clip-text p-2 hover:text-transparent xl:hover:scale-110">
          <a href="/#projects">Projects</a>
        </li>
        <li className="cursor-pointer bg-[linear-gradient(134deg,_#3BF686_40.75%,_#ACA9FF_90.52%)] bg-clip-text p-2 hover:text-transparent xl:hover:scale-110">
          <a href="/#projects">CV/Resume</a>
        </li>
        <li className="cursor-pointer bg-[linear-gradient(134deg,_#3BF686_40.75%,_#ACA9FF_90.52%)] bg-clip-text p-2 hover:text-transparent xl:hover:scale-110">
          <a href="/#contact">Contact</a>
        </li>
      </ul>
      <div
        className="flex text-2xl font-bold md:hidden"
        onClick={() => setNav(!nav)}
      >
        {nav ? <IoClose /> : <AiOutlineMenu />}
      </div>
    </div>
  );
};

export default Navbar;
