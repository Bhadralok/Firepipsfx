import Dropdown from "../UI/Dropdown";

export default function CustomInput({
  isOption = false,
  config,

  placeholder = "Enter your current account balance",
  header = "Account balance",
  description = "Enter your current account balance",
}) {
  let style;

  if (config?.value !== "") {
    style = "outline-2 outline-primary-red";
  } else {
    style = "outline-2 outline-secondary-black";
  }

  return (
    <>
      {isOption ? (
        <div>
          <div className="flex flex-col gap-5 w-full pb-7.5">
            <h2 className="text-3xl w-full font-medium text-primary-black">
              {header}
            </h2>
            <p className="paragraph">{description}</p>
          </div>
          <Dropdown onChange={config?.onChange} />
        </div>
      ) : (
        <div className="w-full flex flex-col gap-7.5 ">
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl font-medium text-primary-black">
              {header}
            </h2>
            <p className="paragraph">{description}</p>
          </div>
          <input
            {...config}
            placeholder={config?.placeholder ?? placeholder}
            className={`${style} w-full border-none placeholder:text-placeholder-gray inputs px-5 h-12.5 font-medium`}
          />
        </div>
      )}
    </>
  );
}
