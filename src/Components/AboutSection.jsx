import MeetIcon from "../assets/Meet.svg";
import MeetCoverImg from "../assets/Jeffrey.png";
import MeetCoverImg2 from "../assets/Jeffrey2.png";
import UpRightArrow from "../assets/upRightArrow.svg";
import UpRightArrowRed from "../assets/UpRightArrowRed.svg";
import CustomButton from "../UI/CustomButton";

export default function AboutSection({ id }) {
  const name = "JEFFREY BENSON";

  return (
    <div id={id}>
      <section className="md:pt-20 pt-7.5 px-10 relative ">
        <div className="flex gap-5 items-center">
          <img
            src={MeetIcon}
            alt="meet-icon"
            className="md:size-22.5 size-12.5"
          />
          <h2 className="md:text-5xl text-primary-black font-medium text-2xl">
            Meet your <em className="not-italic font-black">Mentor...</em>
          </h2>
        </div>
        <div className="flex md:flex-row flex-col gap-10 md:gap-17 justify-between">
          <div className="flex flex-col relative md:text-[25px] text-sm gap-5 text-justify md:w-[55vw] text-secondary-black font-medium pt-7.5 md:pt-19">
            <p>
              <span className="text-primary-red font-black md:text-[22px]">
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
      <section className="px-10 flex md:flex-row flex-col pt-4 gap-7.5 md:gap-17">
        {/* {for desktop view} */}
        <div className="md:inline-block bg-cover hidden bg-center">
          <img
            src={MeetCoverImg2}
            alt="Jeffrey's image"
            className="h-fit w-[650px]"
          />
        </div>
        <div className="flex relative flex-col md:text-[25px] gap-5 md:gap-12 md:w-[55vw] text-secondary-black font-medium pt-12 md:pt-19">
          <p className="text-justify">
            <span className="text-primary-red font-black uppercase md:text-[22px]">
              Asides his paid mentorship,&nbsp;
            </span>
            Jeffrey helps youths all over the world take charge of their
            finances by making hundreds of forex videos, courses, and webinars
            available for FREE on both his website and YouTube Channel.
          </p>
          <p className="text-justify">
            He is the founder of Firepips Trading Academy, Nigeria’s leading
            online forex and crypto trading academy, where he trains over one
            million beginners and advanced traders on how to trade profitably.{" "}
          </p>
          <div className="md:flex flex-col hidden gap-8 md:pt-40">
            <p className="text-primary-black text-base">
              Want to know more about Jeffrey and his accomplishments?
            </p>
            <div className=" w-[32.313rem] flex gap-5 text-base">
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

        {/* for mobile view */}
        <div className="inline-block bg-cover md:hidden bg-center">
          <img
            src={MeetCoverImg2}
            alt="Jeffrey's image"
            className="h-fit w-[650px]"
          />
        </div>
        <div className="flex flex-col md:hidden gap-8 md:pt-40">
          <p className="text-primary-black text-base md:font-bold font-black w-fit">
            Want to know more about Jeffrey and his accomplishments?
          </p>
          <div className="md:w-[32.313rem] flex gap-5 text-base">
            <CustomButton icon1={<img src={UpRightArrow} />}>
              <span className="text-[10px] md:text-base">
                Speak with a representative
              </span>
            </CustomButton>
            <div className="w-[28.125rem]">
              <CustomButton
                variant="outlined"
                icon1={<img src={UpRightArrowRed} />}
              >
                <span className="text-[10px] md:text-base">
                  Visit telegram group
                </span>
              </CustomButton>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-23  hidden md:flex px-10 flex-col gap-10 ">
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
          other trading system you've ever seen out there. I have perfected this
          strategy over the last seven years and used it to make over
          $10,000,000 in pure profit, it will save you time and help you trade
          SMART, not HARD!
        </p>
      </section>
    </div>
  );
}
