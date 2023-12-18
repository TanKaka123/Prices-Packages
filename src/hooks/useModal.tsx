import { useState, useEffect } from "react";
import Modal from "@/components/modal";

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  let ModalComponent = null;

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  if (isOpen) {
    ModalComponent = Modal;
  } else {
    ModalComponent = null;
  }

  return { isOpen, openModal, closeModal, ModalComponent };
};
