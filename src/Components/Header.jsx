import { useNavigate, useLocation } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import CustomButton from "../UI/CustomButton";
import Logo from "../assets/logo-dark.svg";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Plans", path: "/plans" },
    { name: "Blog", path: "/blog" },
    { name: "FAQs", path: "/faqs" },
    { name: "Lotsize Calculator", path: "/lotsize-calculator" },
  ];

  return (
    <div className="w-full flex items-center fixed bg-white z-100 shadow-lg justify-between px-10 py-4">
      <div className="pr-18">
        <img src={Logo} alt="Logo" />
      </div>
      <div>
        <ul className="flex gap-5 items-center">
          {navLinks.map((link) => (
            <li
              key={link.name}
              onClick={() => {
                navigate(link.path);
              }}
              className={`cursor-pointer  ${
                location.pathname === link.path
                  ? "text-primary-red font-bold text-base"
                  : "font-medium text-secondary-black text-sm"
              }`}
            >
              {link.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="">
        <CustomButton icon1={<FiArrowUpRight size={24} />}>
          Access learning dashboard
        </CustomButton>
      </div>
    </div>
  );
}
