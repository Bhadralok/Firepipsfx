import CustomButton from "../UI/CustomButton";
import { FiArrowUpRight } from "react-icons/fi";
import { MdKeyboardDoubleArrowDown, MdOutlineAddIcCall } from "react-icons/md";
import firstCover from "../assets/Cover-img1.png";
import secondCover from "../assets/Cover-img2.png";
import thirdCover from "../assets/Cover-img3.png";
import { useState } from "react";
import { IoArrowBackSharp, IoArrowForwardSharp } from "react-icons/io5";
import RoundButtons from "../UI/RoundButtons";
import arrowRight from "../assets/arrowRight.svg";
import { AiOutlinePlus } from "react-icons/ai";
import MeetIcon from "../assets/Meet.svg";
import MeetCoverImg from "../assets/Jeffrey.png";
import MeetCoverImg2 from "../assets/Jeffrey2.png";
import UpRightArrow from "../assets/upRightArrow.svg";
import UpRightArrowRed from "../assets/UpRightArrowRed.svg";
import Meet from "../assets/Meet.svg";
import vast from "../assets/vast.svg";
import CustomCards from "../UI/CustomCards";
import cardLineRed from "../assets/cardLineRed.svg";
import forex from "../assets/forex.svg";
import Live from "../assets/Live.svg";
import Book from "../assets/Book.svg";
import curriculum from "../assets/Curriculum.svg";
import buttonLine from "../assets/buttonLine.svg";
import arrowDown from "../assets/arrowDown.svg";
import arrowDownWhite from "../assets/arrowDownWhite.svg";
import rocket from "../assets/rocket.svg";
import buttonArrow from "../assets/buttonArrow.svg";
import pageLine from "../assets/pageLine.svg";

