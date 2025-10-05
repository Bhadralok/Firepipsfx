import arrowDown from "../assets/arrowDown.svg";
export default function ReviewNav() {
  return (
    <div className="flex items-center gap-1.5">
      <p className="text-primary-red font-bold text-sm">Continue reading</p>
      <img src={arrowDown} alt="" />
    </div>
  );
}
