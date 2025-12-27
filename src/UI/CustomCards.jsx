import UpRightArrowRed from "../assets/upRightArrowRed.svg";
import CustomButton from "../UI/CustomButton";

export default function CustomCards({
  cardIcon,
  header = "A vast community of awesome Fx traders.",
  body,
  buttonText,
}) {
  return (
    <div className="md:p-5 px-4 py-7  md:pb-10 flex flex-col md:gap-7 gap-5  md:w-[320px] h-fit">
      <img src={cardIcon} alt="" className="md:size-20 size-15" />
      <h3 className="md:text-xl font-black text-primary-black">{header}</h3>
      <p className="md:text-sm text-[10px] text-secondary-black font-medium">
        {body}
      </p>
      <div className="w-fit">
        <CustomButton variant="secondary" icon1={<img src={UpRightArrowRed} />}>
          <span className="md:text-sm text-[10px] font-bold">{buttonText}</span>
        </CustomButton>
      </div>
    </div>
  );
}
