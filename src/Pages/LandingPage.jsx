import CustomButton from "../UI/CustomButton";
import { FiArrowUpRight } from "react-icons/fi";
import { MdKeyboardDoubleArrowDown, MdOutlineAddIcCall } from "react-icons/md";
import firstCover from "../assets/Cover-img1.webp";
import secondCover from "../assets/Cover-img2.webp";
import thirdCover from "../assets/Cover-img3.webp";
import { useEffect, useRef, useState } from "react";
import { IoArrowBackSharp, IoArrowForwardSharp } from "react-icons/io5";
import RoundButtons from "../UI/RoundButtons";
import arrowRight from "../assets/arrowRight.svg";
import { AiOutlinePlus } from "react-icons/ai";
import Meet from "../assets/Meet.svg";
import vast from "../assets/vast.svg";
import CustomCards from "../UI/CustomCards";
import cardLineRed from "../assets/cardLineRed.svg";
import forex from "../assets/forex.svg";
import Live from "../assets/Live.svg";
import Book from "../assets/Book.svg";
import curriculum from "../assets/Curriculum.svg";

import rocket from "../assets/rocket.svg";
import buttonArrow from "../assets/buttonArrow.svg";
import pageLine from "../assets/pageLine.svg";
import BillingCard from "../UI/BillingCard";
import star from "../assets/star.svg";
import cup from "../assets/cup.svg";
import experiences from "../assets/experiences.svg";
import ReviewCard from "../UI/ReviewCard";
import starIcon from "../assets/starIcon.svg";
import gotoLine from "../assets/gotoLine.svg";
import google from "../assets/google.svg";
import Footer from "../Components/Footer";
import AboutSection from "../Components/AboutSection";
import Curriculum from "../Components/Curriculum";

