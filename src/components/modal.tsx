import React from "react";
import { Form } from "@/features";
import { Package } from "@/types/package";
import { Paragraph } from ".";

interface ModalProps {
  closeModal?: () => void;
  packageItem: Package;
}
const Modal: React.FC<ModalProps> = ({ closeModal, packageItem }) => {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <Paragraph bold>{packageItem.name}</Paragraph>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <Form action={closeModal} packageItem={packageItem} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
