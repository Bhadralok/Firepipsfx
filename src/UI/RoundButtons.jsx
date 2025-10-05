export default function RoundButtons({ icon, onClick, isRed = true }) {
  let style;
  if (isRed) {
    style = "bg-white text-primary-red";
  }
  
  return (
    <div>
      <button
        className={` ${style} rounded-full shadow-xl size-[60px] flex items-center justify-center bg-secondary-red text-primary-red`}
        onClick={onClick}
      >
        <span>{icon}</span>
      </button>
    </div>
  );
}
