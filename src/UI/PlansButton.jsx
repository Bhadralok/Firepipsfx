import arrowRight from "../assets/arrowRight.svg";

export default function PlansButton({ isLeft }) {
  return (
    <>
      {isLeft ? (
        <button className="inputs bg-secondary-red p-5">
          <img src={arrowRight} alt="" className="rotate-180" />
        </button>
      ) : (
        <button className="bg-primary-red inputs1 p-5 ">
          <img src={arrowRight} className=" " alt="" />
        </button>
      )}
    </>
  );
}
