import { useRef, useState } from "react";
import { BG_IMG, PHOTO_URL } from "../utilities/constants";
import Header from "./Header";
import { validateSignInData, validateSignUpData } from "../utilities/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utilities/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, seterrorMessage] = useState("");

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const dispatch = useDispatch();

  const toggleIsSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleSubmitBtn = () => {
    if (!isSignInForm) {
      const message = validateSignUpData(
        email.current.value,
        password.current.value,
        name.current.value
      );
      seterrorMessage(message);
      if (message) return;

      //Sig Up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: PHOTO_URL,
          })
            .then(() => {
              const { displayName, email, photoURL, uid } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  displayName: displayName,
                  email: email,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              seterrorMessage(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      const message = validateSignInData(
        email.current.value,
        password.current.value
      );
      seterrorMessage(message);
      if (message) return;

      //sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {})
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <img className="absolute" src={BG_IMG} alt="Bg img" />
      <div className="absolute bg-gray-950 w-[22rem] bg-opacity-80 rounded-md mx-auto my-36 right-0 left-0 p-3">
        <h1 className="font-bold text-2xl text-white mx-4">
          {isSignInForm ? "Sign In" : "Sign up"}
        </h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="flex flex-col"
        >
          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Name"
              className="rounded-lg bg-slate-800 m-auto my-4 w-72 h-10 p-4 outline-none caret-slate-300 text-white mb-1"
            />
          )}
          <input
            ref={email}
            type="email"
            placeholder="Email"
            className="rounded-lg bg-slate-800 m-auto my-4 w-72 h-10 p-4 outline-none caret-slate-300 text-white mb-1"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="rounded-lg bg-slate-800 m-auto my-4 w-72 h-10 p-4 outline-none caret-slate-300 text-white mb-1"
          />
          {errorMessage && (
            <p className="text-red-700 p-2 mx-4">{errorMessage}</p>
          )}
          <button
            className=" bg-red-600 rounded-md m-auto my-4 w-72  h-10 content-center text-white font-semibold"
            onClick={handleSubmitBtn}
          >
            {isSignInForm ? "Sign In" : "Sign up"}
          </button>
          <p className="text-white mx-4 py-4" onClick={toggleIsSignIn}>
            {isSignInForm
              ? "New to Netflix? Sign up now."
              : "Already a registered user? Sign in"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
