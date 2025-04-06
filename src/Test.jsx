import React from "react";
import Question from "./Question";
import Optoins from "./Optoins";
import QuestionBar from "./QuestionBar";

export default function Test({
  questions,
  dispatch,
  answer,
  index,
  numQuestion,
  maxPoints,
  totalPoint,
}) {
  return (
    <div className="col-span-2 md:col-span-2 sm:col-span-1 max-sm:sm:col-span-1  bg-rose-200 rounded-sm ">
      <div className="flex flex-col justify-center items-center gap-10 ">
        <h5 className="text-3xl text-center text-slate-500 font-bold mt-5 ">
          Choose The Correct Answer
        </h5>
        <QuestionBar
          maxPoints={maxPoints}
          numQuestion={numQuestion}
          index={index}
          totalPoint={totalPoint}
        />
        <Question>{questions?.question}</Question>
        <Optoins questions={questions} dispatch={dispatch} answer={answer} />
      </div>

      {answer ? console.log(answer) : null}
      <div className="flex items-center justify-end">
        {answer !== null ? (
          <button
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-rose-200 to-slate-500 group-hover:from-rose-200 group-hover:to-slate-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-rose-300 dark:focus:ring-slate-800"
            onClick={() => {
              if (index < 14) {
                dispatch({ type: "next", payload: index });
              } else {
                dispatch({ type: "finish" });
              }
            }}
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-slate-600 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
              Next
            </span>
          </button>
        ) : (
          <button
            disabled
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-rose-200 to-slate-500 group-hover:from-rose-200 group-hover:to-slate-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-rose-300 dark:focus:ring-slate-800"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-slate-600 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
              Next
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
