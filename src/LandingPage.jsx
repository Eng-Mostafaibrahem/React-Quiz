import React from "react";

export default function LandingPage({ numQuestion, dispatch }) {
  return (
    <div className="overflow-hidden bg-black">
      <div className=" min-h-screen bg-black flex flex-col text-white text-center items-center justify-center">
        <h1 className=" text-4xl text-white text-center uppercase mb-2">
          the react quiz
        </h1>
        <p>Discover your React Knowledge </p>
        <div className=" font-semibold text-2xl p-2 w-1/3 text-slate-700 rounded-3xl group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
          <p>Welcome to The React Quiz!</p>
          <p>{numQuestion} question to test your react mastery</p>
        </div>
        <button
          className="mt-3 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
          onClick={() => {
            dispatch({type:"Go"});
          }}
        >
          <span className=" font-medium text-xl  relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            Let's Go
          </span>
        </button>
      </div>
    </div>
  );
}
