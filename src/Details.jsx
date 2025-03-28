import React from "react";

export default function Details({ totalPoint }) {
  return (
    <div className="  bg-slate-400  rounded-md min-h-full flex flex-col  justify-center items-center  
text-center">
      <h1 className="text-5xl font-black ">React Quiz</h1>
      <h3 className="text-medium font-semibold ">
        Here we can test information
      </h3>
      <h4 className="text-xl font-semibold">Total Point: {totalPoint} </h4>
    </div>
  );
}
