import buttonLine from "../assets/buttonLine.svg";
import arrowDown from "../assets/arrowDown.svg";
import arrowDownWhite from "../assets/arrowDownWhite.svg";
import CustomButton from "../UI/CustomButton";

export default function Curriculum() {
  return (
    <div>
      <p className="text-secondary-black text-justify font-medium pb-7.5 md:text-base text-[12px] md:pb-10">
        Unlock the path to success with our comprehensive curriculum, designed
        to equip you with the skills and knowledge needed to excel in forex
        trading. Whether you’re just starting out or looking to advance, our
        step-by-step modules cover everything from foundational concepts to
        advanced strategies. Take the first step toward mastering your future.
        Click the button below to download the curriculum now and begin your
        journey today!
      </p>
      <div className="flex gap-5 md:w-fit flex-wrap text-sm">
        <div className="">
          <CustomButton icon1={<img src={arrowDownWhite} />}>
            <span className="md:text-base text-[10px]">Download Timetable</span>
          </CustomButton>
        </div>
        <img src={buttonLine} alt="" className="hidden md:block" />
        <div>
          <CustomButton variant="secondary" icon1={<img src={arrowDown} />}>
            <span className="md:text-base text-[10px]">
              Beginner's curriculum
            </span>
          </CustomButton>
        </div>
        <img src={buttonLine} alt="" className="hidden md:block" />
        <div>
          <CustomButton variant="secondary" icon1={<img src={arrowDown} />}>
            <span className="md:text-base text-[10px]">
              Intermediate curriculum
            </span>
          </CustomButton>
        </div>
        <img src={buttonLine} alt="" className="hidden md:block" />
        <div>
          <CustomButton variant="secondary" icon1={<img src={arrowDown} />}>
            <span className="md:text-base text-[10px]">
              Advanced curriculum
            </span>
          </CustomButton>
        </div>
      </div>
    </div>
  );
}
