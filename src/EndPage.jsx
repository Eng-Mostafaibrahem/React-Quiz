import React from "react";

export default function EndPage({ numQuestion, totalPoint }) {
  return (
    <div className=" bg-slate-600  text-slate-500 text-center ">
      <div className=" min-h-screen overflow-hidden flex flex-col text-center items-center justify-center">
        <div className="border-2  rounded-3xl  w-1/3 sm:w-2/3 max-sm:w-2/3   h-78 max-sm:h-full  bg-rose-200     flex flex-col items-center justify-center">
          <h1 className=" text-5xl  sm:text-2xl max-sm:text-lg text-center uppercase mb-5 font-bold max-sm:mb-1">
            the react quiz
          </h1>
          <div className=" font-semibold text-2xl  sm:text-xl max-sm:text-base p-2  ">
            <p className>End Of The React Quiz!</p>
            <p className="m-1">Result your React Knowledge </p>
            <p>Your Score is : {totalPoint} </p>
          </div>
        </div>
      </div>
    </div>
  );
}
