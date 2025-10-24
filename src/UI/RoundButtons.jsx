export default function RoundButtons({ icon, onClick }) {
  return (
    <div>
      <button
        className={`rounded-full md:opacity-100 opacity-40 shadow-[0_5px_20px_rgba(0,0,0,0.1)] md:size-[60px] size-10  flex items-center justify-center bg-white text-primary-red`}
        onClick={onClick}
      >
        <span>{icon}</span>
      </button>
    </div>
  );
}
