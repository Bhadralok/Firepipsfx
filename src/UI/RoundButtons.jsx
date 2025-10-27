export default function RoundButtons({
  icon,
  onClick,
  opacity = "opacity-40",
}) {
  return (
    <div>
      <button
        className={`${opacity} rounded-full md:opacity-100 shadow-[0_5px_20px_rgba(0,0,0,0.1)] md:size-[60px] size-10  flex items-center justify-center bg-white text-primary-red`}
        onClick={onClick}
      >
        <span>{icon}</span>
      </button>
    </div>
  );
}
