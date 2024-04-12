import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NETFLIX_LOGO } from "../utilities/constants";
import { auth } from "../utilities/firebase";
import { addUser, removeUser } from "../redux/userSlice";
import { toggleGptSearch } from "../redux/gptSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/errorpage");
      });
  };

  const handleToggleGpt = () => {
    dispatch(toggleGptSearch());
  };

  return (
    <div className="flex flex-col md:flex-row justify-between absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10">
      <img
        className="w-44 mx-auto md:mx-0"
        src={NETFLIX_LOGO}
        alt="netflix logo"
      />
      {user && (
        <div className="flex justify-between">
          <button
            className="bg-red-500 px-4 py-2 m-4 rounded text-white"
            onClick={handleToggleGpt}
          >
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button>
          <img className="w-12 h-12 m-2" src={user.photoURL} alt="Logo" />
          <span className="text-white font-bold m-2 p-2 hidden md:inline-block">
            {user.displayName}
          </span>
          <span
            className="text-white font-bold m-2 p-2 cursor-pointer"
            onClick={handleSignOut}
          >
            Sign Out
          </span>
        </div>
      )}
    </div>
  );
};

export default Header;
