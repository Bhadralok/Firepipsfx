import { useEffect, useState } from "react";
import calculatorLine from "../assets/calculatorLine.svg";
import CustomButton from "../UI/CustomButton";
import CustomInput from "../UI/CustomInput";
import Results from "../UI/Results";
import calculateLineRed from "../assets/calculateLineRed.svg";
import blogRedLine from "../assets/blogRedLine.svg";

export default function LotsizeCalculator() {
  const [isCalculated, setIsCalculated] = useState(false);
  const amountAtRisk = 25899.12;
  const [isValid, setIsValid] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [valueData, setValueData] = useState("");
  const [currentValue, setCurrentValue] = useState(null);
  const [values, setValues] = useState({
    currency: "Default - USD",
    instrument: "Default - USD",
    asking: "",
    balance: "",
    stopLoss: "",
    risk: "",
  });
  const [currencyClicked, setCurrencyClicked] = useState(false);

  const handleSetValues = (key, value) => {
    setValues((c) => ({ ...c, [key]: value }));

    if (key === "instrument") {
      const currency = value.split(" ")[0];
      setSelectedValue(currency);
      setCurrentValue(currency);
      setCurrencyClicked(true);
      setValueData(value);
    }
  };

  useEffect(() => {
    const valid = Object.values(values).every((value) => value !== "");
    if (valid) {
      setIsValid(true);
    }
  }, [values]);

  console.log("Default?", valueData);

  return (
    <div className="h-full w-full md:pt-24 pt-10 px-5 md:px-10 flex flex-col gap-10">
      <div className="pt-20 flex flex-col gap-4 md:gap-7.5">
        <h1 className="text-primary-black font-black text-2xl md:text-5xl">
          Lotsize Calculator
        </h1>
        <p className="paragraph">
          Enter the following information to accurately calculate your lotsize
        </p>
        <img src={calculatorLine} alt="" className="hidden md:block" />
        <img src={blogRedLine} alt="" className="md:hidden w-full pt-7.5" />
      </div>
      <div className="w-full">
        <div className="flex flex-col md:px-48 w-full items-center justify-center">
          <form className="flex flex-col w-full items-center gap-6 md:gap-15">
            <div className="w-full">
              <CustomInput
                isOption
                config={{
                  onClick: (e) => handleSetValues("currency", e),
                }}
                header={`Account currency`}
                description="Select your account currency"
              />
            </div>
            {currencyClicked && valueData !== "Default - USD" && (
              <CustomInput
                config={{
                  value: values["asking"],
                  onChange: (e) => handleSetValues("asking", e.target.value),
                  type: "number",
                  pattern: "^[0-9]*$",
                }}
                header={`Asking price - ${currentValue}/USD`}
                description={`Enter the current asking price for ${currentValue}/USD`}
              />
            )}
            <div className="w-full flex md:flex-row flex-col gap-6 md:gap-10">
              <div className="w-full">
                <CustomInput
                  config={{
                    onChange: (e) => handleSetValues("instrument", e),
                  }}
                  header="Trading instrument"
                  description="Select an instrument"
                  isOption
                />
              </div>
              <CustomInput
                config={{
                  value: values["balance"],
                  onChange: (e) => handleSetValues("balance", e.target.value),
                }}
              />
            </div>
            <div className="w-full flex md:flex-row flex-col gap-5 md:gap-10">
              <CustomInput
                config={{
                  value: values["risk"],
                  onChange: (e) => handleSetValues("risk", e.target.value),
                }}
                header="Risk percentage"
                description="Enter the amount of risk"
              />
              <CustomInput
                config={{
                  value: values["stopLoss"],
                  type: "number",
                  pattern: "^[0-9]*$",
                  onChange: (e) => handleSetValues("stopLoss", e.target.value),
                }}
                header="Stoploss - Points"
                description="Enter the amount of stoploss"
              />
            </div>
            <div
              className={`${
                isCalculated ? "" : "pb-20"
              } md:w-[146px] w-full flex items-center md:justify-center`}
            >
              <div>
                <CustomButton
                  active={isValid}
                  onClick={() => setIsCalculated(true)}
                >
                  <span className="text-sm">Calculate lotsize</span>
                </CustomButton>
              </div>
            </div>
          </form>
        </div>
      </div>
      {isCalculated && (
        <div className="w-full md:px-48">
          <div className="md:pb-10 hidden md:block w-full">
            <img
              src={calculatorLine}
              alt=""
              className="hidden md:block w-full"
            />
          </div>
          <div className="pb-7.5 md:hidden">
            <img src={blogRedLine} alt="" className="md:hidden w-full" />
          </div>
          <div className="flex flex-col gap-7.5 md:gap-10">
            <div className=" flex flex-col gap-3 md:gap-5">
              <h2 className="md:text-3xl text-[20px] w-full font-medium text-primary-black">
                Results
              </h2>
              <p className="paragraph">
                This is a breakdown of your lotsize based on the information you
                have entered...
              </p>
            </div>
            <div className="flex md:flex-row flex-col md:gap-0 gap-4 justify-between">
              <Results
                description="Amount at risk"
                price
                units={amountAtRisk}
              />
              <img src={calculateLineRed} alt="" className="hidden md:block" />
              <img src={blogRedLine} alt="" className="md:hidden" />
              <Results
                description="Position size - units"
                units={amountAtRisk}
              />
              <img src={calculateLineRed} alt="" className="hidden md:block" />
              <img src={blogRedLine} alt="" className="md:hidden" />

              <Results description="Standard Lots" units={amountAtRisk} />
              <img src={calculateLineRed} alt="" className="hidden md:block" />
              <img src={blogRedLine} alt="" className="md:hidden" />

              <Results description="Mini Lots" units={amountAtRisk} />
              <img src={calculateLineRed} alt="" className="hidden md:block" />
              <img src={blogRedLine} alt="" className="md:hidden" />

              <Results description="Micro Lots" units={amountAtRisk} />
            </div>
            <div className="w-[8.625rem] pb-20">
              <CustomButton active onClick={() => setIsCalculated(false)}>
                <span className="text-sm">Clear results</span>
              </CustomButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const items = [
  "Default - USD",
  "NGN - Nigerian Naira",
  "GBP - British Pounds",
  "ZAR",
];

console.log(items);
