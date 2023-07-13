import React from "react";
import { Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { IconActionBtn } from "../Actions";

const ModalProvider = (props) => {
  const { children, modalBtnVariant, isOpen, closeModal, modalTitle } = props;
  return (
    <div>
      {modalBtnVariant}
      <Modal open={isOpen} onClose={closeModal}>
        <div className="text-stone-800 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] bg-stone-200 p-4 flex flex-col gap-4 rounded">
          <div className="flex justify-between items-center">
            <span className="font-medium">{modalTitle}</span>
            <IconActionBtn
              handleClick={() => closeModal()}
              className="text-stone-950 hover:text-stone-950"
            >
              <CloseIcon className="text-stone-900" />
            </IconActionBtn>
          </div>
          <div className="bg-stone-50 rounded-md overflow-hidden">
            {children}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalProvider;
