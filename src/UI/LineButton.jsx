import React from "react";

export default function LineButton({ children, isActive = true, onClick }) {
  return (
    <button
      className={` ${
        isActive === true
          ? `border-primary-red text-primary-red`
          : `border-placeholder-gray font-medium text-secondary-black`
      } border-b-2  p-5 px-6 font-black text-sm`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
