import GitHubCalendar from "react-github-calendar";

const Github = () => {
  return (
    <div className="text-center w-[85%] md:w-[80%] xl:w-[70%] mx-auto ">
      <h2 className="text-4xl font-semibold text-white mb-8">
        Days <span className="text-purple-400">I Code</span>
      </h2>
      <div className="flex justify-center text-white items-center">
        <GitHubCalendar
          username="vasusharrma"
          blockSize={15}
          blockMargin={5}
          color="#c084f5"
          fontSize={16}
        />;
      </div>
    </div>
  );
};

export default Github;
