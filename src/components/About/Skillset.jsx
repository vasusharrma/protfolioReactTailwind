import { CgCPlusPlus } from "react-icons/cg";
import {
  DiGit,
  DiJavascript1,
  DiMongodb,
  DiNodejs,
  DiReact,
} from "react-icons/di";
import { SiExpress, SiTailwindcss } from "react-icons/si";
import { BiSolidTerminal } from "react-icons/bi";

const icons = [
  { id: 1, icon: <CgCPlusPlus /> },
  { id: 2, icon: <DiJavascript1 /> },
  { id: 3, icon: <DiNodejs /> },
  { id: 4, icon: <DiReact /> },
  { id: 5, icon: <DiMongodb /> },
  { id: 6, icon: <SiExpress /> },
  { id: 7, icon: <DiGit /> },
  { id: 8, icon: <SiTailwindcss /> },
  { id: 9, icon: <BiSolidTerminal /> },
];

function Techstack() {
  return (
    <div className="text-center w-[85%] md:w-[80%] xl:w-[70%] mx-auto ">
      <h2 className="text-4xl font-semibold text-white mb-8">
        Professional <span className="text-purple-400">Skillset</span>
      </h2>

      <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-10">
        {icons.map((item) => (
          <div
            key={item.id}
            className="flex justify-center items-center md:w-50 w-32  h-32 text-[4em] text-white border border-[1.7px] border-[rgba(200,137,230,0.637)] rounded-md shadow-[0_0_10px_rgba(200,137,230,0.4)] transition-all duration-300 ease-in-out hover:scale-105"
          >
            {item.icon}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Techstack;
