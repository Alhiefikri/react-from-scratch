import ProjectItem from "./ProjectItem";
import ProjectImg_1 from "../assets/project_1.png";
import ProjectImg_2 from "../assets/project_2.png";
import ProjectImg_3 from "../assets/project_3.png";
import ProjectImg_4 from "../assets/project_4.png";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="flex flex-col">
        <div className="font-sora text-[20px] text-[#fbfbfb] md:text-[40px] md:leading-[72px]">
          What I have Build
        </div>
      </div>
      <div className="grid gap-8 p-8 md:grid-cols-2 md:p-12">
        {/* Projects Item */}
        <ProjectItem
          title="Javascript Tiny Project"
          backgroundImg={ProjectImg_1}
          projectUrl="https://alhiefikri.github.io/javascript-project"
          tech="Vanilla Javascript"
        />
        <ProjectItem
          title="Coffe Shop"
          backgroundImg={ProjectImg_2}
          projectUrl="https://alhiefikri.github.io/javascript-project/projects/kopi-senja/"
          tech="Vanilla Javascript"
        />
        <ProjectItem
          title="TV Show"
          backgroundImg={ProjectImg_3}
          projectUrl="https://alhiefikri.github.io/javascript-project/projects/tv-finder/"
          tech="Vanilla Javascript (Consume Api)"
        />
        <ProjectItem
          title="Typing Test"
          backgroundImg={ProjectImg_4}
          projectUrl="https://alhiefikri.github.io/javascript-project/projects/tv-finder/"
          tech="Vanilla Javascript"
        />
      </div>
    </div>
  );
};

export default Projects;
