const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[30%] md:pt-[25%] px-8 absolute text-white bg-gradient-to-r from-black">
      <p className="text-lg md:text-3xl font-bold">{title}</p>
      <p className="w-1/4 py-2 my-2 hidden md:inline-block">{overview}</p>
      <div>
        <button className="bg-white text-black p-1 md:p-2 px-4 md:px-10 mr-2 rounded-md hover:bg-opacity-80">
          Play
        </button>
        <button className="bg-slate-500 text-white p-2 px-6 rounded-md hidden md:inline-block">
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
