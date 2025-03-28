import React from "react";

export default function QuestionBar({
  totalPoint,
  maxPoints,
  numQuestion,
  index,
}) {
  return (
    <header className="w-60">
      <div className="flex flex-col items-center ">
        <progress className="progress-bar " max={numQuestion} value={index} />
      </div>
      <div className="flex justify-between ">
        <p className="">
          Question<strong>{index + 1}</strong>/{numQuestion}
        </p>
        <p>
          <strong>{totalPoint}</strong>/{maxPoints}
        </p>
      </div>
    </header>
  );
}
