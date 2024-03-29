import { NETFLIX_LOGO } from "../utilities/constants";

const Header = () => {
  return (
    <div className="absolute w-44 px-8 py-2 bg-gradient-to-t from-black z-10">
      <img className="w-44" src={NETFLIX_LOGO} />
    </div>
  );
};

export default Header;
