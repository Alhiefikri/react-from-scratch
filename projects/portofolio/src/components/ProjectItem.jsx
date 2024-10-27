/* eslint-disable react/prop-types */
const ProjectItem = ({ title, backgroundImg, tech, projectUrl }) => {
  return (
    <div className="group relative flex h-auto w-full items-center justify-center rounded-xl shadow-xl shadow-slate-600 duration-500 ease-in-out hover:scale-[1.05] hover:bg-white">
      <img
        className="h-500px rounded-xl bg-cover bg-center group-hover:opacity-10"
        src={backgroundImg}
        alt={title}
      />
      <div className="absolute left-[50%] top-[50%] hidden translate-x-[-50%] translate-y-[-50%] group-hover:block">
        <h2 className="text-center text-2xl font-bold tracking-wider text-slate-600">
          {title}
        </h2>
        <p className="pb-4 pt-2 text-center font-bold text-slate-600">{tech}</p>
        <a href={projectUrl} target="_blank">
          <p className="cursor-pointer rounded-lg bg-[linear-gradient(134deg,_#3BF686_40.75%,_#4CA9FF_90.52%)] py-3 text-center font-sora font-bold duration-500 ease-in hover:shadow-md hover:shadow-slate-500">
            Go To Demo
          </p>
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
