import { useRef, useState } from "react";
import LineButton from "../UI/LineButton";
import enroll from "../assets/Enroll.svg";
import paymentLine from "../assets/paymentLine.svg";
import whatYou from "../assets/whatYou.svg";
import learnArrow from "../assets/learnArrow.svg";
import ListIcon from "../assets/ListIcon.svg";
import location from "../assets/location.svg";
import BillingCard from "../UI/BillingCard";
import Footer from "./Footer";
import star from "../assets/star.svg";
import cup from "../assets/cup.svg";
import paymentLineBlack from "../assets/paymentLineBlack.svg";
import PlansButton from "../UI/PlansButton";
export default function PaymentLogic() {
  const [isActive, setIsActive] = useState(true);
  const [isActive1, setIsActive1] = useState(false);
  const scrollRef = useRef(null);

  const handleClick = () => {
    setIsActive(true);
    setIsActive1(false);
  };
  const handleClick1 = () => {
    setIsActive(false);
    setIsActive1(true);
  };

  const priceInNaira = 250000;
  const priceInDollar = 165.99;
  const newPrice = priceInNaira.toLocaleString();

  const monthlyPrice = 79;
  const threeMonthsPrice = 197;
  const sixMonthsPrice = 339;
  const yearlyPrice = 599;


  const handleScroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = 400; // adjust scroll distance
    if (direction === "left") {
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div>
      <h2 className="font-bold text-sm  text-primary-black pt-7.5">
        Select a mentorship type
      </h2>
      <div className=" md:w-100 w-full flex ">
        <LineButton onClick={handleClick} isActive={isActive}>
          Physical mentorship
        </LineButton>
        <LineButton onClick={handleClick1} isActive={isActive1}>
          Online mentorship
        </LineButton>
      </div>
      <div className=" w-full py-4 md:p-7.5 md:pb-12 text-primary-black  md:flex-row flex-col flex gap-4 md:gap-2">
        {/* first container */}
        {isActive ? (
          <div className="py-5 px-4 rounded-3xl flex md:flex-row flex-col justify-between items-start w-full gap-5 box-shadow-lg">
            <div className="w-full md:w-fit">
              <div className="md:w-[247px] md:h-[360px] text-primary-black">
                <h3 className="text-primary-red text-[40px] font-medium">
                  &#8358;
                  {newPrice}
                </h3>
                <p className="font-black text-[12px]">PER MONTH</p>
                <p className="font-medium text-secondary-black pb-11 text-[12px]">
                  Approx. ${priceInDollar}
                </p>
              </div>
              <div className="w-full md:w-fit">
                <button className="flex cursor-pointer w-full md:w-fit bg-primary-red justify-between md:justify-center pr-1.5 pl-4 font-bold gap-2.5 p-2 rounded-2xl text-white items-center">
                  <span className="text-[12px] md:text-sm">
                    Enroll to our physical class
                  </span>
                  <img src={enroll} alt="" />
                </button>
              </div>
            </div>
            <img src={paymentLine} alt="" className="md:block hidden" />
            <img src={paymentLineBlack} alt="" className="md:hidden w-full" />

            {/* middle container  */}
            <div className="md:w-[277px]">
              <div className="flex items-center gap-2">
                <img src={whatYou} alt="" />
                <h5 className="font-bold">What You’ll Learn</h5>
              </div>
              <div className="flex relative -left-2 pt-2.5 pb-2.5 gap-1 w-full">
                <img src={learnArrow} alt="" className="size-15" />
                <p className="font-medium text-secondary-black text-[12px] relative -left-1">
                  Learning in one of physical locations has loads of benefits.
                  Some of these benefits includes:
                </p>
              </div>
              <div>
                <ul className="text-[12px] flex flex-col gap-5 text-secondary-black font-medium">
                  {tradingBenefits.map((items) => (
                    <li key={items.id} className="flex gap-2 items-center">
                      <img src={ListIcon} alt="" />
                      {items.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <img src={paymentLine} alt="" className="md:block hidden" />
            <img src={paymentLineBlack} alt="" className="md:hidden w-full" />
            {/* last container */}
            <div className="md:w-[277px]  md:h-[360px] mr-10">
              <div className="flex gap-2 items-center">
                <img src={location} alt="" />
                <h1 className="font-bold">Our Physical Locations</h1>
              </div>
              <div className="flex relative -left-2 pt-2.5 pb-2.5 gap-1 w-full">
                <img src={learnArrow} alt="" className="size-15" />
                <p className="font-medium text-secondary-black relative -left-1 text-[12px]">
                  The mentorship classes will take place in all our physical
                  locations in Lagos and Asaba which includes:
                </p>
              </div>
              <div>
                <ul>
                  {branchLocations.map((items) => (
                    <div className="">
                      <h1 className="font-black text-[12px]">{items.title}</h1>
                      <p className="font-medium text-secondary-black text-[12px] pb-6 ">
                        {items.address}
                      </p>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="flex gap-2.5 pt-4 w-full md:hidden justify-end">
              <PlansButton isLeft={true} onClick={() => handleScroll("left")} />
              <PlansButton
                isLeft={false}
                onClick={() => handleScroll("right")}
              />
            </div>
            <div
              ref={scrollRef}
              className="flex px-4  pt-7 pb-10 gap-5 flex-row items-center overflow-auto md:overflow-auto justify-between w-full"
            >
              <BillingCard
                price={monthlyPrice}
                benefits={MonthlyBenefits}
                billingDescription="What you will get with this plan..."
              />
              <BillingCard
                duration="3 Months Plan"
                benefits={threeMonthsBenefits}
                price={threeMonthsPrice}
                billingDescription="You will get everything in the monthly plan plus..."
              />
              <BillingCard
                price={sixMonthsPrice}
                paragraph="popular"
                icon={star}
                thePriceStyle="text-primary-red"
                popularStyle="bg-white"
                benefits={sixMonthsBenefits}
                billingDescription="You will get everything in the 3 months plan plus..."
              />
              <BillingCard
                price={yearlyPrice}
                paragraph="top tier"
                toptierStyle="bg-white text-primary-black mix-blend-difference"
                paymentColor="text-primary-red"
                duration="yearly plan"
                icon={cup}
                thePriceStyleTop="text-primary-red"
                benefits={yearlyBenefits}
                headerStyle="text-primary-black"
                billingDescription="You will get everything in the 6 months plan plus..."
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

const tradingBenefits = [
  {
    id: 1,
    text: "Intensive one month trading class ranging from beginners to advance level",
  },
  {
    id: 2,
    text: "Live trade signals (post mentorship period)",
  },
  {
    id: 3,
    text: "Live trading session with Jeffrey Benson and other instructors",
  },
  {
    id: 4,
    text: "Free trading Journal",
  },
  {
    id: 5,
    text: "Access to a community of professional Forex traders",
  },
  {
    id: 6,
    text: "Access a community manager who attends to your concerns outside class",
  },
];
const branchLocations = [
  {
    id: 1,
    title: "LAGOS ISLAND",
    address: "Block 1A Tatiana Court Estate Ikota Villa, Ikota, Lekki, Lagos.",
  },
  {
    id: 2,
    title: "LAGOS MAINLAND",
    address: "3 Ikeja Avenue, Lagos State.",
  },
  {
    id: 3,
    title: "ASABA BRANCH",
    address: "3 Ikeja Avenue, Lagos Mainland, Lagos.",
  },
];
const yearlyBenefits = [
  "A free trading journal",
  "Advanced live trading sessions",
  "120 minutes call with a Mentor to create a personalized trading plan",
  "Virtual graduation event",
  "Super Priority Instant Support",
];
const sixMonthsBenefits = [
  "A free trading journal",
  "Daily live trading session",
  "60 minutes group call with a Mentor to create a personalized trading plan",
  "Certificate of Attendance",
  "Top Priority Support",
];
const threeMonthsBenefits = [
  "A free trading journal",
  "Weekly live trading session",
  "Mentor's personal contact",
  "free trading plan template",
  "Priority Support",
];
const MonthlyBenefits = [
  "Full access to training videos",
  "Access to beginner & advanced live classes",
  "Free trade signals (Bonus)",
  "Private community",
  "Constant help and support",
];
