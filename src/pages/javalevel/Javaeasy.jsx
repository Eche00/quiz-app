import React, { useRef, useState } from "react";
import javaEasyQuestions from "../javaquestions/javaeasyquestions";
import { Link } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";

function Javaeasy() {
  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(javaEasyQuestions[index]);
  let [lock, setLock] = useState(false);
  let [score, setScore] = useState(0);
  let [result, setResult] = useState(false);

  const checkAns = (e, ans) => {
    if (lock === false) {
      if (question.ans === ans) {
        e.target.classList.add("correct");
        setLock(true);
        setScore((prev) => prev + 1);
      } else {
        e.target.classList.add("wrong");
        setLock(true);
        option_array[question.ans - 1].current.classList.add("correct");
      }
    }
  };

  let option1 = useRef(null);
  let option2 = useRef(null);
  let option3 = useRef(null);

  let option_array = [option1, option2, option3];

  const next = () => {
    if (index === javaEasyQuestions.length - 1) {
      setResult(true);
      return 0;
    }
    if (lock === true) {
      setIndex(++index);
      setQuestion(javaEasyQuestions[index]);
      setLock(false);
      option_array.map((option) => {
        option.current.classList.remove("wrong");
        option.current.classList.remove("correct");
        return null;
      });
    }
  };

  let retry = () => {
    setIndex(0);
    setQuestion(javaEasyQuestions[index]);
    setLock(false);
    setScore(0);
    setResult(false);
  };

  return (
    <div>
      <p className=" text-4xl text-[#5FC0DA] absolute top-3 left-5">
        <Link to="/javahome">
          <ArrowBack />
        </Link>
      </p>
      <h1 className=" font-bold sm:text-5xl text-3xl py-[35px] text-[#5FC0DA] text-center  border-b border-[#5FC0DA]">
        Java Easy Level
      </h1>
      {result ? (
        <>
          <h3 className=" font-bold sm:text-3xl text-2xl py-[35px] text-[#5FC0DA] text-center">
            Quiz Completed
          </h3>

          <div className=" w-[100%] flex items-center justify-center flex-col">
            <div className="flex items-center justify-center bg-[#5FC0DA] p-[50px] flex-col rounded-lg">
              <p className=" font-bold sm:text-3xl text-2xl py-[35px] text-[#012135] text-center  font-serif">
                Your Score
              </p>
              <p className=" text-9xl">{score}</p>
              <p className=" font-bold sm:text-3xl text-2xl py-[35px] text-[#012135] text-center  font-serif">
                out of {javaEasyQuestions.length} Questions
              </p>
            </div>
            <div className=" flex flex-col py-10  items-center justify-center gap-5 w-[380px]">
              <Link
                to="/"
                className="  w-[80%] py-2 flex items-center justify-center  rounded-lg shadow-sm shadow-gray-400 bg-[#5FC0DA] sm:text-4xl text-2xl text-black">
                <button>Menu</button>
              </Link>

              <button
                className="  w-[80%] py-2 flex items-center justify-center  rounded-lg shadow-sm shadow-gray-400 bg-[#5FC0DA] sm:text-4xl text-2xl text-black"
                onClick={retry}>
                Play Again
              </button>

              <Link
                to="/javainter"
                className="  w-[80%] py-2 flex items-center justify-center  rounded-lg shadow-sm shadow-gray-400 bg-[#5FC0DA] sm:text-4xl text-2xl text-black">
                <button>Next Level</button>
              </Link>
            </div>
          </div>
        </>
      ) : (
        <>
          <h1 className=" font-bold sm:text-5xl text-3xl py-[35px] text-[#5FC0DA] text-center">
            Question ({index + 1})
          </h1>
          <div className=" flex flex-col justify-center sm:items-center items-start sm:px-0 px-5 gap-10">
            <h3 className=" text-white text-3xl sm:text-5xl flex gap-2">
              {index + 1}.{" "}
              <span className=" sm:w-[700px]">{question.question}</span>
            </h3>
            <ul className=" flex flex-col gap-5 ml-5 sm:w-fit w-[100%]">
              <li
                ref={option1}
                className="  border border-solid border-white rounded-md w-[80%] sm:w-[500px] sm:text-4xl p-3 sm:p-5 text-white "
                onClick={(e) => {
                  checkAns(e, 1);
                }}>
                {" "}
                - A) {question.option1}
              </li>
              <li
                ref={option2}
                className="  border border-solid border-white rounded-md w-[80%] sm:w-[500px] sm:text-4xl p-3 sm:p-5 text-white "
                onClick={(e) => {
                  checkAns(e, 2);
                }}>
                - B) {question.option2}
              </li>
              <li
                ref={option3}
                className="  border border-solid border-white rounded-md w-[80%] sm:w-[500px] sm:text-4xl p-3 sm:p-5 text-white "
                onClick={(e) => {
                  checkAns(e, 3);
                }}>
                {" "}
                - C) {question.option3}
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center py-20 ">
            <button
              onClick={next}
              className="px-16 py-2 bg-[#5FC0DA] rounded-md shadow-md shadow-gray-400 cursor-pointer">
              Next
            </button>
          </div>
          <p className=" text-center text-[#5FC0DA] fixed bottom-5 left-5 text-sm font-serif font-bold">
            Queston {index + 1}/{javaEasyQuestions.length}
          </p>
        </>
      )}
    </div>
  );
}

export default Javaeasy;
