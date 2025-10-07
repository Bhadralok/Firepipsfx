// import { createContext, useState, useEffect } from "react";

// export const ExchangeContext = createContext();

// export default function ExchangeRateFetcher({ children }) {
//   const [exchangeRate, setExchangeRate] = useState(null);

//   useEffect(() => {
//     async function fetchRate() {
//       try {
//         const res = await fetch(
//           "https://api.exchangerate-api.com/v4/latest/USD"
//         );
//         const data = await res.json();
//         setExchangeRate(data.rates.NGN);
//       } catch (err) {
//         console.error("Error fetching rate:", err);
//       }
//     }

//     fetchRate();
//   }, []);

//   return (
//     <ExchangeContext.Provider value={exchangeRate}>
//       {children}
//     </ExchangeContext.Provider>
//   );
// }
