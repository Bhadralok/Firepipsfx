import blackLine from "../assets/cardLine.svg";
import PaymentMethod from "../assets/PaymentMethod.svg";
import cardList from "../assets/cardList.svg";
import CustomButton from "./CustomButton";
import arrowRight from "../assets/arrowRight.svg";

export default function BillingCard({
  icon,
  paragraph = "",
  price = "400",
  billingDescription = "",
  benefits = [
    "A free trading journal",
    "Daily live trading session",
    "60 minutes group call with a Mentor to create a personalized trading plan",
    "Certificate of Attendance",
    "Top Priority Support",
  ],
  duration = "Monthly plan",
}) {
  let style;
  let paymentStyle;
  let header;
  let list;
  let priceStyle;

  if (paragraph === "popular") {
    style = "bg-secondary-red";
    priceStyle = "text-primary-black";
  } else if (paragraph === "top tier") {
    style = "bg-primary-black text-white mix-blend-color";
    paymentStyle = " invert brightness-0";
    header = "text-white";
    list = "text-placeholder-gray";
  }

  return (
    <div
      className={`${style} w-[390px] shadow-xl px-6 py-8 rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl`}
    >
      <div className="flex flex-col gap-5">
        <h4
          className={`uppercase flex gap-3 tracking-widest items-center font-bold`}
        >
          {icon && (
            <span>
              <img src={icon} alt="" />
            </span>
          )}

          {paragraph && (
            <div className="flex gap-2">
              <p className="text-primary-red">{paragraph}</p>
              <span>|</span>
            </div>
          )}
          {duration}
        </h4>
        <p className={`${priceStyle} text-[40px] font-black`}>${price}.00</p>
        <img src={blackLine} alt="" className="" />
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex gap-4 pt-5 items-center">
          <p>Payments available</p>
          <img
            src={PaymentMethod}
            alt="payment"
            className={`"${paymentStyle}`}
          />
        </div>
        <p className={`${header} font-bold text-primary-black`}>
          {billingDescription}
        </p>
        <ul className={`${list} gap-6 flex flex-col`}>
          {benefits.map((n, i) => (
            <li key={i} className="flex gap-1 items-center text-sm w-full">
              <img src={cardList} alt="" className="" />
              {n}
            </li>
          ))}
        </ul>
        <div className="w-[205px]">
          <CustomButton icon1={<img src={arrowRight} />}>
            <span className="text-sm">Choose this plan</span>
          </CustomButton>
        </div>
      </div>
    </div>
  );
}
