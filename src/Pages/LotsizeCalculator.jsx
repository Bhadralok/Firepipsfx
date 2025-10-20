import { useEffect, useState } from "react";
import calculatorLine from "../assets/calculatorLine.svg";
import CustomButton from "../UI/CustomButton";
import CustomInput from "../UI/CustomInput";
import Results from "../UI/Results";
import calculateLineRed from "../assets/calculateLineRed.svg";

export default function LotsizeCalculator() {
  const [isCalculated, setIsCalculated] = useState(false);
  const amountAtRisk = 25899.12;
  const [isValid, setIsValid] = useState(false);
  const [values, setValues] = useState({
    currency: "Default - USD",
    instrument: "Default - USD",
    balance: "",
    stopLoss: "",
    risk: "",
  });

  const handleSetValues = (key, value) => {
    setValues((c) => ({ ...c, [key]: value }));
  };

  useEffect(() => {
    const valid = Object.values(values).every(
      (value) =>  value !== ""
    );
    if (valid) {
      setIsValid(true);
    }
  }, [values]);


  return (
    <div className="h-full pt-24 px-10 flex flex-col gap-10">
      <div className="pt-20 flex flex-col gap-7.5">
        <h1 className="text-primary-black font-black text-5xl">
          Lotsize Calculator
        </h1>
        <p className="paragraph">
          Enter the following information to accurately calculate your lotsize
        </p>
        <img src={calculatorLine} alt="" />
      </div>
      <div className="w-full">
        <div className="flex flex-col px-48 w-full items-center justify-center">
          <form className="flex flex-col w-full items-center gap-15">
            <div className="w-full">
              <CustomInput
                isOption
                config={{
                  onChange: (e) => handleSetValues("currency", e),
                }}
                header="Account currency"
                description="Select your account currency"
              />
            </div>
            <div className="w-full flex gap-10">
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
            <div className="w-full flex gap-10">
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
            <div className="w-[146px] pb-20 flex items-center justify-center">
              <CustomButton
                active={isValid}
                onClick={() => setIsCalculated(true)}
              >
                <span className="text-sm">Calculate lotsize</span>
              </CustomButton>
            </div>
          </form>
        </div>
      </div>
      {isCalculated && (
        <div className="w-full px-48">
          <img src={calculatorLine} alt="" className="pb-10 w-full" />
          <div className="flex flex-col gap-10">
            <div className=" flex flex-col gap-5">
              <h2 className="text-3xl w-full font-medium text-primary-black">
                Results
              </h2>
              <p className="paragraph">
                This is a breakdown of your lotsize based on the information you
                have entered...
              </p>
            </div>
            <div className="flex justify-between">
              <Results
                description="Amount at risk"
                price
                units={amountAtRisk}
              />
              <img src={calculateLineRed} alt="" />
              <Results
                description="Position size - units"
                units={amountAtRisk}
              />
              <img src={calculateLineRed} alt="" />
              <Results description="Standard Lots" units={amountAtRisk} />
              <img src={calculateLineRed} alt="" />
              <Results description="Mini Lots" units={amountAtRisk} />
              <img src={calculateLineRed} alt="" />
              <Results description="Micro Lots" units={amountAtRisk} />
            </div>
            <div className="w-[8.625rem] pb-20">
              <CustomButton active onClick={() => setIsCalculated(false)}>
                <span className="text-sm">Clear Results</span>
              </CustomButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
