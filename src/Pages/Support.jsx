import { FiArrowUpRight } from "react-icons/fi";
import CustomButton from "../UI/CustomButton";
import { AiOutlinePlus } from "react-icons/ai";
import thirdCover from "../assets/Cover-img4.webp";
import Modal from "../Components/Modal";
import SupportPageForm from "../Components/SupportPageForm";
import { DataContext } from "../Context/DataContext";
import { useContext } from "react";
import SupportPageSent from "../Components/SupportPageSent";

export default function Support() {
  const images = [thirdCover];
  const { setHasData } = useContext(DataContext);

  return (
    <Modal>
      <div
        className="flex flex-col h-screen gap-7 md:bg-cover bg-cover bg-center bg-no-repeat pt-24 w-full items-center justify-center bg-gradient-to-b from-transparent to-[#1E0306]"
        style={{ backgroundImage: `url(${images[0]})` }}
      >
        <h1 className="md:text-5xl text-2xl font-medium text-white text-center">
          <em className="not-italic font-black ">Whatever</em>
          &nbsp;the issue is, we are <br /> here to&nbsp;
          <em className="not-italic font-black ">help!</em>
        </h1>
        <p className="text-white font-medium px-4 w-full leading-normal md:text-sm text-[12px] text-center md:w-[726px]">
          Create a{" "}
          <em className="font-black not-italic">support request ticket</em> to
          tell us the issue you are experiencing with our services or ask any
          question you have to gain clarity about our prices, schedules,
          curriculum e.t.c. We usually respond between 2 to 4 hours. You can
          also talk to our support team using our Whatsapp customer support
          platform.
        </p>
        <div className="flex gap-6 md:w-fit">
          <Modal.Trigger>
            <CustomButton
              icon2={<AiOutlinePlus size={20} />}
              onClick={() => setHasData(false)}
            >
              <span className="md:text-sm text-[10px] ">
                Create a support ticket
              </span>
            </CustomButton>
          </Modal.Trigger>
          <CustomButton
            variant="whiteOutline"
            icon1={<FiArrowUpRight size={20} />}
          >
            <span className="md:text-sm text-[10px] ">
              Talk to us on Whatsapp
            </span>
          </CustomButton>
        </div>
      </div>

      <Modal.Window>
        <SupportForm />
      </Modal.Window>
    </Modal>
  );
}

function SupportForm({ onCloseModal }) {
  const { hasData, setHasData } = useContext(DataContext);
  const handleSubmit = () => {
    setHasData(true);
    setTimeout(() => {
      setHasData(false);
    }, 5000);
  };

  // const handleClick = () => {
  //   console.log(hasData);
  // };
  return (
    <div className="md:max-w-6xl overflow-hidden">
      {hasData ? (
        <SupportPageSent onClick={onCloseModal} />
      ) : (
        <SupportPageForm onClick={onCloseModal} onSubmit={handleSubmit} />
      )}
    </div>
  );
}
