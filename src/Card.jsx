import React from "react";
import Details from "./Details";
import Test from "./Test";

export default function Card({
  questions,
  dispatch,
  answer,
  totalPoint,
  numQuestion,
  index,
  maxPoints,
}) {
  return (
    <div className=" w-1/2 sm:w-5/6 max-sm:w-5/6 sm:m-3 max-sm:m-3   grid grid-cols-3   sm:grid-cols-1 max-sm:grid-cols-1 text-sm   md:grid-cols-3 text-white   border-white border-4  rounded-lg  shadow-lg">
      <Details totalPoint={totalPoint} />
      <Test
        questions={questions}
        dispatch={dispatch}
        answer={answer}
        numQuestion={numQuestion}
        index={index}
        maxPoints={maxPoints}
        totalPoint={totalPoint}
      />
    </div>
  );
}
