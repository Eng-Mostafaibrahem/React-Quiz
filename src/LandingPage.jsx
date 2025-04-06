import React from "react";

export default function LandingPage({ numQuestion, dispatch }) {
  return (
    <>
      <div className=" bg-slate-600  text-slate-500 text-center ">
        <div className=" min-h-screen  flex flex-col text-center items-center justify-center">
          <div className=" overflow-hidden border-2  rounded-3xl  w-1/3 sm:w-2/3 max-sm:w-2/3   h-78 max-sm:h-full  bg-rose-200     flex flex-col items-center justify-center">
            <h1 className=" text-5xl  text-center uppercase mb-5 font-bold max-sm:m-2 sm:m-2 max-sm:text-xl sm:text-2xl">
              the react quiz
            </h1>
            <div className=" font-semibold text-3xl max-sm:text-xl sm:text-2xl    p-2  ">
              <p className="m-2">End Of The React Quiz!</p>

              <p className="m-2">
                {numQuestion} question to test your react mastery
              </p>
            </div>

            <button
              className="mt-3 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-rose-200 to-slate-500 group-hover:from-rose-200 group-hover:to-slate-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-rose-200 dark:focus:ring-slate-800"
              onClick={() => {
                dispatch({ type: "Go" });
              }}
            >
              <span className=" font-medium text-xl  relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-slate-500 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                Let's Go
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
