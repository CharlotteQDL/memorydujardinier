import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from "reactstrap";
import useCardDetail from "../hooks/useCardDetail";

export default function CardDetail() {
  const dispatch = useDispatch();
  const showDetail = useSelector((state) => state.showDetail);
  const cardList = useSelector((state) => state.cardList);
  const card = useSelector((state) => state.cardData);

  //SETUP DE VARIABLES QUI PEUVENT ETRE UNDEFINED
  let binom = card ? cardList.find((e) => e.id === card.pair) : {};
  let binomName = card ? binom.name : "";
  let binomAuthor = card ? binom.author : "";
  let imageSource = card ? cardList.find((e) => e.id === card.pair).url : "";
  let name = card ? card.name : "";
  let url = card ? card.url : "";
  let author = card ? card.author : "";
  let detail = card ? card.detail : "";

  return (
    <Modal
      size="lg"
      style={{ maxWidth: "900px", width: "100%" }}
      isOpen={showDetail}
      toggle={() => dispatch({ type: "showDetail/toggleDetail" })}
    >
      <ModalHeader toggle={() => dispatch({ type: "showDetail/toggleDetail" })}>
        Je suis {name}
      </ModalHeader>
      <ModalBody className="detailModal">
        <div className="modalColumn">
          <img className="ImageModal" src={url} alt={author} />
          <p className="author">{author}</p>
          <p>{detail}</p>
        </div>
        <div className="modalColumn">
          <img className="ImageModal" src={imageSource} alt={binomAuthor} />
          <p className="author">{binomAuthor}</p>
          <p>Mon binôme est {binomName}</p>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button onClick={() => dispatch({ type: "showDetail/toggleDetail" })}>
          J'ai compris !
        </Button>
      </ModalFooter>
    </Modal>
  );
}
