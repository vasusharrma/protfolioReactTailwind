import {
  AiFillStar,
  AiOutlineFundProjectionScreen,
  AiOutlineHome,
  AiOutlineUser,
} from "react-icons/ai";
import { CgGitFork } from "react-icons/cg";
import { CgFileDocument } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={` sticky top-0 left-0 w-full z-100  bg-[#0A0416] md:bg-transparent text-white text-xl py-5  transition-all duration-300 ease-linear   ${
          scrolled ? "md:bg-[hsl(0_100%_0%_/_0.2)]   md:backdrop-blur-3xl " : ""
        }`}
      >
        <div className=" w-[85%] md:flex mx-auto md:w-[80%] xl:w-[70%] justify-between ">
          <ul className="flex gap-[1em]">
            <li>
              <h1 className="text-3xl font-extrabold text-[#C770F0]">Vs.</h1>
            </li>
          </ul>
          <ul
            className={` relative flex gap-8 md:gap-12
        flex-col md:flex-row items-center  md:mt-0 
          md:mx-0 transition-all duration-300 ease-linear ${
              open ? "h-auto mt-7" : " h-0 overflow-hidden md:h-auto  "
            }`}
          >
            <Link to="/" onClick={() => setOpen(false)}>
              <li className="flex relative md:flex-col cursor-pointer lg:flex-row items-center gap-1 after:absolute after:left-0 after:bottom-[-5px] md:after:h-[5px] after:w-0 after:bg-[#CD5FF8] after:transition-all after:duration-300 hover:after:w-full  after:rounded-xl">
                <AiOutlineHome />
                Home
              </li>
            </Link>

            <Link to="/about" onClick={() => setOpen(false)}>
              <li className="relative flex md:flex-col lg:flex-row cursor-pointer items-center gap-1 after:absolute after:left-0 after:bottom-[-5px] md:after:h-[5px] after:w-0 after:bg-[#CD5FF8] after:transition-all after:duration-300 hover:after:w-full after:rounded-xl">
                {" "}
                <AiOutlineUser />
                About
              </li>
            </Link>
            <li className="relative flex md:flex-col lg:flex-row items-center cursor-pointer gap-1 after:absolute after:left-0 after:bottom-[-5px] md:after:h-[5px] after:w-0 after:bg-[#CD5FF8] after:transition-all after:duration-300 hover:after:w-full after:rounded-xl">
              <AiOutlineFundProjectionScreen />
              Project
            </li>
            <li className="relative flex md:flex-col lg:flex-row cursor-pointer items-center gap-1 after:absolute after:left-0 after:bottom-[-5px] md:after:h-[5px] after:w-0 after:bg-[#CD5FF8] after:transition-all after:duration-300 hover:after:w-full after:rounded-xl">
              <CgFileDocument />
              Resume
            </li>
            <li className="flex cursor-pointer   items-center gap-1 bg-[#492B67] px-5 py-2 rounded-lg transition:all duration-300 ease-linear hover:bg-[#492b67c4] ">
              <CgGitFork />
              <AiFillStar />
            </li>
          </ul>
          <div
            className="space-y-1 absolute top-8 right-[8%]  cursor-pointer md:hidden"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <span
              className={`block h-1 w-8 bg-[#C770F0] transition-transform duration-300 ease-linear  ${
                open ? "rotate-45 translate-y-2" : ""
              }`}
            >
            </span>
            <span
              className={`block h-1 w-8 bg-[#C770F0] transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            >
            </span>
            <span
              className={`block h-1 w-8 bg-[#C770F0] transition-transform  duration-300 ease-linear ${
                open ? "-rotate-45 -translate-y-2" : ""
              }`}
            >
            </span>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
