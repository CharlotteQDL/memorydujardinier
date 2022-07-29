import React, { useEffect } from "react";
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";

const PairsDetail = () => {
  const cardList = useSelector((state) => state.cardList);
  const foundPairList = useSelector((state) => state.foundPairList);
  const showFoundPairs = useSelector((state) => state.showFoundPairs);
  const dispatch = useDispatch();

  let phrase =
    foundPairList.length === 0
      ? "0 paire trouvée"
      : foundPairList.length === 1
      ? "1 paire trouvée"
      : `${foundPairList.length} paires trouvées`;

  //LISTE DES PAIRES TROUVEES
  let foundPairsToShow = foundPairList.map((pair, i) => {
    return (
      <div className="Result list" key={i}>
        <div>
          <p>{cardList[pair[0]].name}</p>
          <img
            className="imagePairs"
            alt={cardList[pair[0]].author}
            src={cardList[pair[0]].url}
          />
          <p className="author">{cardList[pair[0]].author}</p>
        </div>
        <div>
          <p>{cardList[pair[1]].name}</p>
          <img
            className="imagePairs"
            alt={cardList[pair[1]].author}
            src={cardList[pair[1]].url}
          />
          <p className="author">{cardList[pair[1]].author}</p>
        </div>
      </div>
    );
  });

  return (
    <Modal
      className="Result"
      isOpen={showFoundPairs}
      toggle={() =>
        dispatch({
          type: "showFoundPairs/togglePairs",
        })
      }
    >
      <ModalHeader
        toggle={() =>
          dispatch({
            type: "showFoundPairs/togglePairs",
          })
        }
      >
        {phrase}
      </ModalHeader>
      <ModalBody>{foundPairsToShow}</ModalBody>
      <ModalFooter>
        <Button
          onClick={() =>
            dispatch({
              type: "showFoundPairs/togglePairs",
            })
          }
        >
          J'ai compris !
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default PairsDetail;
