import { ImPointRight } from "react-icons/im";
import AboutPng from "./../../Assets/about.png";
const Known = () => {
  return (
    <div>
      <main>
        <div className="w-[85%] md:w-[80%] xl:w-[70%] mx-auto md:items-center md:flex md:justify-between pt-[10vh] md:pt-[20vh] pb-20   items-start md:py-[6.5rem]">
          <div className="md:w-[50%] text-white  text-xl md:mt-10 space-y-10">
            <p className="text-[2.1rem] font-semibold text-center">
              Know Who <span className="text-[#C770F0]">I'M</span>
            </p>
            <p>
              Hi Everyone, I am{" "}
              <span className="text-[#C770F0]">Vasu Sharma</span> from{" "}
              <span className="text-[#C770F0]">Uttar Pradesh, India.</span>
            </p>
            <p>
              I am pursuing my Master of Computer Applications at College of
              Engineering Roorkee.
            </p>
            <div>
              <p>
                Apart from coding, some other activities that I love to do!
              </p>
              <ul className="my-5">
                <li className="flex  ml-10 gap-3 items-center">
                  <ImPointRight />Chess
                </li>
                <li className="flex  ml-10 gap-3 items-center">
                  <ImPointRight />Running
                </li>
                <li className="flex  ml-10 gap-3 items-center">
                  <ImPointRight />Badminton
                </li>
              </ul>
              <p className="text-center text-[#967BAE]">
                "Strive to build things that make a difference!"<br /> -Vasu
              </p>
            </div>
          </div>

          <div>
          </div>
          <div className="md:w-[40%] mt-10 md:mt-0">
            <img src={AboutPng} alt="a standing man " />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Known;
