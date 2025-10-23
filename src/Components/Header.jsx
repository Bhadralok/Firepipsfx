import { useNavigate, useLocation, NavLink } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import CustomButton from "../UI/CustomButton";
import Logo from "../assets/logo-dark.svg";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", routeToComponent: "/#aboutSection" },
    { name: "Plans", path: "/plans" },
    { name: "Blog", path: "/blog" },
    { name: "FAQs", path: "/faqs" },
    { name: "Support", path: "/support" },
    { name: "Lotsize Calculator", path: "/lotsize-calculator" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <div className="w-full flex items-center fixed bg-white z-100 shadow-lg justify-between px-10 py-4">
      <div className="pr-18">
        <img src={Logo} alt="Logo" onClick={() => navigate("/")} />
      </div>
      <div>
        <ul className="flex gap-5 items-center">
          {navLinks.map((link) => {
            if (link.routeToComponent)
              return (
                <a
                  key={link.routeToComponent}
                  href={link.routeToComponent}
                  className={`cursor-pointer  ${
                    location.pathname === link.path
                      ? "text-primary-red font-bold text-base"
                      : "font-medium text-secondary-black text-sm"
                  }`}
                >
                  {link.name}
                </a>
              );

            return (
              <NavLink
                to={link.path}
                key={link.name}
                onClick={scrollToTop}
                className={`cursor-pointer  ${
                  location.pathname === link.path
                    ? "text-primary-red font-bold text-base"
                    : "font-medium text-secondary-black text-sm"
                }`}
              >
                {link.name}
              </NavLink>
            );
          })}
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
