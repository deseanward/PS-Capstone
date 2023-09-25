import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import {
  PopoverContainer,
  PopoverHeader,
  PopoverModal,
} from "./popover.styles";
import Button from "../button/button.ui";

const Confirm = ({ show, onConfirm, onCancel }) => {
  const [isShowing, setIsShowing] = useState(show);

  // Animation variants
  const scaleIn = {
    hidden: { scale: 0, opacity: 0, transition: { duration: 0.3 } },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.3 } },
    exit: { scale: 0, opacity: 0, transition: { duration: 0.3 } },
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setIsShowing("cancel");

    setTimeout(() => onCancel("cancel"), 400);
  };

  const handleConfirm = () => {
    setIsShowing("cancel");
    onConfirm();

    setTimeout(() => onCancel("cancel"), 400);
  };

  useEffect(() => {
    setIsShowing(show);
  }, [show]);

  return (
    <PopoverContainer show={show}>
      <AnimatePresence mode='wait'>
        <PopoverModal
          variants={scaleIn}
          animate={isShowing === "true" ? "visible" : "exit"}
          exit='exit'
        >
          <PopoverHeader>
            <h3>Proceed to delete?</h3>
          </PopoverHeader>

          <div className='flex gap-2 justify-end'>
            <Button type='delete' onClick={handleConfirm}>
              OK
            </Button>
            <Button type='submit' onClick={handleCancel}>
              Cancel
            </Button>
          </div>
        </PopoverModal>
      </AnimatePresence>
    </PopoverContainer>
  );
};

export default Confirm;
