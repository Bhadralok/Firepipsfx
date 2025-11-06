import supportIcon from "../assets/supportIcon.svg";
import CustomButton from "../UI/CustomButton";
import CustomInput from "../UI/CustomInput";
import TextArea from "../UI/TextArea";
import plane from "../assets/plane.svg";
import { IoMdClose } from "react-icons/io";
import { useContext, useEffect, useState } from "react";
import loader from "../assets/Loader.svg";
import { DataContext } from "../Context/DataContext";

export default function SupportPageForm({ onClick, onSubmit }) {
  const [isValid, setIsValid] = useState(false);
  const { hasData } = useContext(DataContext);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    category: "Select a category",
    message: "",
  });

  const handleChange = (key, value) => {
    setForm((c) => ({ ...c, [key]: value }));
  };

  useEffect(() => {
    const valid = Object.values(form).every((value) => value !== "");
    if (valid) {
      setIsValid(true);
    }
  }, [form]);

  console.log(isValid);

  console.log(form);

  return (
    <div className="flex flex-col md:w-[63.375rem] md:gap-10 items-center text-center gap-6 py-10 px-4 md:p-10">
      <div className="">
        <div className="flex flex-col items-center">
          <img src={supportIcon} alt="" className="pb-7.5" />
        </div>
        <div className="flex flex-col gap-6 md:gap-5">
          <h2 className="font-black text-2xl md:text-3xl leading-0">
            Create a support request ticket
          </h2>
          <p className="paragraph">
            Please fill the form below to tell us how we can help your
            experience with us more wonderful.
          </p>
        </div>
      </div>
      <form action="" className="flex md:flex-row flex-col gap-7.5 w-full">
        <div className="w-full container flex flex-col gap-5">
          <div className="">
            <label htmlFor="">Full Name</label>
            <CustomInput
              header={false}
              description={false}
              config={{
                placeholder: "Enter your full name e.g Jeffery Benson",
                value: form.name,
                onChange: (e) => handleChange("name", e.target.value),
              }}
            />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <CustomInput
              header={false}
              description={false}
              config={{
                placeholder: "Enter your email e.g email@example.com",
                value: form.email,
                type: "email",
                onChange: (e) => handleChange("email", e.target.value),
              }}
            />
          </div>
          <div>
            <label htmlFor="">Phone number</label>
            <CustomInput
              header={false}
              description={false}
              config={{
                type: "number",
                placeholder: "Start with country code e.g +234",
                value: form["phone"],
                onChange: (e) => {
                  const value = e.target.value;
                  if (value.length <= 13) handleChange("phone", value);
                },
              }}
            />
          </div>
          <div>
            <label htmlFor="">Category</label>
            <CustomInput
              header={false}
              isOption
              description={false}
              config={{
                onChange: (e) => handleChange("category", e),
              }}
              items={categories}
            />
          </div>
        </div>
        <div className="w-full">
          <TextArea
            value={form.message}
            onChange={(e) => handleChange("message", e.target.value)}
          />
        </div>
      </form>
      <div className="flex gap-6 w-full items-center justify-center">
        {hasData ? (
          <div className="w-fit flex justify-end items-end">
            <CustomButton
              icon2={<img src={loader} className="Loader" />}
              active={false}
            >
              <span className="text-sm">Sending message...</span>
            </CustomButton>
          </div>
        ) : (
          <>
            <div className="max-w-40 flex justify-end items-end">
              <CustomButton
                icon2={<img src={plane} />}
                active={isValid}
                onClick={onSubmit}
              >
                <span className="text-sm">Send message</span>
              </CustomButton>
            </div>
            <div className="w-fit ">
              <CustomButton
                icon2={<IoMdClose size={20} color="#1C1B1F" />}
                variant="outlinedBlack"
                onClick={onClick}
              >
                <span className="text-sm">Cancel request</span>
              </CustomButton>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

const categories = [
  "Select a category",
  "Account Issues",
  "Payment Issues",
  "Course Access Issues",
  "Technical Errors",
  "Subscription/Plan Issues",
  "Content-Related Feedback",
  "General Inquiries",
  "Compliance and Security",
];
