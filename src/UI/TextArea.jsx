// import { useState } from "react";

// export default function TextArea() {
//   const [style, setStyle] = useState("");
//   function handleCheck(event) {
//     const value = event.target.value.trim();

//     if (value === "") {
//       setStyle("outline-2 outline-secondary-black");
//       console.log("it doesn't have value");
//     } else {
//       setStyle("outline-2 outline-primary-red");
//       console.log("it does have value");
//     }
//   }

//   return (
//     <div className="text-left w-full h-full text-primary-black flex flex-col gap-2">
//       <label htmlFor="" className="font-bold text-sm">
//         Describe your issue
//       </label>
//       <textarea
//         onChange={handleCheck}
//         name=""
//         id=""
//         placeholder="Tell us how we can help..."
//         className={` ${style} resize-none p-5 w-[28.563rem] h-full inputs outline-2 border-none`}
//       ></textarea>
//     </div>
//   );
// }

import { useState } from "react";

export default function TextArea({ value = "", onChange }) {
  const [style, setStyle] = useState("");

  function handleCheck(e) {
    const v = e.target.value;
    if (v.trim() === "") {
      setStyle("outline-2 outline-secondary-black");
    } else {
      setStyle("outline-2 outline-primary-red");
    }
    if (onChange) onChange(e);
  }

  return (
    <div className="text-left w-full h-full text-primary-black flex flex-col gap-2">
      <label htmlFor="issue" className="font-bold text-sm">
        Describe your issue
      </label>
      <textarea
        id="issue"
        value={value}
        onChange={handleCheck}
        placeholder="Tell us how we can help..."
        className={`${style} resize-none p-5 w-[28.563rem] h-full inputs outline-2 border-none`}
      />
    </div>
  );
}
