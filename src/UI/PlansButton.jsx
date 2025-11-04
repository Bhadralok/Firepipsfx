import arrowRight from "../assets/arrowRight.svg";

export default function PlansButton({ isLeft, onClick }) {
  return (
    <>
      {isLeft ? (
        <button className="inputs bg-secondary-red p-5" onClick={onClick}>
          <img src={arrowRight} alt="" className="rotate-180" />
        </button>
      ) : (
        <button className="bg-primary-red inputs1 p-5 " onClick={onClick}>
          <img src={arrowRight} className=" " alt="" />
        </button>
      )}
    </>
  );
}
