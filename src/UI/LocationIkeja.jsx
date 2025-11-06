import location4 from "../assets/location4.png";
import location5 from "../assets/location5.png";
import location6 from "../assets/location6.png";
import locationicon from "../assets/location.svg";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import UpRight from "../assets/UpRightArrowRed.svg";
import map from "../assets/Map1.png";
import downArrow from "../assets/pointingDownArrow.svg";
import { FaCheckCircle } from "react-icons/fa";

export default function LocationLekki() {
  const location = "Ikeja";
  return (
    <div className="flex flex-col gap-7.5">
      <div className="flex flex-col gap-2">
        <h2 className="location-heading"> Lagos Mainland - {location}</h2>
        <p className="paragraph">
          Are you searching for the best forex trading academy in Ikeja? At
          FirepipsFX, we provide hands-on training and expert mentorship to help
          you become a consistently profitable trader. Whether you're a beginner
          or an experienced trader, our academy offers the tools and strategies
          you need to succeed.
        </p>
      </div>
      <div className="gap-3 flex flex-col">
        <h2 className="location-heading">
          Why Choose FirepipsFX in {location}?
        </h2>
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
          What You Will Learn at {location} Forex Trading Academy?
        </h2>
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
        <h2 className="location-heading">Who should enroll?</h2>
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
          Join the Best Forex Trading Academy in {location} Today!
        </h2>
        <p className="paragraph">
          Start your forex trading journey with FirepipsFX and gain the skills
          to trade profitably. Enroll in our Ikeja Forex Trading Academy and
          take control of your financial future.
        </p>
      </div>
      <div className="flex gap-2 items-center">
        <div className="w-2 h-5 bg-primary-red"></div>
        <h3 className="font-black text-[10px] md:text-[12px]">
          PICTURES FROM Ikeja - FIREPIPSFX ACADEMY Lagos Mainland
        </h3>
      </div>
      {/* the imgaes go here */}
      <div className="w-full md:h-140 md:p-2 flex md:flex-row gap-4 flex-col">
        <div className="rounded-2xl overflow-hidden">
          <img
            src={location4}
            alt="location 1"
            class="w-full h-full object-cover"
          />
        </div>

        <div className=" rounded-2xl overflow-hidden">
          <img
            src={location5}
            alt="location 2"
            class="w-full h-full object-cover"
          />
        </div>

        <div className=" rounded-2xl overflow-hidden">
          <img
            src={location6}
            alt="location 3"
            class="w-full h-full object-cover"
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
              Detailed Ikeja Address
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
    title: "Expert-Led Training",
    description:
      "Learn from seasoned forex traders with real-market experience.",
  },
  {
    id: 2,
    title: "Practical Learning",
    description:
      "Get hands-on forex training, live market analysis, and trade execution.",
  },
  {
    id: 3,
    title: "Proven Strategies",
    description:
      "Understand risk management, technical analysis, and profitable setups.",
  },
  {
    id: 4,
    title: "Flexible Learning Options",
    description: "Attend online classes or in-person sessions in Ikeja, Lagos.",
  },
  {
    id: 5,
    title: "Live Trading Sessions",
    description:
      "Watch professional traders make real-time decisions in the forex market.",
  },
];

const tradingTopics = [
  {
    id: 1,
    title: "Forex Market Essentials",
    description:
      "Learn about currency pairs, pips, and price movements to build a strong foundation.",
  },
  {
    id: 2,
    title: "Technical & Fundamental Analysis",
    description:
      "Master chart patterns, indicators, and the impact of economic news on the market.",
  },
  {
    id: 3,
    title: "Risk & Money Management",
    description:
      "Develop strong risk control strategies to effectively protect your capital.",
  },
  {
    id: 4,
    title: "Psychology of Trading",
    description:
      "Learn discipline, patience, and emotional control for long-term success in trading.",
  },
  {
    id: 5,
    title: "Live Trading Practice",
    description:
      "Apply your knowledge in a real-time trading environment and gain practical experience.",
  },
];
const tradingLevels = [
  {
    id: 1,
    description: "New traders looking for structured forex education.",
  },
  {
    id: 2,
    description: "Intermediate traders wanting to refine their strategies.",
  },
  {
    id: 3,
    description: "Advanced traders aiming for consistency and profitability.",
  },
];
