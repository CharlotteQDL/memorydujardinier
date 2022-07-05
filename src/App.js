import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "reactstrap";
import cardList from "./cardList";
import { QuestionCircleFilled } from "@ant-design/icons";

function App() {
  const [shuffleCardList, setShuffleCardList] = useState(cardList);
  const [foundPairNb, setFoundPairNb] = useState(0);
  const [phrase, setPhrase] = useState("0 paire trouvée");
  const [showDetail, setShowDetail] = useState(false);
  const [modalData, setModalData] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState("");
  const [foundPairs, setFoundPairs] = useState([]); //On ne stockera que l'id de la dernière carte retournée
  const [bravo, setBravo] = useState(false);
  const [showFoundPairs, setShowFoundPairs] = useState(false);

  const target = useRef(null);

  //FONCTION MELANGE CARTES
  const shuffleCards = () => {
    const shuffleCardListCopy = [...shuffleCardList].sort(
      () => Math.random() - 0.5
    );
    setShuffleCardList(shuffleCardListCopy);
  };

  //INIT PARTIE
  useEffect(() => {
    shuffleCards();
  }, []);

  //BOUTON BANDEAU SUPERIEUR - NOUVELLE PARTIE
  const newGame = () => {
    let cardListCopy = [...shuffleCardList];
    for (let element of cardListCopy) {
      element.isVisible = false;
      element.isFound = false;
    }
    setShuffleCardList(cardListCopy);
    setFoundPairNb(0);
    setBravo(false);
    shuffleCards();
  };

  //BOUTON BANDEAU SUPERIEUR - NOMBRE DE PAIRES TROUVEES
  useEffect(() => {
    switch (foundPairNb) {
      case 0:
        setPhrase("0 paire trouvée");
        break;
      case 1:
        setPhrase("1 paire trouvée");
        break;
      default:
        setPhrase(`${foundPairNb} paires trouvées`);
    }
  }, [foundPairNb]);

  //BANDEAU SUPERIEUR
  let header = (
    <Row className="row title">
      <h1>LE MEMORY DU JARDINIER</h1>
      <button className="shufflebtn" onClick={newGame}>
        Nouvelle partie
      </button>
      <button
        className="shufflebtn"
        onClick={() => setShowFoundPairs(!showFoundPairs)}
      >
        {phrase}
      </button>
    </Row>
  );

  //FONCTION CLIC SUR CARTE
  const cardFlip = (cardId) => {
    //Récupération de l'item de la liste d'image
    let card = shuffleCardList.find((e) => e.id == cardId);
    //1. changer item.isVisible dans shuffleCardList
    let cardListCopy = [...shuffleCardList];
    card.isVisible = !card.isVisible;
    setShuffleCardList(cardListCopy);

    //2. s'il s'agit de la deuxième carte retournée : vérifier si la paire est bonne
    let displayedCards = shuffleCardList.filter((e) => e.isVisible == true);
    if (displayedCards.length > 1) {
      if (displayedCards.find((e) => e.id == card.pair)) {
        console.log("paire trouvée");
        setResult("OK");
        setFoundPairs([...foundPairs, cardId]);
        setShowResult(true);
      } else {
        setResult("KO");
        setShowResult(true);
        console.log("raté");
      }
    }
  };

  //FONCTION CLIC SUR L'ICONE "?" D'UNE CARTE
  const handleQuestionClick = (item) => {
    setShowDetail(!showDetail);
    setModalData(item);
  };

  //SET DU TEXTE DE LA MODAL SI 2 CARTES RETOURNEES
  let resultToDisplay = "";
  if (result == "OK") {
    resultToDisplay = "Bravo ! ";
  } else resultToDisplay = "Raté ! Essayez encore !";

  //FONCTION CLIC SUR "CONTINUER" DE LA POPUP RESULTAT
  const next = (givenResult) => {
    let cardListCopy = [...shuffleCardList];
    for (let element of cardListCopy) {
      if (element.isVisible == true) {
        if (givenResult == "OK") {
          element.isFound = !element.isFound;
          setFoundPairNb(foundPairNb + 1);
          if (!shuffleCardList.some((e) => !e.isFound)) {
            setBravo(true);
          }
        }
        element.isVisible = !element.isVisible;
      }
    }
    setShuffleCardList(cardListCopy);
    setShowResult(!showResult);
  };

  //SETUP DE VARIABLES QUI PEUVENT ETRE UNDEFINED
  let binomName;
  let binomAuthor;
  if (modalData.pair) {
    let binom = shuffleCardList.find((e) => e.id == modalData.pair);
    binomName = binom.name;
    binomAuthor = binom.author;
  }

  let imageSource;
  if (modalData.url) {
    imageSource = shuffleCardList.find((e) => e.id == modalData.pair).url;
  }

  //LISTE DE CARTES A AFFICHER
  let cardItems = shuffleCardList.map((item, i) => {
    if (item.isFound) {
      return <Col className="card" key={i}></Col>;
    } else if (!item.isVisible) {
      return (
        <Col className="card" key={i} onClick={() => cardFlip(item.id)}>
          <img
            src="/images/garden.jpg"
            className="Image"
            style={{ opacity: 0.9 }}
          ></img>
        </Col>
      );
    } else {
      return (
        <Col className="card" key={i}>
          <img
            src={item.url}
            className="Image"
            onClick={() => cardFlip(item.id)}
          ></img>
          <QuestionCircleFilled
            className="icon"
            ref={target}
            onClick={() => handleQuestionClick(item)}
          />
        </Col>
      );
    }
  });

  //LISTE DES PAIRES TROUVEES
  let foundPairsToShow = foundPairs.map((id, i) => {
    return (
      <div className="Result list" key={i}>
        <div>
          <img
            className="imagePairs"
            src={shuffleCardList.find((e) => e.id == id).url}
          />
          <p>{shuffleCardList.find((e) => e.id == id).name}</p>
          <p className="author">
            {shuffleCardList.find((e) => e.id == id).author}
          </p>
        </div>
        <div>
          <img
            className="imagePairs"
            src={shuffleCardList.find((e) => e.pair == id).url}
          />
          <p>{shuffleCardList.find((e) => e.pair == id).name}</p>
          <p className="author">
            {shuffleCardList.find((e) => e.pair == id).author}
          </p>
        </div>
      </div>
    );
  });

  return (
    <Container className="container">
      {header}
      <Row sm="5">{cardItems}</Row>
      <Modal
        size="lg"
        style={{ maxWidth: "900px", width: "100%" }}
        isOpen={showDetail}
        toggle={() => setShowDetail(!showDetail)}
      >
        <ModalHeader toggle={() => setShowDetail(!showDetail)}>
          Je suis {modalData.name}
        </ModalHeader>
        <ModalBody className="detailModal">
          <div className="modalColumn">
            <img className="ImageModal" src={modalData.url} />
            <p className="author">{modalData.author}</p>
            <p>{modalData.detail}</p>
          </div>
          <div className="modalColumn">
            <img className="ImageModal" src={imageSource} />
            <p className="author">{binomAuthor}</p>
            <p>Mon binôme est {binomName}</p>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button onClick={() => setShowDetail(!showDetail)}>
            J'ai compris !
          </Button>
        </ModalFooter>
      </Modal>
      <Modal isOpen={showResult} toggle={() => next(result)}>
        <ModalBody className="Result">
          <div>{resultToDisplay}</div>
          <Button onClick={() => next(result)}>Continuer</Button>
        </ModalBody>
      </Modal>
      <Modal isOpen={bravo} toggle={newGame}>
        <ModalBody className="Result">
          <div>Gagné! Bravo ! </div>
          <Button onClick={newGame}>Nouvelle partie</Button>
        </ModalBody>
      </Modal>
      <Modal
        className="Result"
        isOpen={showFoundPairs}
        toggle={() => {
          setShowFoundPairs(!showFoundPairs);
        }}
      >
        <ModalHeader toggle={() => setShowFoundPairs(!showFoundPairs)}>
          {phrase}
        </ModalHeader>
        <ModalBody>{foundPairsToShow}</ModalBody>
        <ModalFooter>
          {" "}
          <Button onClick={() => setShowFoundPairs(!showFoundPairs)}>
            J'ai compris !
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
}

export default App;