export default function LandingPage() {
  const [index, setIndex] = useState(0);
  const images = [firstCover, secondCover, thirdCover];
  const scrollRef = useRef(null);

  const name = "JEFFREY BENSON";

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };
  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleForward = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  const handleBackward = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <main className="">
      <section
        style={{ backgroundImage: `url(${images[index]})` }}
        className="flex items-center px-5 justify-between h-screen bg-cover bg-center transition-all duration-700"
      >
        <div>
          <RoundButtons
            onClick={handlePrev}
            icon={<IoArrowBackSharp size={24} />}
          />
        </div>
        {index === 0 && (
          <div className="flex flex-col w-[40vw] gap-7 items-center justify-center">
            <h1 className="text-5xl font-medium text-white text-center leading-normal">
              Welcome to <br />
              <em className="not-italic font-black ">FirepipsFx Academy!</em>
            </h1>
            <p className="text-white font-medium leading-normal text-sm text-center">
              Start your journey to mastering Forex Trading with one of the best
              in the world! Go from a beginner to an advanced FX trader with the
              one and only <em className="font-black not-italic">{name}</em>.
              Enroll now to gain access to over 80 in-depth courses that
              carefully explains the extreme complexities of the forex market.
            </p>
            <div className="flex gap-6 w-[29.75rem]">
              <CustomButton icon1={<MdKeyboardDoubleArrowDown size={24} />}>
                Enroll with us now
              </CustomButton>
              <CustomButton
                variant="whiteOutline"
                icon1={<FiArrowUpRight size={20} />}
              >
                Get forex signals
              </CustomButton>
            </div>
          </div>
        )}
        {index === 1 && (
          <div className="flex flex-col w-[40vw] gap-5 items-center justify-center">
            <h1 className="text-5xl font-medium text-white text-center leading-normal">
              Watch&nbsp;
              <em className="not-italic font-black ">Jeffrey</em>
              &nbsp;trade forex&nbsp; <br />
              <em className="not-italic font-black ">Seemlessly...</em>
            </h1>
            <p className="text-white font-medium  text-sm text-center">
              Take the first class for free and watch one of the best forex
              trader in the world introduce you to the academy!
            </p>
            <div className="flex gap-6 w-[207px]">
              <CustomButton icon1={<img src={arrowRight} />}>
                Take a free tour
              </CustomButton>
            </div>
          </div>
        )}
        {index === 2 && (
          <div className="flex flex-col w-[40vw] gap-7 items-center justify-center">
            <h1 className="text-5xl font-medium text-white text-center">
              Need more&nbsp;
              <em className="not-italic font-black ">Information?</em>
            </h1>
            <p className="text-white font-medium leading-normal text-sm text-center">
              Create a{" "}
              <em className="font-black not-italic">support request ticket</em>{" "}
              to tell us the issue you are experiencing with our services or ask
              any question you have to gain clarity about our prices, schedules,
              curriculum e.t.c. We usually respond between 2 to 4 hours. You can
              also talk to our support team using our Whatsapp customer support
              platform.
            </p>
            <div className="flex gap-6 w-[35.75rem]">
              <CustomButton icon2={<AiOutlinePlus size={20} />}>
                Create a support ticket
              </CustomButton>
              <CustomButton
                variant="whiteOutline"
                icon1={<FiArrowUpRight size={20} />}
              >
                Talk to us on Whatsapp
              </CustomButton>
            </div>
          </div>
        )}
        <div>
          <RoundButtons
            onClick={handleNext}
            icon={<IoArrowForwardSharp size={24} />}
          />
        </div>
      </section>
      <AboutSection id="aboutSection" />

      <section className="pt-20 px-10">
        <div className="text-primary-black flex items-center gap-5 ">
          <img src={Meet} alt="" />
          <h2 className="font-medium text-5xl leading-normal">
            Learning with{" "}
            <em className="not-italic font-black text-5xl">
              Firepipsfx <br /> Academy
            </em>
            &nbsp;offers you...
          </h2>
        </div>
        <div className="flex gap-5 items-center pt-19 justify-between">
          <CustomCards
            cardIcon={vast}
            body="We foster a trading community of over 100,000 subscribers where high
                  quality signals, trading resources and tools are shared for free."
            buttonText="Join our community"
          />
          <img src={cardLineRed} alt="" />
          <CustomCards
            cardIcon={forex}
            header="Forex enlightenment"
            body="We provide a robust curriculum that covers everything from forex basics to advanced trading strategies. Our aim is to equip you with the knowledge and skills you need to thrive in the forex market."
            buttonText="Enroll now and get started"
          />
          <img src={cardLineRed} alt="" />
          <CustomCards
            cardIcon={Live}
            header="Live trading sessions with professionals"
            body="Our free live trading session on YouTube every Monday 1:00 PM GMT+1 was created to help traders improve their trading and be consistently profitable."
            buttonText="Enroll now to join waitlist"
          />
          <img src={cardLineRed} alt="" />
          <CustomCards
            cardIcon={Book}
            header="One-on-one mentorship calls"
            body="Book intensive one-on-one meetings with our experienced tutors at FirepipsFX academy and get access to a private live session to learn and gain insights."
            buttonText="Book a session"
          />
        </div>
      </section>
      <section className="pt-22 px-10">
        <div className="flex gap-5 pb-15">
          <img src={curriculum} alt="" />
          <h2 className="text-5xl leading-normal">
            Check out our learning <br />{" "}
            <em className="not-italic font-black">Curriculum</em>
          </h2>
        </div>
        <Curriculum />
      </section>
      <section className="pt-20 px-10">
        <div className="text-primary-black text-5xl flex gap-6 pb-12 items-center">
          <img src={rocket} alt="" />
          <h2 className="font-medium">
            Our membership <em className="not-italic font-black">Plans</em>
          </h2>
        </div>
        <p className="text-secondary-black font-medium text-justify">
          We offer online and physical mentorship classes in our branches at
          Lagos and Delta state Nigeria. You can pay for our online mentorship
          by choosing a plan below to get started. If you would prefer our
          physical classes, you can start the enrollment process by clicking the
          button below.
        </p>
        <div className="pt-8">
          <button className="bg-primary-red cursor-pointer text-white flex font-bold items-center gap-2.5 rounded-br-3xl rounded-tl-3xl rounded-bl-3xl p-2 py-2 pl-5">
            Enroll to our physical class
            <span>
              <img src={buttonArrow} alt="" />
            </span>
          </button>
          <div className="pt-8 w-full">
            <img src={pageLine} alt="" className="w-full" />
          </div>
        </div>
        <div className="pt-10 flex gap-4 justify-between items-center">
          <BillingCard
            price="79"
            billingDescription="What you will get with this plan..."
            benefits={MonthlyBenefits}
          />
          <BillingCard
            price="197"
            billingDescription="You will get everything in the monthly plan plus..."
            benefits={threeMonthsBenefits}
            duration="3 months plan"
          />
          <BillingCard
            icon={star}
            paragraph="popular"
            price="339"
            benefits={sixMonthsBenefits}
            billingDescription="You will get everything in the 3 months plan plus..."
            duration="6 months plan"
          />
          <BillingCard
            icon={cup}
            paragraph="top tier"
            price="599"
            benefits={yearlyBenefits}
            billingDescription="You will get everything in the 6 months plan plus..."
            duration="yearly plan"
          />
        </div>
      </section>
      <section className="pb-30 pt-20 overflow-hidden">
        <div className="text-5xl px-10 text-primary-black flex font-medium gap-6">
          <img src={experiences} alt="" />
          <h2 className="leading-normal">
            Hear our students learning <br />
            <em className="not-italic font-black">Experiences</em>
          </h2>
        </div>
        <div className="relative w-full pt-15 pl-10">
          <div className="flex items-center z-40 pr-20 justify-between w-full flex-nowrap absolute top-[50%] bottom-[50%]">
            <div className="hover:opacity-100 opacity-20">
              <RoundButtons
                icon={<IoArrowBackSharp size={24} />}
                onClick={handleBackward}
              />
            </div>
            <div className="hover:opacity-100 opacity-20">
              <RoundButtons
                icon={<IoArrowForwardSharp size={24} />}
                onClick={handleForward}
              />
            </div>
          </div>
          <div
            ref={scrollRef}
            className="flex overflow-x-auto scroll-smooth pb-10 pr-20 relative gap-5"
            style={{ scrollbarWidth: "none" }}
          >
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
          </div>
        </div>
        <div className="px-10 pt-5">
          <div className="flex flex-col gap-3.5">
            <h3 className="font-black text-primary-black text-xl">
              We've got hundreds more reviews from our students!
            </h3>
            <p className="text-sm text-secondary-black font-medium">
              Check them out on TrustPilot and Google Reviews
            </p>
          </div>
          <div className="flex items-center pt-7.5 gap-10">
            <div className="flex items-center gap-5">
              <RoundButtons icon={<img src={starIcon} />} />
              <p className="font-medium text-sm leading-loose text-secondary-black">
                Go to <br />
                <em className="text-primary-black text-base not-italic font-black">
                  TrustPilot
                </em>
              </p>
              <img src={arrowRight} alt="" className="invert" />
            </div>
            <img src={gotoLine} alt="" />
            <div className="flex items-center gap-5">
              <RoundButtons icon={<img src={google} />} />
              <p className="font-medium text-sm leading-loose text-secondary-black">
                Go to <br />
                <em className="text-primary-black not-italic text-base font-black">
                  Google Reviews
                </em>
              </p>
              <img src={arrowRight} alt="" className="invert" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

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
