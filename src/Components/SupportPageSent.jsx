import sent from "../assets/sent.svg";
import CustomButton from "../UI/CustomButton";
import sentLine from "../assets/sentLine.svg";
import copy from "../assets/copy.svg";

export default function SupportPageSent({ onClick }) {
  const ticketNumber = 89328932998399;
  return (
    <div className="px-7.5 py-10 flex support-container flex-col items-center justify-center gap-7.5 text-center">
      <img src={sent} alt="" />
      <div className="flex flex-col">
        <h1>Your message has been sent!</h1>
        <p>Expect a response from us in the next 2 - 4 hours.</p>
      </div>
      <div className="w-fit">
        <CustomButton onClick={onClick}>Okay, thanks!</CustomButton>
      </div>
      <img src={sentLine} alt="" />
      <div className="flex flex-col items-center gap-3">
        <p>Your support ticket number</p>
        <span className="flex gap-1">
          <em className="not-italic text-sm font-black">{ticketNumber}</em>
          <img src={copy} alt="" />
        </span>
      </div>
    </div>
  );
}
