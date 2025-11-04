import Curriculum from "../Components/Curriculum";
import PaymentLogic from "../Components/PaymentLogic";
import LineButton from "../UI/LineButton";

export default function Plans() {
  return (
    <div className="md:pt-24 pt-10 md:px-10 px-4">
      <h1 className=" font-black text-2xl md:text-5xl pt-15 text-primary-black">
        Mentorship Plans
      </h1>
      <p className="md:pt-7.5 pt-5 text-[12px] md:text-sm text-secondary-black">
        We offer online and physical mentorship classes in our branches at Lagos
        and Delta state Nigeria. You can pay for our online mentorship by
        choosing a plan below to get started. If you would prefer our physical
        classes, you can start the enrollment process by clicking the button
        below.
      </p>
      <PaymentLogic />
      <div className="md:pt-15 pt-10 pb-20 ">
        <h1 className="font-black text-2xl md:text-5xl md:pb-7.5 pb-5">
          Our learning curriculum
        </h1>
        <Curriculum />
      </div>
    </div>
  );
}
