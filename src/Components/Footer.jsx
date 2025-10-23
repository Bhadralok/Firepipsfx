import { useState } from "react";
import megaphone from "../assets/megaphone.svg";
import CustomButton from "../UI/CustomButton";
import CustomInput from "../UI/CustomInput";
import FooterLine from "../assets/FooterLine.svg";
import { LuCircleChevronDown, LuCircleChevronUp } from "react-icons/lu";
import logoWhite from "../assets/logoWhite.svg";
import telegram from "../assets/telegram.svg";
import phone from "../assets/phone.svg";
import tiktok from "../assets/tiktok.svg";
import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import upRightArrow from "../assets/upRightArrow.svg";
import footerDivider from "../assets/footerDivider.svg";
import CustomDropdown from "../UI/CustomDropdown";

export default function Footer() {
  // const [isLoading, setIsLoading] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const [email, setEmail] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  //   const handleClick = () => {
  //     setIsLoading(true);
  //     setTimeout(() => {
  //       setIsLoading(false);
  //     }, 2000);
  //   };

  const year = new Date().getFullYear();

  const handleChange = (e) => {
    const value = e.target.value;
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    if (isValidEmail === true) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
    setEmail(value);
    console.log(isActive);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleClick1 = () => {
    if (!isActive) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    console.log("Subscribed with:", email);
  };
  return (
    <footer className="h-fit w-full px-10 pb-12.5 pt-12.5 flex flex-col gap-7.5  text-white bg-primary-black">
      <div className="flex gap-12.5  items-center justify-between">
        <div className="w-[450px] flex flex-col gap-7.5">
          <div>
            <img src={megaphone} alt="" />
          </div>
          <p className="font-medium text-5xl leading-normal">
            Let’s keep you{" "}
            <em className="font-black text-5xl not-italic">informed!</em>
          </p>
          <p className="font-medium text-sm">
            Subscribe to our newsletter to receive updates from FirepipsFX
            academy
          </p>
          <div>
            <CustomInput
              placeholder="Enter your email to continue"
              value={email}
              isOption={false}
              config={{
                onChange: handleChange,
              }}
            />
          </div>
          <div className="w-[230px]">
            <CustomButton
              variant="login"
              onClick={handleClick1}
              isLoading={loading}
              isSent={false}
              active={isActive}
              isLoadingText="Subscribing..."
            >
              <span className="text-sm">Subscribe to our newsletter</span>
            </CustomButton>
          </div>
        </div>
        <img src={FooterLine} />
        <div className="w-[450px] flex flex-col">
          <ul className="text-placeholder-gray font-medium text-sm flex flex-col gap-6">
            <li>
              <h4 className="font-bold text-white text-base ">
                FirepipsFX Academy
              </h4>
            </li>
            <li>About</li>
            <li>MentorShip Plans</li>
            <li>Blogs</li>
            <li>FAQs</li>
            <li>Support</li>
            <li
              onClick={handleToggle}
              className={`${
                isToggled === true && "text-primary-red w-fit"
              } flex gap-1 items-center w-fit`}
            >
              Our Locations{" "}
              <span className="relative">
                {isToggled ? (
                  <LuCircleChevronUp size={18} color="#ed3c52" />
                ) : (
                  <LuCircleChevronDown size={18} color="#c4c4c4" />
                )}
                <CustomDropdown
                  isOpen={isToggled}
                  onClose={() => setIsToggled(false)}
                  items={profileItems}
                  style="py-4 px-1 top-7"
                  position="-right-13"
                />
              </span>
            </li>
            <li>Access learning dashboard</li>
            <li onClick={scrollToTop}>Back to the top</li>
          </ul>
        </div>
        <img src={FooterLine} />
        <div className="w-[450px] flex flex-col">
          <div className="flex flex-col text-right gap-10 items-end">
            <div>
              <img src={logoWhite} alt="" />
            </div>
            <div className="text-sm font-medium text-placeholder-gray flex flex-col gap-5">
              <h4 className="font-black text-white">
                Firepips Company Limited
              </h4>
              <p>
                9 Mark Odion Avenue, Owutu Agric, Ikorodu, Lagos, 104101,
                Nigeria
              </p>
              <p>+2347003473747</p>
            </div>
            <div className="flex flex-col gap-5">
              <p className="font-bold">Connect with us on social media</p>
              <div className="flex gap-7.5 items-center">
                <img src={telegram} alt="" />
                <img src={phone} alt="" />
                <img src={tiktok} alt="" />
                <img src={instagram} alt="" />
                <img src={facebook} alt="" />
                <img src={twitter} alt="" />
              </div>
            </div>
            <div>
              <p className="font-bold text-white flex items-center gap-2">
                Terms and conditions{" "}
                <span>
                  <img src={upRightArrow} alt="" />
                </span>
              </p>
            </div>
            <div>
              <p className="text-placeholder-gray">
                &copy; {year} Firepips Company Limited. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <img src={footerDivider} alt="" className="w-full" />
      </div>
      <div>
        <p className="text-placeholder-gray text-[10px] text-justify">
          <em className="not-italic font-black uppercase">Disclaimer:</em> This
          legal disclaimer applies to the use of Firepipsfx.com and its related
          services. The information contained on this website is for purposes of
          education only. We are not authorized as a financial advisor but only
          as a training organization and so by viewing any material or using the
          information within this site you agree that this is general education
          material and you will not hold any person or entity responsible for
          loss or damages resulting from the content or general advice provided
          here by Firepips Forex Academy. Decisions based on information
          contained herein are the sole responsibility of the visitor. Trading
          foreign exchange on margin carries a high level of risk, and may not
          be suitable for all investors. The high degree of leverage can work
          against you as well as for you. Before deciding to trade foreign
          exchange you should carefully consider your investment objectives,
          level of experience, and risk appetite. The possibility exists that
          you could sustain a loss of some or all of your initial investment and
          therefore you should not invest money that you cannot afford to lose.
          You should be aware of all the risks associated with foreign exchange
          trading, and seek advice from an independent financial advisor if you
          have any doubts. <br /> Once again, The information contained on this
          website is for general information and educational purposes only.
          <br />
          <br />
          <em className="uppercase not-italic font-black">refund policy: </em>
          Refund of mentorship fee is only valid within one week of
          subscription. Refund will not be processed if request is made after
          the first week that is after five (5) working days of subscription.
        </p>
      </div>
    </footer>
  );
}
const profileItems = [
  { label: "Lagos Island - Lekki" },
  { label: "Lagos Mainland - Ikeja" },
  { label: "Delta - Asaba Branch" },
];
// const navLinks = [
//   { name: "About", path: "/about" },
//   { name: "Mentorship Plans", path: "/plans" },
//   { name: "Blog", path: "/blog" },
//   { name: "FAQs", path: "/faqs" },
//   { name: "Support", path: "/faqs" },
//   { name: "Access Learning Dashboard", path: "/lotsize-calculator" },
// ];

// {
//   navLinks.map((link) => (
//     <li
//       key={link.name}
//       onClick={() => navigate(link.path)}
//       className={`cursor-pointer  ${
//         location.pathname === link.path
//           ? "text-primary-red font-bold text-base"
//           : "font-medium text-secondary-black text-sm"
//       }`}
//     >
//       {link.name}
//     </li>
//   ));
// }
