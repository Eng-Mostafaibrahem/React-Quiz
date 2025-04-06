import React from "react";

export default function EndPage({ numQuestion, totalPoint }) {
  return (

    <div className=" bg-slate-600  text-slate-500 text-center ">
      <div className=" min-h-screen overflow-hidden flex flex-col text-center items-center justify-center">
        <div className="border-2  rounded-3xl  w-1/3 sm:w-2/3 max-sm:w-2/3   h-78 max-sm:h-full  bg-rose-200     flex flex-col items-center justify-center" >
        <h1 className=" text-5xl  text-center uppercase mb-5 font-bold max-sm:mb-1">
          the react quiz
        </h1>
        <div className=" font-semibold text-xl  sm:text-lg max-sm:text-base p-2  ">
          <p className="font-semibold text-3xl">End Of The React Quiz!</p>
        <p className="m-1 text-lg">Result your React Knowledge </p>
          <p>{numQuestion} question to test your react mastery</p>
          <p>Your Score is : {totalPoint} </p>
        </div>
        </div>
      </div>
    </div>

  );
}
