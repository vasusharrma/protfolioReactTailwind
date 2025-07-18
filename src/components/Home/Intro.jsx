import avatar from "/home/vasu/again/reactDoc/portfolio/src/Assets/avatar.svg";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export default function Intro() {
  return (
    <article>
      <div className=" pb-20 ">
        <main className="w-[90%] md:flex mx-auto  md:items-center md:w-[80%] xl:w-[70%] leading-relaxed  justify-between pt-[20vh] pb-20  items-start md:py-[6.5rem]">
          <div className="space-y-10 text-xl md:w-[65%]">
            <p className="uppercase text-center font-semibold text-4xl md:text-5xl">
              LET Me <span className="text-[#C770F0] font-bold">introduce</span>
              {" "}
              myself
            </p>
            <p>
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
            </p>
            <p>
              I am fluent in classics like{" "}
              <span className="text-[#C770F0] font-bold">
                C++, Javascript and MERN.
              </span>
            </p>
            <p>
              My field of Interest's are building new{" "}
              <span className="text-[#C770F0] font-bold">
                Web Technologies and Products
              </span>{" "}
              and also in areas related to{" "}
              <span className="text-[#C770F0] font-bold">Linux-Distro</span>
            </p>
            <p>
              Whenever possible, I also apply my passion for developing products
              with <span className="text-[#C770F0] font-bold">Node.js</span> and
              {" "}
              <span className="text-[#C770F0] font-bold">
                Modern Javascript Library and Frameworks{" "}
              </span>
              like
              <span className="text-[#C770F0] font-bold">React.js</span>
            </p>
          </div>
          <div className="flex items-center justify-center mt-20 md:mt-0">
            <img src={avatar} alt="something" />
          </div>
        </main>
        <div className=" flex flex-col space-y-3 justify-center items-center">
          <p className="text-4xl md:text-5xl font-semibold">Find me on</p>
          <p>
            Feel <span className="text-[#C770F0] font-bold">free</span>{" "}
            to connect with me
          </p>
          <ul className="flex items-center justify-center mt-2 gap-8">
            <li className="p-2 rounded-[100%] bg-white text-[#700C86] text-xl cursor-pointer transition-all duration-300  hover:shadow-[0_0_25px_#700C86]">
              <a href="https://github.com/vasusharrma">
                <AiFillGithub />
              </a>
            </li>
            <li className="p-2 rounded-[100%] bg-white text-[#700C86] text-xl cursor-pointer transition-all duration-300  hover:shadow-[0_0_25px_#700C86]">
              <a href="https://twitter.com/vasuu23">
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="p-2 rounded-[100%] bg-white text-[#700C86] text-xl cursor-pointer transition-all duration-300  hover:shadow-[0_0_25px_#700C86]">
              <a href="https://www.linkedin.com/in/vasusharrmaa/">
                <FaLinkedinIn />
              </a>
            </li>
            <li className="p-2 rounded-[100%] bg-white text-[#700C86] text-xl cursor-pointer transition-all duration-300  hover:shadow-[0_0_25px_#700C86]">
              <a href="https://www.instagram.com/vasusharrmaa">
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
}
