export default function RoundButtons({ icon, onClick }) {
  return (
    <div>
      <button
        className="rounded-full size-[60px] flex items-center justify-center bg-secondary-red text-primary-red"
        onClick={onClick}
      >
        <span>{icon}</span>
      </button>
    </div>
  );
}
