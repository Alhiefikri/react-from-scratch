import { facebook, globe, instagram, twitter } from "../assets/svg/svg";
import icon_portofolio from "../assets/icon-portofolio.png";
const Main = () => {
  return (
    <div id="home" className="flex flex-col py-[30px]">
      <div className="w-full bg-[linear-gradient(134deg,_#3BF686_40.75%,_#ACA9FF_90.52%)] bg-clip-text font-sora text-[24px] font-bold text-transparent md:w-[80%] md:text-[56px] md:leading-[72px] md:tracking-[1px]">
        Hi I`m Alhie, a software engineer with various programming language and
        little curiosity
      </div>
      <div className="mt-[35px] flex flex-col gap-[30px] md:mt-[69px] md:flex-row">
        <div className="flex-[2]">
          <div className="font-sora text-[15px] text-[#d6d6d5] md:text-[28px] md:leading-[72px]">
            What I do
          </div>
          <div className="text-[10px] text-[#d6d6d6] md:text-[18px]">
            Create the computer applications that allow users to do specific
            tasks and the underlying systems that run the devices or control
            networks. I also do Freelance and teach programming in youtube
          </div>
        </div>
        <div className="flex flex-[3] flex-col items-center justify-center gap-[30px] md:flex-row md:justify-normal">
          <div className="relative mt-[36px] flex w-[262px] flex-col items-center justify-center rounded-[12px] bg-[#323443] px-3 pb-4 pt-8 duration-300 ease-in-out hover:scale-110 md:mt-0">
            <div className="absolute top-[-36px] rounded-full bg-[linear-gradient(134deg,_#3BF686_40.75%,_#4CA9FF_90.52%)] p-[1px]">
              <div className="rounded-full bg-[#3A3636] p-[17px]">{globe}</div>
            </div>
            <div className="font-sora text-[16px] font-semibold leading-[72px] tracking-[1px] text-white">
              Freelance
            </div>
            <div className="text-[14px] leading-6 tracking-[1px] text-slate-400">
              Most of the freelance work I take is as a frontend engineer, but
              also open for oppurtinity
            </div>
          </div>
          <div className="relative mt-[36px] flex w-[262px] flex-col items-center justify-center rounded-[12px] bg-[#323443] px-3 pb-4 pt-8 duration-300 ease-in-out hover:scale-110 md:mt-0">
            <div className="absolute top-[-36px] rounded-full bg-[linear-gradient(134deg,_#3BF686_40.75%,_#4CA9FF_90.52%)] p-[1px]">
              <div className="rounded-full bg-[#3A3636] p-[17px]">{globe}</div>
            </div>
            <div className="font-sora text-[16px] font-semibold leading-[72px] tracking-[1px] text-white">
              Content Creator
            </div>
            <div className="text-[14px] leading-6 tracking-[1px] text-slate-400">
              Teach vaious programming language in youtube, The channel called
              Kenapa Coding
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[35px] flex flex-col md:mt-[45px] md:flex-row">
        <div className="flex items-center justify-center gap-3 md:items-start md:justify-normal">
          <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[linear-gradient(134deg,_#3BF686_40.75%,_#4CA9FF_90.52%)] md:h-[159px] md:w-[157px]">
            <div className="h-[49px] w-[49px] rounded-full bg-[#3a3636] md:h-[157px] md:w-[157px]">
              <img src={icon_portofolio} alt="Icon-portofolio" />
            </div>
          </div>
          <div className="ml-2 mr-5 flex max-w-[499px] flex-1 flex-col md:ml-9">
            <div className="font-sora text-[15px] text-[#fbfbfb] md:text-[28px] md:leading-[72px]">
              Life Goals
            </div>
            <div className="text-[10px] text-[#d6d6d6] md:text-[18px]">
              My greatest mission or life goal is to share every knowledge I
              have acquired for the benefit of the development of technology
              human resource in Indonesia.
            </div>
          </div>
        </div>
        <div className="md-[35px] flex flex-col gap-3 md:ml-[86px] md:mt-0">
          <div className="font-sora text-[15px] text-[#fbfbfb] md:text-[28px] md:leading-[72px]">
            Lets Connect
          </div>
          <div className="flex gap-[17px]">
            <div className="cursor-pointer duration-300 ease-in-out hover:scale-[150%]">
              {instagram}
            </div>
            <div className="cursor-pointer duration-300 ease-in-out hover:scale-[150%]">
              {twitter}
            </div>
            <div className="cursor-pointer duration-300 ease-in-out hover:scale-[150%]">
              {facebook}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
