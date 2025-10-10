import { useState } from "react";
import arrowDown from "../assets/arrowDown.svg";
import faqLineBlack from "../assets/faqLineBlack.svg";
import arrowUp from "../assets/arrowUp.svg";

export default function FaqQuestions({
  isActive,
  index,
  setIsactive,
  question = "question",
  video,
  answer,
}) {
  const [isLoading, setIsLoading] = useState(true);
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
        className={` pb-5 ${
          isActive && `text-primary-red`
        } font-medium text-xl questions`}
      >
        {question}
      </h2>
      {isActive && <p className="text-sm text-secondary-black">{answer}</p>}
      {isActive && video && (
        <div className="pt-5 pb-5 relative">
          <iframe
            width="560"
            height="315"
            onLoad={() => setIsLoading(false)}
            src={video}
            title={question}
            // frameBorder="0"
            allowFullScreen
            className="w-full aspect-video rounded-lg"
          />
          {isLoading && (
            <div className="absolute inset-0 z-100 flex justify-center items-center bg-white/80">
              <div className="w-8 h-8 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
        </div>
      )}
      <div
        className={`${
          isActive ? `h-fit` : `h-7`
        } transition-all duration-300 overflow-hidden`}
      >
        <button
          onClick={() => open(index)}
          className="list-none pb-5 cursor-pointer items-center gap-1.5 text-primary-red font-bold"
        >
          {isActive ? (
            <span className="flex gap-1.5 text-primary-black pt-5">
              Close answers <img src={arrowUp} className="text-black" alt="" />
            </span>
          ) : (
            <span className="flex gap-1.5">
              See answers <img src={arrowDown} alt="" />
            </span>
          )}
        </button>
      </div>
      <img src={faqLineBlack} alt="" className="pt-5 pb-7.5" />
    </>
  );
}
