import React from "react";

export default function QuestionBar({
  totalPoint,
  maxPoints,
  numQuestion,
  index,
}) {
  return (
    <header className="w-40">
      <div className="flex flex-col items-center ">
        <progress className="progress-bar " max={numQuestion} value={index} />
      </div>
      <div className="flex justify-around ">
        <p className="text-slate-500">
          Question<strong>{index + 1}</strong>/{numQuestion}
        </p>
        <p className="text-slate-500">
          <strong>{totalPoint}</strong>/{maxPoints}
        </p>
      </div>
    </header>
  );
}
