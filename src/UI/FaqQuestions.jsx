import { useState } from "react";
import arrowDown from "../assets/arrowDown.svg";
import faqLineBlack from "../assets/faqLineBlack.svg";

export default function FaqQuestions({
  isActive,
  index,
  setIsactive,
  question = "question",
}) {
  const close = () => {
    setIsactive(null);
  };

  const open = (val) => {
    if (isActive) {
      close();
    } else {
      setIsactive(val);
    }
  };

  return (
    <>
      <h2
        className={` ${
          isActive && `text-primary-red`
        } font-medium text-xl questions`}
      >
        {question}
      </h2>
      <div
        className={`${
          isActive ? `h-fit` : `h-7`
        } tarnsition-all duration-300  overflow-hidden`}
      >
        <button
          onClick={() => open(index)}
          className="list-none flex pb-5 cursor-pointer items-center gap-1.5 text-primary-red font-bold"
        >
          See answers <img src={arrowDown} alt="" />
        </button>
        <p className="text-sm text-secondary-black">Something is hiding</p>
      </div>
      <img src={faqLineBlack} alt="" className="pt-5 pb-7.5" />
    </>
  );
}
