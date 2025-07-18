import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#0A0416] text-white py-5">
      <div className="flex w-[85%] md:w-[80%] flex-col md:flex-row items-center xl:w-[70%] md:justify-between gap-2 mx-auto
        ">
        <p>Developed by Vasu</p>
        <p>Copyright @ 2025 Vasu</p>
        <ul className="flex items-center justify-center  gap-8">
          <li className=" cursor-pointer">
            <a href="https://github.com/vasusharrma">
              <AiFillGithub />
            </a>
          </li>
          <li className=" cursor-pointer">
            <a href="https://twitter.com/vasuu23">
              <AiOutlineTwitter />
            </a>
          </li>
          <li className=" cursor-pointer">
            <a href="https://www.linkedin.com/in/vasusharrmaa/">
              <FaLinkedinIn />
            </a>
          </li>
          <li className=" cursor-pointer">
            <a href="https://www.instagram.com/vasusharrmaa">
              <AiFillInstagram />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