export default function LandingPage() {
  const [index, setIndex] = useState(0);
  const images = [firstCover, secondCover, thirdCover];

  const name = "JEFFREY BENSON";

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };
  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <main className="h-screen ">
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
      <section className="pt-20 px-10 relative ">
        <div className="flex gap-5 items-center">
          <img src={MeetIcon} alt="meet-icon" />
          <h2 className="text-5xl text-primary-black font-medium">
            Meet your <em className="not-italic font-black">Mentor...</em>
          </h2>
        </div>
        <div className="flex gap-17 justify-between">
          <div className="flex flex-col relative text-[25px] gap-12 w-[55vw] text-secondary-black font-medium pt-19">
            <p>
              <span className="text-primary-red font-black text-[22px]">
                {name}
              </span>
              &nbsp;is a professional, profitable and notable forex trader with
              over 8 years of experience, a thought leader, an investor and an
              international keynote speaker. He is also a kingmaker, passionate
              about helping humans through their “grass to grace” journeys.
            </p>
            <p>
              He is the founder of Firepips Trading Academy, Nigeria’s leading
              online forex and crypto trading academy, where he trains over one
              million beginners and advanced traders on how to trade profitably.{" "}
            </p>
            {/* <div className="h-41 w-[2px] bg-red-500 top-88 absolute"></div> */}
          </div>
          <div className="inline-block bg-cover bg-center">
            <img
              src={MeetCoverImg}
              alt="Jeffrey's image"
              className="h-fit w-[650px]"
            />
          </div>
        </div>
        {/* <div className=" absolute bottom-[290px] h-[2px] w-[728px]">
          <div className="max-w-fit h-full bg-blue-500"></div>
        </div> */}
      </section>
      <section className="px-10 flex  pt-4 gap-17">
        <div className="inline-block bg-cover bg-center">
          <img
            src={MeetCoverImg2}
            alt="Jeffrey's image"
            className="h-fit w-[650px]"
          />
        </div>
        <div className="flex relative flex-col text-[25px] gap-12 w-[55vw] text-secondary-black font-medium pt-19">
          {/* <div className="h-96 w-[2px] bg-red-500 -top-77 left-2 absolute"></div> */}
          {/* <img
            src={redLine}
            className="absolute top-0 bg-red-500 size-[]"
            alt=""
          /> */}
          <p className="">
            <span className="text-primary-red  font-black uppercase text-[22px]">
              Asides his paid mentorship,&nbsp;
            </span>
            Jeffrey helps youths all over the world take charge of their
            finances by making hundreds of forex videos, courses, and webinars
            available for FREE on both his website and YouTube Channel.
          </p>
          <p>
            He is the founder of Firepips Trading Academy, Nigeria’s leading
            online forex and crypto trading academy, where he trains over one
            million beginners and advanced traders on how to trade profitably.{" "}
          </p>
          <div className="flex flex-col gap-8 pt-40">
            <p className="text-primary-black text-base">
              Want to know more about Jeffrey and his accomplishments?
            </p>
            <div className="flex w-[32.313rem] gap-5 text-base">
              <CustomButton icon1={<img src={UpRightArrow} />}>
                Speak with a representative
              </CustomButton>
              <div className="w-[28.125rem]">
                <CustomButton
                  variant="outlined"
                  icon1={<img src={UpRightArrowRed} />}
                >
                  Visit telegram group
                </CustomButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-23 px-10 flex flex-col gap-10 ">
        <h3 className="text-primary-red uppercase text-2xl font-black tracking-wider">
          A little more about my journey thus far...
        </h3>
        <p className="font-medium text-secondary-black text-base text-justify">
          You see, 8 years ago I was just that guy looking for a genuine way to
          make money online. In 2015, I made a choice most kids wouldn’t even
          consider— I decided to drop out of school. My family thought I was out
          of my mind because I was studying law and doing well in school. But
          here’s the thing: from a very young age My dream has always been to
          own a Lamborghini and be able to travel the world with location and
          time freedom. So, when I did the math, I realized that if I was going
          to ever achieve my Lamborghini dream, I needed another Path. <br />
          <br /> You are probably reading this page right now because just like
          I did 8 years ago, you also have a big financial goal or dream and you
          are in search of the right Financial vehicle. Your goals may vary from
          owning your own house, buying your dream car, being able to provide
          for your loved ones, paying your bills or that of a loved one,
          retiring your parents, quitting your job, traveling the world, and
          even being able to give back to your community. Whatever that dream
          is, I understand because I have been there. However, the challenge
          with dreams and financial goals is that not every financial vehicle
          can take you there. It's not enough to have big financial goals, how
          much time and resources are you willing to set aside to achieve your
          goals? If you continue on your current path, will you be able to
          achieve all your financial goals? For me, the answer was NO! <br />
          <br />
          Once I discovered Forex Trading and understood that it has the
          potential to make me some serious money, I had to go all in. Think
          about it for a minute; What will an extra $10,000, $5,000, or even
          $1,000 monthly do for your goals? I remember when I made my first
          $1,000 from the market, the feeling was unreal or was it when I bought
          my first car? My brother had to call me aside to prove that I was not
          doing anything illegal. I even went viral when I bought a
          Mercedes-Benz after profiting over $270,000 in a single trade. What I
          am trying to say is that Forex Trading Funded and is funding my dreams
          and it can do the same for you. YES!!! Forex Trading allowed me to buy
          my dream car, a $330,000 Lamborghini Urus, and now I have much bigger
          dreams. Whether you are a trader stuck in an endless cycle of losses,
          or you are just hearing about Forex Trading as a total newbie I can
          show you how to flip the switch and become profitable. <br />
          <br />I started this academy to allow me to hold as many people by the
          hand and show them my roadmap step-by-step. This Roadmap is unlike any
          other trading system you've ever seen out there. I have perfected
          this strategy over the last seven years and used it to make over
          $10,000,000 in pure profit, it will save you time and help you trade
          SMART, not HARD!
        </p>
      </section>
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
        <p className="text-secondary-black font-medium pb-10">
          Unlock the path to success with our comprehensive curriculum, designed
          to equip you with the skills and knowledge needed to excel in forex
          trading. Whether you’re just starting out or looking to advance, our
          step-by-step modules cover everything from foundational concepts to
          advanced strategies. Take the first step toward mastering your future.
          Click the button below to download the curriculum now and begin your
          journey today!
        </p>
        <div className="flex gap-5 w-[63rem] text-sm">
          <CustomButton icon1={<img src={arrowDownWhite} />}>
            Download Timetable
          </CustomButton>
          <img src={buttonLine} alt="" />
          <CustomButton variant="secondary" icon1={<img src={arrowDown} />}>
            Beginner's curriculum
          </CustomButton>
          <img src={buttonLine} alt="" />
          <CustomButton variant="secondary" icon1={<img src={arrowDown} />}>
            Intermediate curriculum
          </CustomButton>
          <img src={buttonLine} alt="" />
          <CustomButton variant="secondary" icon1={<img src={arrowDown} />}>
            Advanced curriculum
          </CustomButton>
        </div>
      </section>
      <section className="pb-96 pt-20 px-10">
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
      </section>
    </main>
  );
}
