import location1 from "../assets/location1.png";
import location2 from "../assets/location2.png";
import location3 from "../assets/location3.png";
import location from "../assets/location.svg";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import UpRight from "../assets/UpRightArrowRed.svg";
import map from "../assets/Map.png";
import downArrow from "../assets/pointingDownArrow.svg";
import { FaCheckCircle } from "react-icons/fa";

export default function LocationLekki() {
  return (
    <div className="flex flex-col gap-7.5">
      <div className="flex flex-col gap-2">
        <h2 className="location-heading"> Lagos Island - Lekki</h2>
        <p className="paragraph">
          Are you looking for the best forex trading academy in Lekki? At
          FirepipsFX, we provide expert-led training to help you master forex
          trading, develop profitable strategies, and trade with confidence
        </p>
      </div>
      <div className="gap-3 flex flex-col">
        <h2 className="location-heading">Why Choose FirepipsFX in Lekki?</h2>
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
          What You Will Learn at Lekki Forex Trading Academy?
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
        <h2 className="location-heading">Who can join?</h2>
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
          Enroll Today & Start Trading Like a Pro!
        </h2>
        <p className="paragraph">
          Join the best forex trading academy in Lekki and take the first step
          towards financial freedom. Whether you are new to forex or an
          experienced trader, FirepipsFX will help you achieve your trading
          goals
        </p>
      </div>
      <div className="flex gap-2 items-center">
        <div className="w-2 h-5 bg-primary-red"></div>
        <h3 className="font-black text-[10px] md:text-[12px]">
          PICTURES FROM LEKKI - FIREPIPSFX ACADEMY HQ
        </h3>
      </div>
      {/* the imgaes go here */}
      <div className="w-full md:h-140 md:p-2 flex md:flex-row gap-4 flex-col">
        <div className="rounded-2xl overflow-hidden">
          <img
            src={location1}
            alt="location 1"
            class="w-full h-full object-cover"
          />
        </div>

        <div className=" rounded-2xl overflow-hidden">
          <img
            src={location2}
            alt="location 2"
            class="w-full h-full object-cover"
          />
        </div>

        <div className=" rounded-2xl overflow-hidden">
          <img
            src={location3}
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
            <img src={location} alt="" />
            <p className="font-bold md:text-base text-sm">
              Detailed Lekki - HQ Address
            </p>
          </div>
          <div className="flex gap-2 pt-2">
            <img src={downArrow} alt="" />
            <p className="paragraph">
              Block 1A Tatiana Court Estate Ikota Villa, Ikota, Lekki, Lagos.
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
      "Learn from experienced traders with years of market knowledge.",
  },
  {
    id: 2,
    title: "Hands-On Training",
    description: "Get practical lessons on technical & fundamental analysis.",
  },
  {
    id: 3,
    title: "Proven Strategies",
    description: "Master profitable trading techniques and risk management.",
  },
  {
    id: 4,
    title: "Live Trading Sessions",
    description: "Gain real-market experience with live trade examples.",
  },
  {
    id: 5,
    title: "Flexible Learning",
    description: "Online and in-person classes available in Lekki, Lagos.",
  },
];
const tradingTopics = [
  {
    id: 1,
    title: "Forex Market Basics",
    description: "Understanding currency pairs, pips, spreads & market trends.",
  },
  {
    id: 2,
    title: "Technical Analysis",
    description: "Chart patterns, indicators & price action strategies.",
  },
  {
    id: 3,
    title: "Fundamental Analysis",
    description: "Economic news impact, interest rates & market movements.",
  },
  {
    id: 4,
    title: "Risk Management",
    description: "Money management techniques & trading psychology.",
  },
  {
    id: 5,
    title: "Live Trading",
    description: "Hands-on experience with real-time market conditions.",
  },
];
const tradingLevels = [
  {
    id: 1,
    description: "Beginners looking to start a forex trading career",
  },
  {
    id: 2,
    description: "Intermediate traders aiming to refine their strategies.",
  },
  {
    id: 3,
    description:
      "Advanced traders who want to improve consistency & profitability",
  },
];
