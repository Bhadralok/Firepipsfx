import CustomButton from "../UI/CustomButton";
import upRightArrow from "../assets/upRightArrowRed.svg";
import faqLine from "../assets/faqLine.svg";
import FaqQuestions from "../UI/FaqQuestions";
import { useState } from "react";
import { faqData } from "../utils/config";
import faqmobileline from "../assets/faqmobileline.svg";

export default function FaqPage() {
  const [isOpenFaq, setIsOpenFaq] = useState(null);
  return (
    <div className="md:pt-24 pt-10 h-full w-full flex flex-col gap-10 px-10">
      <div className="pt-20 flex md:flex-row flex-col w-full md:items-center items-start justify-between">
        <div className="flex flex-col md:gap-7.5 gap-4">
          <h1 className="font-black text-2xl md:text-5xl text-primary-black">
            Frequently Asked Questions
          </h1>
          <p className="font-medium text-secondary-black text-sm">
            We have answered some of the questions you might have about
            FirepipsFx academy...
          </p>
        </div>
        <div className="flex gap-5 justify-end flex-col items-end">
          <p className="font-medium text-secondary-black md:block hidden text-sm">
            For more questions, contact our support team
          </p>
          <div className="md:w-[207px] pt-5">
            <CustomButton variant="outlined" icon1={<img src={upRightArrow} />}>
              <span className="md:text-sm text-[10px]">Contact Support</span>
            </CustomButton>
          </div>
        </div>
      </div>
      <img src={faqLine} alt="" className="w-full md:block hidden"/>
      <img src={faqmobileline} alt="" className="w-full md:hidden "/>
      <div className="md:w-[40vw]">
        {faqData.map((items, i) => (
          <FaqQuestions
            key={i}
            isActive={i === isOpenFaq}
            setIsactive={setIsOpenFaq}
            index={i}
            question={items.question}
            answer={items.answer}
            video={items.video}
          />
        ))}
      </div>
    </div>
  );
}

// const questions = faqData.map((items) => {
//   return items.question
// })
