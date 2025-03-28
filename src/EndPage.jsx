import React from 'react'

export default function EndPage({numQuestion,totalPoint}) {
    return (
        <div className="overflow-hidden bg-black">
          <div className=" min-h-screen bg-black flex flex-col text-white text-center items-center justify-center">
            <h1 className=" text-4xl text-white text-center uppercase mb-2">
              the react quiz
            </h1>
            <p>Discover your React Knowledge </p>
            <div className=" font-semibold text-2xl p-2 w-1/3 text-slate-700 rounded-3xl group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
              <p>End of The React Quiz!</p>
              <p>{numQuestion} question to test your react mastery</p>
              <p>Your Score is :{totalPoint} </p>
            </div>
          </div>
        </div>
      );
}
