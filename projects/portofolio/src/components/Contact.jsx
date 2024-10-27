import { AiOutlineMail } from "react-icons/ai";
import foto from "../assets/photo-2.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div id="contact" className="w-full text-[#fbfbfb]">
      <div className="flex flex-col">
        <div className="font-sora text-[20px] text-[#fbfbfb] md:text-[40px] md:leading-[72px]">
          Get in Touch
        </div>
      </div>
      <div className="m-auto w-full p-4 font-sora">
        <div className="grid gap-8 p-4 lg:grid-cols-5">
          {/* left */}
          <div className="col-span-3 w-full rounded-xl bg-[#323443] p-4 shadow-xl lg:col-span-2">
            <div className="h-full lg:p-4">
              <div>
                <img
                  src={foto}
                  className="rounded-xl duration-300 ease-in hover:scale-105"
                  alt=""
                />
              </div>
              <div className="font-poppins">
                <h2 className="py-2 text-2xl font-bold text-white">
                  Alhie Fikri
                </h2>
                <p>Junior Front End</p>
                <p className="py-4">
                  I am available for freelance or full time positions. Contact
                  me and lets talk
                </p>
              </div>
              <div className="">
                <p className="pt-8 font-poppins uppercase">Connect with me</p>
                <div className="flex items-center justify-between py-4">
                  <a
                    href="https://www.linkedin.com/in/alif-fikri/"
                    target="_blank"
                  >
                    <div className="cursor-pointer rounded-full bg-[linear-gradient(134deg,_#3BF686_40.75%,_#4CA9FF_90.52%)] p-3 shadow-lg duration-300 ease-in hover:scale-110 hover:shadow-white md:p-6">
                      <FaLinkedin />
                    </div>
                  </a>
                  <a href="https://github.com/alhiefikri" target="_blank">
                    <div className="cursor-pointer rounded-full bg-[linear-gradient(134deg,_#3BF686_40.75%,_#4CA9FF_90.52%)] p-3 shadow-lg duration-300 ease-in hover:scale-110 hover:shadow-white md:p-6">
                      <FaGithub />
                    </div>
                  </a>
                  <a href="">
                    <div className="cursor-pointer rounded-full bg-[linear-gradient(134deg,_#3BF686_40.75%,_#4CA9FF_90.52%)] p-3 shadow-lg duration-300 ease-in hover:scale-110 hover:shadow-white md:p-6">
                      <AiOutlineMail />
                    </div>
                  </a>
                  <a href="">
                    <div className="cursor-pointer rounded-full bg-[linear-gradient(134deg,_#3BF686_40.75%,_#4CA9FF_90.52%)] p-3 shadow-lg duration-300 ease-in hover:scale-110 hover:shadow-white md:p-6">
                      <BsFillPersonLinesFill />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="col-span-3 h-auto w-full rounded-xl bg-[#323443] shadow-xl lg:p-4">
            <div className="p-4">
              <form
                action="https://getform.io/f/adrrywja"
                method="POST"
                encType="multipart/form-data"
                target="_blank"
                className="text-white"
              >
                <div className="grid w-full gap-4 py-2 md:grid-cols-2">
                  <div className="flex flex-col">
                    <label className="py-2 text-sm uppercase">Name</label>
                    <input
                      type="text"
                      name="name"
                      className="outline-bg-[linear-gradient(134deg,_#3BF686_40.75%,_#4CA9FF_90.52%)] flex rounded-lg border-2 border-slate-300 p-3 text-black"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="py-2 text-sm uppercase">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="phone"
                      className="outline-bg-[linear-gradient(134deg,_#3BF686_40.75%,_#4CA9FF_90.52%)] flex rounded-lg border-2 border-slate-300 p-3 text-black"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="py-2 text-sm uppercase">Email</label>
                  <input
                    type="text"
                    name="email"
                    className="outline-bg-[linear-gradient(134deg,_#3BF686_40.75%,_#4CA9FF_90.52%)] flex rounded-lg border-2 border-slate-300 p-3 text-black"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="py-2 text-sm uppercase">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    className="outline-bg-[linear-gradient(134deg,_#3BF686_40.75%,_#4CA9FF_90.52%)] flex rounded-lg border-2 border-slate-300 p-3 text-black"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="py-2 text-sm uppercase">Message</label>
                  <textarea
                    rows={10}
                    name="subject"
                    className="outline-bg-[linear-gradient(134deg,_#3BF686_40.75%,_#4CA9FF_90.52%)] flex rounded-lg border-2 border-slate-300 p-3 text-black"
                  />
                </div>
                <button className="mt-4 w-full rounded-xl bg-[linear-gradient(134deg,_#3BF686_40.75%,_#4CA9FF_90.52%)] p-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
