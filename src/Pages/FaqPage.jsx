import CustomButton from "../UI/CustomButton";
import upRightArrow from "../assets/upRightArrowRed.svg";
import faqLine from "../assets/faqLine.svg";
import FaqQuestions from "../UI/FaqQuestions";
import { useState } from "react";

export default function FaqPage() {
  const [isOpenFaq, setIsOpenFaq] = useState(null);
  return (
    <div className="pt-24 h-screen flex flex-col gap-10 px-10">
      <div className="pt-20 flex w-full items-center justify-between">
        <div className="flex flex-col gap-7.5">
          <h1 className="font-black text-5xl text-primary-black">
            Frequently Asked Questions
          </h1>
          <p className="font-medium text-secondary-black text-sm">
            We have answered some of the questions you might have about
            FirepipsFx academy...
          </p>
        </div>
        <div className="flex gap-5 justify-end flex-col items-end">
          <p className="font-medium text-secondary-black text-sm">
            For more questions, contact our support team
          </p>
          <div className="w-[207px] ">
            <CustomButton variant="outlined" icon1={<img src={upRightArrow} />}>
              <span className="text-sm">Contact Support</span>
            </CustomButton>
          </div>
        </div>
      </div>
      <img src={faqLine} alt="" />
      <div className="w-[50vw] ">
        {Array.from({ length: 5 }).map((_, i) => (
          <FaqQuestions
            key={i}
            isActive={i === isOpenFaq}
            setIsactive={setIsOpenFaq}
            index={i}
          />
        ))}
      </div>
    </div>
  );
}
