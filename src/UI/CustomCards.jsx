import vast from "../assets/vast.svg";
import UpRightArrowRed from "../assets/UpRightArrowRed.svg";
import CustomButton from "../UI/CustomButton";

export default function CustomCards({
  cardIcon,
  header = "A vast community of awesome Fx traders.",
  body,
  buttonText,
}) {
  return (
    <div className="p-5 pb-10 flex flex-col gap-7 w-[320px] h-fit">
      <img src={cardIcon} alt="" className="size-20" />
      <h3 className="text-xl font-black text-primary-black">{header}</h3>
      <p className="text-sm text-secondary-black font-medium">{body}</p>
      <div className="w-fit">
        <CustomButton variant="secondary" icon1={<img src={UpRightArrowRed} />}>
          <span celassName="text-sm font-bold">{buttonText}</span>
        </CustomButton>
      </div>
    </div>
  );
}
