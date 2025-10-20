import React, { createContext, useContext, useState } from "react";
import useOutsideClick from "../Hooks/useOutsideClick";

const Modalcontext = createContext();
// Declaring the Parent
function Modal({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <Modalcontext.Provider value={{ openModal, closeModal, isOpen }}>
      {children}
    </Modalcontext.Provider>
  );
}

const useModal = () => {
  const context = useContext(Modalcontext);
  if (!context) throw new Error("Modal was used outside provider");
  return context;
};

Modal.Trigger = function Trigger({ children, className }) {
  const { openModal } = useModal();
  return (
    <span role="button" className={`shrink-0 ${className}`} onClick={openModal}>
      {children}
    </span>
  );
};

Modal.Window = function Window({ children }) {
  const { isOpen, closeModal } = useModal();
  const ref = useOutsideClick(closeModal);

  if (!isOpen) return null;

  return (
    <section className="w-full h-screen fixed z-100 inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center">
      <div ref={ref} className="min-w-40 w-auto relative bg-white rounded-3xl p-2 ">
        {React.cloneElement(children, { onCloseModal: closeModal })}
      </div>
    </section>
  );
};
export default Modal;
