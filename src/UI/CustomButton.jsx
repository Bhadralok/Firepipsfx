import Loader from "../assets/Loader.svg";
import sentIcon from "../assets/sentIcon.svg";

export default function CustomButton({
  icon1,
  icon2,
  children,
  active = true,
  type = "button",
  variant = "login",
  isLoading,
  isLoadingText = "Logging in...",
  onClick,
  isSent,
  ...props
}) {
  const styleChange = () => {
    if (isLoading) {
      return "bg-placeholder-gray text-white cursor-not-allowed";
    } else {
      return " bg-primary-red cursor-pointer text-white hover:bg-primary-red hover:text-white";
    }
  };
  const styles = {
    login: styleChange(),
    secondary: "bg-secondary-red text-primary-red cursor-pointer",
    outlined: `border-2 border-primary-red cursor-pointer text-primary-red`,
    outlinedBlack: `border-2 border-secondary-black cursor-pointer text-secondary-black`,
    whiteOutline: "outline-2 outline-white border-none h-fit cursor-pointer text-white",
  };

  const baseClasses =
    "flex items-center justify-center gap-2 py-4 w-full px-5 rounded-tl-3xl rounded-bl-3xl rounded-tr-3xl font-bold transition-colors duration-300";

  const activeClasses = styles[variant];

  const inactiveClasses = "bg-placeholder-gray text-white cursor-not-allowed";

  return (
    <button
      type={type}
      className={`${baseClasses} ${active ? activeClasses : inactiveClasses}`}
      disabled={!active}
      {...props}
      onClick={onClick}
    >
      {isLoading && <img src={Loader} className="Loader" alt="Loading" />}
      {isSent && <img src={sentIcon} alt="Loading" />}
      {icon2 && <span>{icon2}</span>}
      {isLoading ? `${isLoadingText}` : children}
      {icon1 && <span>{icon1}</span>}
    </button>
  );
}
