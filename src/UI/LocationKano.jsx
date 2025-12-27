import location10 from "../assets/location10.png";
import location11 from "../assets/location11.png";
import location12 from "../assets/location12.png";
import locationicon from "../assets/location.svg";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import UpRight from "../assets/upRightArrowRed.svg";
import map from "../assets/map1.png";
import downArrow from "../assets/pointingDownArrow.svg";
import { FaCheckCircle } from "react-icons/fa";

export default function LocationAsaba() {
  const location = "Kano";
  return (
    <div className="flex flex-col gap-7.5">
      <div className="flex flex-col gap-2">
        <h2 className="location-heading">{location} - Maganda Road branch</h2>
        <p className="paragraph">
          We are proud to be the only best forex academy in the Northern region
          and its environs, providing traders in Kano and neighboring states
          with direct access to world-class forex education. Whether you’re just
          starting your forex journey or already trading and want to become
          consistently profitable, our Kano branch offers physical and online
          training programs tailored for all skill levels.
        </p>
      </div>
      <div className="gap-3 flex flex-col">
        <h2 className="location-heading">
          Why Choose FirepipsFX in {location}
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
        <p className="paragraph">
          At Firepips Forex Academy Kano, our training is designed to take you
          from a complete beginner to a confident and profitable trader. Here’s
          what you’ll gain:
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
        <h2 className="location-heading">
          Who Can Enroll at Firepips in {location} Branch?
        </h2>
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
          Begin Your Forex Journey at Firepips {location}
        </h2>
        <p className="paragraph">
          Take advantage of the leading forex trading academy in Northern
          Nigeria. Whether you’re in Kano, Kaduna, Katsina, Jigawa, Bauchi, or
          Sokoto, our Kano branch gives you access to quality forex education,
          mentorship, and practical training. <br />
          <br />
          Enroll today and start building the skills you need to trade
          confidently and profitably with FirepipsFX.
        </p>
      </div>
      <div className="flex gap-2 items-center">
        <div className="w-2 h-5 bg-primary-red"></div>
        <h3 className="font-black text-[10px] md:text-[12px] uppercase">
          PICTURES FROM KANO - FIREPIPSFX ACADEMY KANO Branch
        </h3>
      </div>
      {/* the imgaes go here */}
      <div className="w-full md:h-140 md:p-2 flex md:flex-row gap-4 flex-col">
        <div className="rounded-2xl overflow-hidden">
          <img
            src={location10}
            alt="location 1"
            className="w-full h-full object-cover"
          />
        </div>

        <div className=" rounded-2xl overflow-hidden">
          <img
            src={location11}
            alt="location 2"
            className="w-full h-full object-cover"
          />
        </div>

        <div className=" rounded-2xl overflow-hidden">
          <img
            src={location12}
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
              Detailed Kano Address
            </p>
          </div>
          <div className="flex gap-2 pt-2">
            <img src={downArrow} alt="" />
            <p className="paragraph">
              No. 61 Maganda Road, Off Murtala Mohammed Way, Kano, Nigeria
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
    title: "Only Best Forex Academy in Northern Nigeria",
    description: "Trusted by aspiring traders across the region.",
  },
  {
    id: 2,
    title: "Strategic Location",
    description:
      "Located at No. 61 Maganda Road, Off Murtala Mohammed Way; easily accessible in Kano.",
  },
  {
    id: 3,
    title: "Close to Neighboring States",
    description:
      "Students from Kaduna, Katsina, Jigawa, Bauchi, and Sokoto can also attend physical classes conveniently.",
  },
  {
    id: 4,
    title: "Professional Mentorship",
    description: "Learn directly from experienced traders with proven results.",
  },
  {
    id: 5,
    title: "Step-by-Step Training",
    description: "Covering beginners, intermediate, and advanced levels.",
  },
  {
    id: 6,
    title: "Flexible Learning",
    description:
      "Join physical classes in Kano or attend online sessions from anywhere.",
  },
  {
    id: 7,
    title: "Growing Community",
    description:
      "Become part of a nationwide network of passionate and successful traders.",
  },
];
const tradingTopics = [
  {
    id: 1,
    title: "Introduction to Forex Trading",
    description: "Learn the basics, forex terms, and how the market works.",
  },
  {
    id: 2,
    title: "Chart Analysis & Technical Indicators",
    description:
      "Understand candlesticks, trends, support & resistance, and key trading tools.",
  },
  {
    id: 3,
    title: "Fundamental Analysis",
    description:
      "Discover how global news, economic data, and events affect currency movements.",
  },
  {
    id: 4,
    title: "Risk Management Strategies",
    description:
      "Master how to protect your capital and manage losses effectively.",
  },
  {
    id: 5,
    title: "Trading Psychology",
    description:
      "Build the right mindset to stay disciplined and avoid emotional trading.",
  },
  {
    id: 6,
    title: "Live Trading Sessions",
    description:
      "Practice what you learn with real market examples and mentorship.",
  },
  {
    id: 7,
    title: "Advanced Strategies",
    description:
      "For intermediate and advanced traders who want consistency and higher profits.",
  },
];
const tradingLevels = [
  {
    id: 1,
    description: "Beginners who want to understand forex from scratch.",
  },
  {
    id: 2,
    description: "Traders seeking to sharpen their strategies.",
  },
  {
    id: 3,
    description: "Advanced traders aiming for consistency and profitability.",
  },
  {
    id: 4,
    description:
      "Students, professionals, and entrepreneurs looking to build sustainable income streams.",
  },
];
