import { FiArrowUpRight } from "react-icons/fi";
import CustomButton from "../UI/CustomButton";
import { AiOutlinePlus } from "react-icons/ai";
import thirdCover from "../assets/Cover-img4.webp";
import Modal from "../Components/Modal";

export default function Support() {
  const images = [thirdCover];

  return (
    <Modal>
      <div
        className="flex flex-col h-screen gap-7 bg-cover pt-24 w-full items-center justify-center bg-gradient-to-b from-transparent to-[#1E0306]"
        style={{ backgroundImage: `url(${images[0]})` }}
      >
        <h1 className="text-5xl font-medium text-white text-center">
          <em className="not-italic font-black ">Whatever</em>
          &nbsp;the issue is, we are <br /> here to&nbsp;
          <em className="not-italic font-black ">help!</em>
        </h1>
        <p className="text-white font-medium leading-normal text-sm text-center w-[726px]">
          Create a{" "}
          <em className="font-black not-italic">support request ticket</em> to
          tell us the issue you are experiencing with our services or ask any
          question you have to gain clarity about our prices, schedules,
          curriculum e.t.c. We usually respond between 2 to 4 hours. You can
          also talk to our support team using our Whatsapp customer support
          platform.
        </p>
        <div className="flex gap-6 w-[35.75rem]">
          <Modal.Trigger>
            <CustomButton icon2={<AiOutlinePlus size={20} />}>
              Create a support ticket
            </CustomButton>
          </Modal.Trigger>
          <CustomButton
            variant="whiteOutline"
            icon1={<FiArrowUpRight size={20} />}
          >
            Talk to us on Whatsapp
          </CustomButton>
        </div>
      </div>

        <Modal.Window>
          <SupportForm />
        </Modal.Window>


    </Modal>
  );
}

function SupportForm({onCloseModal}){
    return <button onClick={onCloseModal}>Xz</button>
}
