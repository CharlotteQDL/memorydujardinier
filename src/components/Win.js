import React from "react";
import { useSelector } from "react-redux";
import { Modal, ModalBody, Button } from "reactstrap";
import useNewGame from "../hooks/useNewGame";

export default function Win() {
  const bravo = useSelector((state) => state.bravo);
  const { newGameOnClick, newGameToggle } = useNewGame();
  return (
    <Modal isOpen={bravo} {...newGameToggle}>
      <ModalBody className="Result">
        <div>Gagné! Bravo ! </div>
        <Button {...newGameOnClick}>Nouvelle partie</Button>
      </ModalBody>
    </Modal>
  );
}
