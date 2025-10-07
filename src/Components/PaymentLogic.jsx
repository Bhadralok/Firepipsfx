import { useState } from "react";
import LineButton from "../UI/LineButton";
import enroll from "../assets/Enroll.svg";
import paymentLine from "../assets/paymentLine.svg";
import whatYou from "../assets/whatYou.svg";
import learnArrow from "../assets/learnArrow.svg";
import ListIcon from "../assets/ListIcon.svg";
import location from "../assets/location.svg";
import BillingCard from "../UI/BillingCard";
import Footer from "./Footer";
// import { ExchangeContext } from "../Context/ExchangeRateData";

export default function PaymentLogic() {
  const [isActive, setIsActive] = useState(true);
  const [isActive1, setIsActive1] = useState(false);

  //   const exchangeRate = useContext(ExchangeContext);
  //   const [showInNaira, setShowInNaira] = useState(true);

  const handleClick = () => {
    setIsActive(!isActive);
    setIsActive1(!isActive1);
  };

  const priceInNaira = 250000;

  //   const displayPrice = showInNaira
  //     ? `₦${priceInNaira.toLocaleString()}`
  //     : `$${(priceInNaira / exchangeRate).toFixed(2)}`;

  //   const priceInDollar = priceInNaira / exchangeRate;

  //   console.log(exchangeRate)

  const priceInDollar = 165.99;
  const newPrice = priceInNaira.toLocaleString();
  return (
    <div>
      <h2 className="font-bold text-sm  text-primary-black pt-7.5">
        Select a mentorship type
      </h2>
      <div className="">
        <LineButton onClick={handleClick} isActive={isActive}>
          Physical mentorship
        </LineButton>
        <LineButton onClick={handleClick} isActive={isActive1}>
          Online mentorship
        </LineButton>
      </div>
      <div className="shadow-md w-full  p-7.5 pb-12 text-primary-black justify-between items-center flex gap-10">
        {/* first container */}
        {isActive ? (
          <>
            <div className="">
              <div className="w-[247px] h-[360px] text-primary-black">
                <h3 className="text-primary-red text-[40px] font-medium">
                  &#8358;
                  {newPrice}
                </h3>
                <p className="font-black text-[12px]">PER MONTH</p>
                <p className="font-medium text-secondary-black text-[12px]">
                  Approx. ${priceInDollar}
                </p>
              </div>
              <div>
                <button className="flex cursor-pointer bg-primary-red justify-center pr-1.5 pl-4 font-bold gap-2.5 p-2 rounded-2xl text-white items-center">
                  <span>Enroll to our physical class</span>
                  <img src={enroll} alt="" />
                </button>
              </div>
            </div>
            <img src={paymentLine} alt="" />
            {/* middle container  */}
            <div className="w-[277px]">
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
            <img src={paymentLine} alt="" />
            {/* last container */}
            <div className="w-[277px] h-[360px] mr-10">
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
          </>
        ) : (
          <div className="flex gap-5 items-center justify-between">
            <BillingCard />
            <BillingCard />
            <BillingCard />
            <BillingCard />
          </div>
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
