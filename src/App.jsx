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
    questions: [
      {
        question: "Which company invented React?",
        options: ["Google", "Apple", "Netflix", "Facebook"],
        correctOption: 3,
        points: 10,
      },
      {
        question: "Which is the most popular JavaScript framework?",
        options: ["Angular", "React", "Svelte", "Vue"],
        correctOption: 1,
        points: 10,
      },
      {
        question: "What's the fundamental building block of React apps?",
        options: ["Components", "Blocks", "Elements", "Effects"],
        correctOption: 0,
        points: 10,
      },
      {
        question:
          "What's the name of the syntax we use to describe the UI in React components?",
        options: ["FBJ", "Babel", "JSX", "ES2015"],
        correctOption: 2,
        points: 10,
      },
      {
        question: "How does data flow naturally in React apps?",
        options: [
          "From parents to children",
          "From children to parents",
          "Both ways",
          "The developers decides",
        ],
        correctOption: 0,
        points: 10,
      },
      {
        question: "How to pass data into a child component?",
        options: ["State", "Props", "PropTypes", "Parameters"],
        correctOption: 1,
        points: 10,
      },
      {
        question: "When to use derived state?",
        options: [
          "Whenever the state should not trigger a re-render",
          "Whenever the state can be synchronized with an effect",
          "Whenever the state should be accessible to all components",
          "Whenever the state can be computed from another state variable",
        ],
        correctOption: 3,
        points: 30,
      },
      {
        question: "What triggers a UI re-render in React?",
        options: [
          "Running an effect",
          "Passing props",
          "Updating state",
          "Adding event listeners to DOM elements",
        ],
        correctOption: 2,
        points: 20,
      },
      {
        question: 'When do we directly "touch" the DOM in React?',
        options: [
          "When we need to listen to an event",
          "When we need to change the UI",
          "When we need to add styles",
          "Almost never",
        ],
        correctOption: 3,
        points: 20,
      },
      {
        question: "In what situation do we use a callback to update state?",
        options: [
          "When updating the state will be slow",
          "When the updated state is very data-intensive",
          "When the state update should happen faster",
          "When the new state depends on the previous state",
        ],
        correctOption: 3,
        points: 30,
      },
      {
        question:
          "If we pass a function to useState, when will that function be called?",
        options: [
          "On each re-render",
          "Each time we update the state",
          "Only on the initial render",
          "The first time we update the state",
        ],
        correctOption: 2,
        points: 30,
      },
      {
        question:
          "Which hook to use for an API request on the component's initial render?",
        options: ["useState", "useEffect", "useRef", "useReducer"],
        correctOption: 1,
        points: 10,
      },
      {
        question:
          "Which variables should go into the useEffect dependency array?",
        options: [
          "Usually none",
          "All our state variables",
          "All state and props referenced in the effect",
          "All variables needed for clean up",
        ],
        correctOption: 2,
        points: 30,
      },
      {
        question: "An effect will always run on the initial render.",
        options: [
          "True",
          "It depends on the dependency array",
          "False",
          "In depends on the code in the effect",
        ],
        correctOption: 0,
        points: 30,
      },
      {
        question:
          "When will an effect run if it doesn't have a dependency array?",
        options: [
          "Only when the component mounts",
          "Only when the component unmounts",
          "The first time the component re-renders",
          "Each time the component is re-rendered",
        ],
        correctOption: 3,
        points: 20,
      },
    ],
    answer: null,
    totalPoint: 0,
  };
  const [{ questions, index, status, answer, totalPoint }, dispatch] =
    useReducer(reducer, initialState);

  function reducer(state, action) {
    switch (action.type) {
      // case "dataRecived":
      //   return {
      //     ...state,
      //     questions: action.payload,
      //     status: "start",
      //   };
      // case "dataFailed": {
      //   return {
      //     ...state,
      //     status: "error",
      //     error: action.payload,
      //   };
      // }

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
  // useEffect(function () {
  //   fetch("http://localhost:9000/questions")
  //     // fetch("https://react-quiz-lemon-one.vercel.app/api/questions")
  //     .then((res) => res.json())
  //     .then((data) => dispatch({ type: "dataRecived", payload: data }))
  //     .catch((err) => console.error({ type: "dataFailed", payload: err }));
  // }, []);

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
