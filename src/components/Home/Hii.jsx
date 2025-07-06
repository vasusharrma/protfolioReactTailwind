import homeMainBg from "./../../Assets/home-main.svg";
import bg_image from "/home/vasu/again/reactDoc/portfolio/src/Assets/home-bg.jpg";
import Type from "./Type";

import Navbar from "../Navbar";
function Hii() {
  return (
    <div
      className="relative  primary__main z-50"
      style={{ backgroundImage: `url(${bg_image})` }}
    >
      <div>
        <Navbar />
        <main>
          <div className="w-[85%] md:w-[80%] xl:w-[70%] mx-auto md:flex md:justify-between pt-[20vh] pb-20  items-start md:py-[6.5rem]">
            <div className="md:w-[50%] font-semibold md:mt-10">
              <h1 className="text-5xl">
                Hi There!{" "}
                <span class="inline-block animate-wave text-5xl">👋🏻</span>
              </h1>
              <p className="text-5xl mt-5 mb-8 ">
                I'M{" "}
                <span className="text-[#C770F0] text-5xl font-bold ">VASU</span>
              </p>
              <p className="text-xl md:text-4xl  text-[#C770F0]">
                <Type />
              </p>
            </div>
            <div className=" md:w-[50%] mt-5 md:mt-0 md:max-w-[25rem]">
              <img src={homeMainBg} alt="" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Hii;
