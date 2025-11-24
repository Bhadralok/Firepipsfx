import location7 from "../assets/location7.png";
import location8 from "../assets/location8.png";
import location9 from "../assets/location9.png";
import locationicon from "../assets/location.svg";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import UpRight from "../assets/UpRightArrowRed.svg";
import map from "../assets/Map1.png";
import downArrow from "../assets/pointingDownArrow.svg";
import { FaCheckCircle } from "react-icons/fa";

export default function LocationAsaba() {
  const location = "Asaba";
  return (
    <div className="flex flex-col gap-7.5">
      <div className="flex flex-col gap-2">
        <h2 className="location-heading"> Delta - {location} branch</h2>
        <p className="paragraph">
          Looking for the best forex trading academy in Asaba, Delta? Look no
          further! At FirepipsFX, we provide hands-on training and expert-led
          mentorship to help you master the art of forex trading. Whether you're
          just starting or looking to refine your skills, our academy offers
          everything you need to trade like a pro.
        </p>
      </div>
      <div className="gap-3 flex flex-col">
        <h2 className="location-heading">
          Why Choose FirepipsFX in {location}, Delta?
        </h2>
        <p className="paragraph">
          FirepipsFX is your go-to destination for top-notch forex trading
          education. Here’s why we stand out:
        </p>
        <ul className="flex flex-col gap-4 paragraph">
          {tradingBenefits.map((benefits) => (
            <div className="flex gap-2 items-center" key={benefits.id}>
              <FaCheckCircle color="#ED3C52" />
              <li>
                {benefits.title} – {benefits.description}
              </li>
            </div>
          ))}
        </ul>
      </div>
      <div className="gap-3 flex flex-col">
        <h2 className="location-heading">
          What You Will Learn at Delta Forex Trading Academy?
        </h2>
        <p className="paragraph">
          At FirepipsFX, we ensure that you receive a comprehensive forex
          education that sets you up for success. Here’s what our curriculum
          includes:
        </p>
        <ul className="flex flex-col gap-4 paragraph">
          {tradingTopics.map((benefits) => (
            <div className="flex gap-2 items-center" key={benefits.id}>
              <FaCheckCircle color="#ED3C52" />
              <li>
                {benefits.title} – {benefits.description}
              </li>
            </div>
          ))}
        </ul>
      </div>
      <div className="gap-3 flex flex-col">
        <h2 className="location-heading">Who Can Join FirepipsFX in Asaba?</h2>
        <p className="paragraph">
          Whether you're just starting out or already have some trading
          experience, FirepipsFX offers training for all levels:
        </p>
        <ul className="flex flex-col gap-4 paragraph">
          {tradingLevels.map((benefits) => (
            <div className="flex gap-2 items-center" key={benefits.id}>
              <FaCheckCircle color="#ED3C52" />
              <li>{benefits.description}</li>
            </div>
          ))}
        </ul>
      </div>
      <div className="gap-3 flex flex-col">
        <h2 className="location-heading">
          Get Started Today – Enroll at FirepipsFX Forex Academy!
        </h2>
        <p className="paragraph">
          Ready to take your trading skills to the next level? Join FirepipsFX,
          the best forex trading academy in Asaba, Delta, and start trading like
          a pro. With our expert guidance and hands-on approach, you’ll learn
          how to achieve consistent profits in the forex market.
        </p>
      </div>
      <div className="flex gap-2 items-center">
        <div className="w-2 h-5 bg-primary-red"></div>
        <h3 className="font-black text-[10px] md:text-[12px] uppercase">
          PICTURES FROM Asaba - FIREPIPSFX ACADEMY Asaba Branch
        </h3>
      </div>
      {/* the imgaes go here */}
      <div className="w-full md:h-140 md:p-2 flex md:flex-row gap-4 flex-col">
        <div className="rounded-2xl overflow-hidden">
          <img
            src={location7}
            alt="location 1"
            className="w-full h-full object-cover"
          />
        </div>

        <div className=" rounded-2xl overflow-hidden">
          <img
            src={location8}
            alt="location 2"
            className="w-full h-full object-cover"
          />
        </div>

        <div className=" rounded-2xl overflow-hidden">
          <img
            src={location9}
            alt="location 3"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div>
        <h3 className="location-heading">Ready to get started?</h3>
        <p className="paragraph">Contact us through the following mediums</p>
      </div>
      <div className="flex flex-col gap-3 md:gap-10 md:flex-row">
        <div>
          <div className="flex gap-2 items-center">
            <img src={locationicon} alt="" />
            <p className="font-bold md:text-base text-sm">
              Detailed Asaba Address
            </p>
          </div>
          <div className="flex gap-2 pt-2">
            <img src={downArrow} alt="" />
            <p className="paragraph">
              Unit 17, Motorways Building Opposite 7UP, Ikeja, Lagos.
            </p>
          </div>
        </div>
        <div className="md:hidden">
          <img src={map} alt="" />
        </div>
        <div>
          <div className="flex gap-2 items-center">
            <div>
              <MdEmail color="#ED3C52" size={30} />
            </div>
            <div>
              <p className="font-bold md:text-base text-sm">
                Our Email Address
              </p>
              <p className="paragraph">support@firepipsfx.com</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-2 items-center">
            <div>
              <IoLogoWhatsapp color="#ED3C52" size={30} />
            </div>
            <div>
              <p className="font-bold md:text-base text-sm">WhatsApp Support</p>
              <button className="font-medium md:text-sm text-[12px] flex gap-2 items-center cursor-pointer text-primary-red">
                Talk to us on whatsapp{" "}
                <span>
                  <img src={UpRight} alt="" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:flex pb-20">
        <img src={map} alt="" />
      </div>
    </div>
  );
}

const tradingBenefits = [
  {
    id: 1,
    title: "Expert Mentorship",
    description:
      "Learn from seasoned professionals with years of successful trading experience.",
  },
  {
    id: 2,
    title: "Comprehensive Curriculum",
    description:
      "We cover everything from forex market basics to advanced trading strategies.",
  },
  {
    id: 3,
    title: "Hands-On Training",
    description:
      "Gain practical experience through live market sessions, real-time trade analysis, and expert guidance.",
  },
  {
    id: 4,
    title: "Flexible Learning",
    description:
      "Attend online and in-person training sessions in Asaba, Delta at your convenience.",
  },
  {
    id: 5,
    title: "Proven Strategies",
    description:
      "Learn the best practices, risk management techniques, and profitable trading strategies.",
  },
];
const tradingTopics = [
  {
    id: 1,
    title: "Forex Basics",
    description:
      "Understand the fundamentals of forex trading, including currency pairs, pips, spreads, and market dynamics.",
  },
  {
    id: 2,
    title: "Technical Analysis",
    description:
      "Master chart patterns, indicators, and price action strategies to make informed trading decisions.",
  },
  {
    id: 3,
    title: "Fundamental Analysis",
    description:
      "Learn how economic news, interest rates, and geopolitical events impact the forex market.",
  },
  {
    id: 4,
    title: "Risk Management",
    description:
      "Learn how to protect your capital with effective risk management and money management strategies.",
  },
  {
    id: 5,
    title: "Live Trading Sessions",
    description:
      "Apply what you've learned with hands-on practice in live market scenarios.",
  },
];
const tradingLevels = [
  {
    id: 1,
    description:
      "Beginners who want to start their forex trading journey from scratch.",
  },
  {
    id: 2,
    description:
      "Intermediate Traders who want to refine their strategies and become more consistent.",
  },
  {
    id: 3,
    description:
      "Advanced Traders looking for advanced techniques and tips to boost profitability.",
  },
];
