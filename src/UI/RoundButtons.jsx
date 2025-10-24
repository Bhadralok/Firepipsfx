export default function RoundButtons({ icon, onClick }) {
  return (
    <div>
      <button
        className={`rounded-full md:opacity-100 opacity-40 shadow-xl md:size-[60px] size-10  flex items-center justify-center bg-secondary-red text-primary-red`}
        onClick={onClick}
      >
        <span>{icon}</span>
      </button>
    </div>
  );
}
