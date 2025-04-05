import { useEffect, useReducer, useState } from "react";
import "./App.css";
import Card from "./Card";
import LandingPage from "./LandingPage";
import EndPage from "./EndPage";

function App() {
  const [Go, setGo] = useState(false);
  function handleLetsGo() {
    setGo(!Go);
  }
  const initialState = {
    //  "loading" "error" "ready"  "active", "finished"
    status: "start",
    index: 0,
    questions: [],
    answer: null,
    totalPoint: 0,
  };
  const [{ questions, index, status, answer, totalPoint }, dispatch] =
    useReducer(reducer, initialState);

  function reducer(state, action) {
    switch (action.type) {
      case "dataRecived":
        return {
          ...state,
          questions: action.payload,
          status: "start",
        };
      case "dataFailed": {
        return {
          ...state,
          status: "error",
          error: action.payload,
        };
      }

      case "Go": {
        return {
          ...state,
          status: "active",
        };
      }

      case "next": {
        return {
          ...state,
          index: action.payload + 1,
          answer: null,
          status: "active",
        };
      }
      // case "previous": {
      //   return {
      //     ...state,
      //     index: state.index - 1,
      //     status: "active",
      //   };
      // }

      case "changeAnswer": {
        const question = state.questions.at(state.index);
        console.log(question);

        return {
          ...state,
          answer: action.payload,
          totalPoint:
            question.correctOption === action.payload
              ? state.totalPoint + question.points
              : state.totalPoint,
        };
      }
      case "finish": {
        return {
          ...state,
          status: "finished",
        };
      }

      default:
        throw new Error("Action UNKOWN");
    }
  }

  const numQuestion = questions.length;
  const maxPoints = questions?.reduce((prev, curr) => prev + curr.points, 0);
  useEffect(function () {
    fetch("http://localhost:9000/questions")
    // fetch("https://react-quiz-lemon-one.vercel.app/api/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataRecived", payload: data }))
      .catch((err) => console.error({ type: "dataFailed", payload: err }));
  }, []);

  return (
    <>
      {/* {console.log(questions)} */}

      {status === "start" && (
        <LandingPage numQuestion={numQuestion} dispatch={dispatch} />
      )}
      {status === "active" && (
        <div className=" min-h-screen  flex flex-col gap-20 justify-center items-center  bg-gradient-to-r from-stone-300 to-stone-500 ">
          <Card
            questions={questions[index]}
            dispatch={dispatch}
            answer={answer}
            totalPoint={totalPoint}
            index={index}
            numQuestion={numQuestion}
            maxPoints={maxPoints}
          />
        </div>
      )}
      {status === "finished" && (
        <EndPage numQuestion={numQuestion} totalPoint={totalPoint} />
      )}
    </>
  );
}

export default App;
