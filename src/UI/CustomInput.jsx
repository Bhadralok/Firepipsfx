import { useState } from "react";
import Dropdown from "../UI/Dropdown";

export default function CustomInput({
  isOption = false,
  config,
  placeholder = "Enter your current account balance",
  header = "Account balance",
  description = "Enter your current account balance",
  items,
}) {
  const [style, setStyle] = useState("");

  function handleCheck(event) {
    const value = event.target.value.trim();
    if (value === "") {
      setStyle("outline-2 outline-secondary-black");
      console.log("it doesn't have value");
    } else {
      setStyle("outline-2 outline-primary-red");
      console.log("it does have value");
    }

    if (config.onChange) {
      config.onChange(event);
    }
  }

  return (
    <>
      {isOption ? (
        <div>
          {header && (
            <div className="flex flex-col md:gap-5 gap-3 w-full pb-5 md:pb-7.5">
              <h2 className="md:text-3xl text-[20px] w-full font-medium text-primary-black">
                {header}
              </h2>
              <p className="paragraph">{description} </p>
            </div>
          )}
          <Dropdown onChange={config?.onChange} items={items} />
        </div>
      ) : (
        <div className="w-full flex flex-col gap-3 md:gap-7.5 ">
          {header && (
            <div className="flex flex-col gap-3 md:gap-5">
              <h2 className="md:text-3xl text-[20px] font-medium text-primary-black">
                {header}
              </h2>
              <p className="paragraph">{description}</p>
            </div>
          )}
          <input
            {...config}
            onChange={handleCheck}
            placeholder={config?.placeholder ?? placeholder}
            className={`${style} w-full outline-2  placeholder:text-placeholder-gray inputs px-5 h-12.5 font-medium`}
          />
        </div>
      )}
    </>
  );
}
