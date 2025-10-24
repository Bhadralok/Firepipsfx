// import { useState } from "react";
// import megaphone from "../assets/megaphone.svg";
// import CustomButton from "../UI/CustomButton";
// import CustomInput from "../UI/CustomInput";
// import logoWhite from "../assets/logoWhite.svg";
// import telegram from "../assets/telegram.svg";
// import phone from "../assets/phone.svg";
// import tiktok from "../assets/tiktok.svg";
// import instagram from "../assets/instagram.svg";
// import facebook from "../assets/facebook.svg";
// import twitter from "../assets/twitter.svg";
// import upRightArrow from "../assets/upRightArrow.svg";

// export default function Footer() {
//   const [email, setEmail] = useState("");
//   const [isActive, setIsActive] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const year = new Date().getFullYear();

//   const handleChange = (e) => {
//     const value = e.target.value;
//     const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
//     setIsActive(isValidEmail);
//     setEmail(value);
//   };

//   const handleClick = () => {
//     if (!isActive) return;
//     setLoading(true);
//     setTimeout(() => setLoading(false), 2000);
//   };

//   return (
//     <footer className="w-full bg-primary-black text-white px-6 md:px-10 py-12 flex flex-col gap-10">
//       {/* TOP SECTION */}

//       <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-20">
//         {/* LEFT */}
//         <div className="w-full md:w-1/3 flex flex-col gap-5">
//           <img src={megaphone} alt="" className="w-8" />
//           <h2 className="font-bold text-3xl md:text-5xl">
//             Let’s keep you <span className="text-primary-red">informed!</span>
//           </h2>
//           <p className="text-sm text-gray-300">
//             Subscribe to our newsletter to receive updates from FirepipsFX Academy
//           </p>
//           <CustomInput
//             placeholder="Enter your email"
//             value={email}
//             config={{ onChange: handleChange }}
//           />
//           <div className="w-[220px]">
//             <CustomButton
//               onClick={handleClick}
//               isLoading={loading}
//               active={isActive}
//               isLoadingText="Subscribing..."
//             >
//               Subscribe
//             </CustomButton>
//           </div>
//         </div>

//         {/* CENTER */}
//         <div className="w-full md:w-1/3 flex flex-col gap-5 text-sm text-gray-300">
//           <h4 className="text-white font-bold text-base">FirepipsFX Academy</h4>
//           <ul className="flex flex-col gap-2">
//             <li>About</li>
//             <li>Mentorship Plans</li>
//             <li>Blog</li>
//             <li>FAQs</li>
//             <li>Support</li>
//             <li>Our Locations</li>
//             <li>Access learning dashboard</li>
//             <li>Back to the top</li>
//           </ul>
//         </div>

//         {/* RIGHT */}
//         <div className="w-full md:w-1/3 flex flex-col gap-6 text-sm text-gray-300">
//           <div>
//             <img src={logoWhite} alt="Logo" className="w-28" />
//           </div>
//           <div>
//             <h4 className="font-bold text-white">Firepips Company Limited</h4>
//             <p>9 Mark Odion Avenue, Owutu Agric, Ikorodu, Lagos, Nigeria</p>
//             <p>+2347003473747</p>
//           </div>
//           <div>
//             <p className="font-bold">Connect with us</p>
//             <div className="flex gap-4 mt-2">
//               <img src={telegram} alt="telegram" />
//               <img src={phone} alt="phone" />
//               <img src={tiktok} alt="tiktok" />
//               <img src={instagram} alt="instagram" />
//               <img src={facebook} alt="facebook" />
//               <img src={twitter} alt="twitter" />
//             </div>
//           </div>
//           <p className="font-bold text-white flex items-center gap-2">
//             Terms and conditions <img src={upRightArrow} alt="" />
//           </p>
//           <p className="text-xs text-gray-400">
//             &copy; {year} Firepips Company Limited. All Rights Reserved
//           </p>
//         </div>
//       </div>

//       {/* DISCLAIMER */}
//       <div className="border-t border-gray-700 pt-5 text-[10px] text-gray-400 leading-relaxed text-justify">
//         <strong className="uppercase">Disclaimer:</strong> This website is for educational purposes only...
//       </div>
//     </footer>
//   );
// }
