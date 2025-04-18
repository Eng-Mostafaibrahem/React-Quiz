import React from "react";

export default function Details({ totalPoint }) {
  return (
    <div className="  bg-slate-400  rounded-lg sm:rounded-xs  max-sm:rounded-xs min-h-full flex flex-col  justify-center items-center text-center">
      <h1 className="text-5xl font-black sm:text-3xl max-sm:text-2xl ">
        React Quiz
      </h1>
      <h3 className="text-medium font-semibold ">
        Here we can test information
      </h3>
      <h4 className="text-xl font-semibold">Total Point: {totalPoint} </h4>
    </div>
  );
}
