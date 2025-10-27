import { useState } from "react";
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import { Menu, X } from "lucide-react";
import CustomButton from "../UI/CustomButton";
import Logo from "../assets/logo-dark.svg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
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

  const scrollToTop = () => window.scrollTo({ top: 0 });

  return (
    <header className="fixed top-0 left-0 md:px-0 w-full z-50 glass-header shadow-lg">
      <div className="flex items-center justify-between px-6 md:px-10 py-4">
        <img
          src={Logo}
          alt="Logo"
          onClick={() => navigate("/")}
          className="cursor-pointer w-32"
        />

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            const linkClass = isActive
              ? "text-primary-red font-bold text-base"
              : "font-medium text-secondary-black text-sm";

            if (link.routeToComponent)
              return (
                <a
                  key={link.routeToComponent}
                  href={link.routeToComponent}
                  className={`cursor-pointer ${linkClass}`}
                >
                  {link.name}
                </a>
              );

            return (
              <NavLink
                to={link.path}
                key={link.name}
                onClick={scrollToTop}
                className={`cursor-pointer ${linkClass}`}
              >
                {link.name}
              </NavLink>
            );
          })}
        </ul>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <CustomButton icon1={<FiArrowUpRight size={24} />}>
            Access learning dashboard
          </CustomButton>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex items-center justify-center"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <ul className="flex flex-col gap-4 p-6 font-semibold">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path || link.routeToComponent}
                onClick={() => {
                  setMenuOpen(false);
                  scrollToTop();
                }}
                className="text-secondary-black hover:text-primary-red"
              >
                {link.name}
              </NavLink>
            ))}
          </ul>

          <div className="px-6 pb-6">
            <CustomButton icon1={<FiArrowUpRight size={20} />}>
              Access learning dashboard
            </CustomButton>
          </div>
        </div>
      )}
    </header>
  );
}
