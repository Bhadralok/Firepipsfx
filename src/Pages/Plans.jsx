import Curriculum from "../Components/Curriculum";
import PaymentLogic from "../Components/PaymentLogic";
import LineButton from "../UI/LineButton";

export default function Plans() {
  return (
    <div className="pt-24 px-10">
      <h1 className=" font-black text-5xl pt-15 text-primary-black">
        Mentorship Plans
      </h1>
      <p className="pt-7.5 text-sm text-secondary-blackee">
        We offer online and physical mentorship classes in our branches at Lagos
        and Delta state Nigeria. You can pay for our online mentorship by
        choosing a plan below to get started. If you would prefer our physical
        classes, you can start the enrollment process by clicking the button
        below.
      </p>
      <PaymentLogic />
      <div className="pt-15 pb-20">
        <h1 className="font-black text-5xl pb-7.5">Our learning curriculum</h1>
        <Curriculum />
      </div>
    </div>
  );
}
