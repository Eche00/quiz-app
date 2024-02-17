import React, { useRef, useState } from "react";
import javaEasyQuestions from "../javaquestions/javaeasyquestions";

function Javaeasy() {
  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(javaEasyQuestions[index]);
  let [lock, setLock] = useState(false);
  let [score, setScore] = useState(0);

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
    if (lock === true) {
      setIndex(++index);
      setQuestion(javaEasyQuestions[index]);
      setLock(false);
      option_array.map((option) => {
        option.current.classList.remove("wrong");
        option.current.classList.remove("correct");
      });
    }
  };

  return (
    <div>
      <h1 className=" font-bold sm:text-5xl text-3xl py-[35px] text-[#5FC0DA] text-center">
        Java Easy Level
      </h1>
      <div className=" flex flex-col justify-center sm:items-center items-start sm:px-0 px-5 gap-10">
        <h3 className=" text-white text-3xl sm:text-7xl flex gap-2">
          {index + 1}. <span>{question.question}</span>
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
    </div>
  );
}

export default Javaeasy;
