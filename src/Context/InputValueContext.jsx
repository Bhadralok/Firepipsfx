import { createContext, useState } from "react";

export const inputValues = createContext();

export default function HasInputValue({ children }) {
  const [inputValue, setInputValue] = useState("");
  return (
    <ExchangeContext.Provider value={(inputValue, setInputValue)}>
      {children}
    </ExchangeContext.Provider>
  );
}
