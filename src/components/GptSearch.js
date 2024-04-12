import { BG_IMG } from "../utilities/constants";
import GptSerchBar from "./GptSerchBar";
import GptSuggestions from "./GptSuggestions";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          className="h-screen object-cover md:h-auto"
          src={BG_IMG}
          alt="bg img"
        />
      </div>
      <div>
        <GptSerchBar />
        <GptSuggestions />
      </div>
    </>
  );
};

export default GptSearch;
