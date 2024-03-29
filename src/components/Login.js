import { useState } from "react";
import { BG_IMG } from "../utilities/constants";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleIsSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <img className="absolute" src={BG_IMG} />
      <div className="absolute bg-slate-800  w-[22rem] bg-opacity-80 rounded-md mx-auto my-36 right-0 left-0 p-3 ">
        <h1 className="font-bold text-2xl text-white mx-4">
          {isSignInForm ? "Sign In" : "Sign up"}
        </h1>
        <form className="flex flex-col">
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Name"
              className="rounded-lg bg-gray-900 m-auto my-4 w-72 h-10 p-4 outline-none caret-slate-300 text-white mb-1"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="rounded-lg bg-gray-900 m-auto my-4 w-72 h-10 p-4 outline-none caret-slate-300 text-white mb-1"
          />
          <input
            type="password"
            placeholder="Password"
            className="rounded-lg bg-gray-900 m-auto my-4 w-72 h-10 p-4 outline-none caret-slate-300 text-white mb-1"
          />
          <button className=" bg-red-600 rounded-md m-auto my-4 w-72  h-10 content-center text-white font-semibold ">
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
