import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaBootstrap,
  FaSass,
  FaGit,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";

const Skills = () => {
  return (
    <div id="skills">
      <div className="font-sora text-[20px] text-[#fbfbfb] md:text-[40px] md:leading-[72px]">
        here are the skills I have
      </div>
      <div className="grid grid-cols-1 gap-8 p-4 sm:grid-cols-2 md:grid-cols-3 min-[1300px]:grid-cols-4">
        <div className="rounded-xl bg-slate-400 p-6 text-center shadow-xl duration-300 ease-in hover:scale-[1.1] hover:shadow-xl hover:shadow-[#3bf686]">
          <div className="grid grid-cols-2 items-center justify-center gap-4">
            <div className="m-auto">
              <FaHtml5 className="text-8xl" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-4xl">HTML</h3>
            </div>
          </div>
        </div>
        <div className="rounded-xl bg-slate-400 p-6 text-center shadow-xl duration-300 ease-in hover:scale-[1.1] hover:shadow-xl hover:shadow-[#3bf686]">
          <div className="grid grid-cols-2 items-center justify-center gap-4">
            <div className="m-auto">
              <FaCss3 className="text-8xl" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-4xl">CSS</h3>
            </div>
          </div>
        </div>
        <div className="rounded-xl bg-slate-400 p-6 text-center shadow-xl duration-300 ease-in hover:scale-[1.1] hover:shadow-xl hover:shadow-[#3bf686]">
          <div className="grid grid-cols-2 items-center justify-center gap-4">
            <div className="m-auto">
              <IoLogoJavascript className="text-8xl" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-4xl">HTML</h3>
            </div>
          </div>
        </div>
        <div className="rounded-xl bg-slate-400 p-6 text-center shadow-xl duration-300 ease-in hover:scale-[1.1] hover:shadow-xl hover:shadow-[#3bf686]">
          <div className="grid grid-cols-2 items-center justify-center gap-4">
            <div className="m-auto">
              <FaReact className="text-8xl" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-4xl">React</h3>
            </div>
          </div>
        </div>
        <div className="rounded-xl bg-slate-400 p-6 text-center shadow-xl duration-300 ease-in hover:scale-[1.1] hover:shadow-xl hover:shadow-[#3bf686]">
          <div className="grid grid-cols-2 items-center justify-center gap-4">
            <div className="m-auto">
              <FaBootstrap className="text-8xl" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-3xl">Boostrap</h3>
            </div>
          </div>
        </div>
        <div className="rounded-xl bg-slate-400 p-6 text-center shadow-xl duration-300 ease-in hover:scale-[1.1] hover:shadow-xl hover:shadow-[#3bf686]">
          <div className="grid grid-cols-2 items-center justify-center gap-4">
            <div className="m-auto">
              <RiTailwindCssFill className="text-8xl" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-4xl">Tailwind</h3>
            </div>
          </div>
        </div>
        <div className="rounded-xl bg-slate-400 p-6 text-center shadow-xl duration-300 ease-in hover:scale-[1.1] hover:shadow-xl hover:shadow-[#3bf686]">
          <div className="grid grid-cols-2 items-center justify-center gap-4">
            <div className="m-auto">
              <FaSass className="text-8xl" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-4xl">Sass</h3>
            </div>
          </div>
        </div>
        <div className="rounded-xl bg-slate-400 p-6 text-center shadow-xl duration-300 ease-in hover:scale-[1.1] hover:shadow-xl hover:shadow-[#3bf686]">
          <div className="grid grid-cols-2 items-center justify-center gap-4">
            <div className="m-auto">
              <FaGit className="text-8xl" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-4xl">Git</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
