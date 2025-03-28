import React from "react";

export default function Optoins({ answer, questions, dispatch }) {
  return (
    <div className="">
      {questions?.options.map((option, index) => {
        return (
          <button
            className={` ${
              answer === index || answer === questions.correctOption
                ? null
                : "min-w-full m-3 bg-white rounded-lg font-semibold shadow-lg p-4 text-black hover:bg-slate-300 block"
            } ${
              answer === index && answer !== questions.correctOption
                ? "min-w-full m-3 bg-red-500 rounded-lg font-semibold shadow-lg p-4 text-black block"
                : null
            } ${
              answer === index && answer === questions.correctOption
                ? "min-w-full m-3 bg-green-500 rounded-lg font-semibold shadow-lg p-4 text-black block"
                : answer === index ||
                  (answer === questions.correctOption &&
                    "min-w-full m-3 bg-white rounded-lg font-semibold shadow-lg p-4 text-black hover:bg-slate-300 block")
            } `}
            onClick={() => {
              dispatch({
                type: "changeAnswer",
                payload: index,
              });
            }}
            key={option}
            disabled={answer !== null}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
