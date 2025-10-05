import xaider from "../assets/xaider.svg";
import reviewLine from "../assets/reviewLine.svg";
import ReviewNav from "./reviewNav";

export default function ReviewCard() {
  return (
    <div className="px-5 pt-5 pb-10 flex flex-shrink-0 flex-col gap-7 shadow-xl w-[320px] rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl">
      <div className="flex items-center gap-2.5">
        <div className="overflow-hidden rounded-full">
          <img src={xaider} alt="" />
        </div>
        <div>
          <p className="font-bold text-primary-black ">Isaac_io5</p>
          <p className="font-medium text-sm text-secondary-black ">
            Trading for 2 years now
          </p>
        </div>
      </div>
      <img src={reviewLine} alt="" />
      <div>
        <p className="font-black text-primary-black text-xl">
          A great value for money!
        </p>
      </div>
      <div className="">
        <p className="text-secondary-black font-medium text-sm">
          I enrolled into FirePips Academy with minimal knowledge of Forex
          trading and I can boldly say that I have learnt a lot. The remarkable
          thing is that I have also been able to learn about life from a
          different
        </p>
        <div className="pt-4">
          <ReviewNav />
        </div>
      </div>
    </div>
  );
}
