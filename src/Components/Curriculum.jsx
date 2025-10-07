import buttonLine from "../assets/buttonLine.svg";
import arrowDown from "../assets/arrowDown.svg";
import arrowDownWhite from "../assets/arrowDownWhite.svg";
import CustomButton from "../UI/CustomButton";

export default function Curriculum() {
  return (
    <div>
      <p className="text-secondary-black font-medium pb-10">
        Unlock the path to success with our comprehensive curriculum, designed
        to equip you with the skills and knowledge needed to excel in forex
        trading. Whether you’re just starting out or looking to advance, our
        step-by-step modules cover everything from foundational concepts to
        advanced strategies. Take the first step toward mastering your future.
        Click the button below to download the curriculum now and begin your
        journey today!
      </p>
      <div className="flex gap-5 w-[63rem] text-sm">
        <CustomButton icon1={<img src={arrowDownWhite} />}>
          Download Timetable
        </CustomButton>
        <img src={buttonLine} alt="" />
        <CustomButton variant="secondary" icon1={<img src={arrowDown} />}>
          Beginner's curriculum
        </CustomButton>
        <img src={buttonLine} alt="" />
        <CustomButton variant="secondary" icon1={<img src={arrowDown} />}>
          Intermediate curriculum
        </CustomButton>
        <img src={buttonLine} alt="" />
        <CustomButton variant="secondary" icon1={<img src={arrowDown} />}>
          Advanced curriculum
        </CustomButton>
      </div>
    </div>
  );
}
