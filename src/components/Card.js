import React, { useRef, useState } from "react";
import "./Card.css";
import { Col } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import useCardDetail from "../hooks/useCardDetail";
import { QuestionCircleFilled } from "@ant-design/icons";

export default function Card({ indice, item }) {
  const [allowToFlip, setAllowToFlip] = useState(true);
  const dispatch = useDispatch();
  const cardList = useSelector((state) => state.cardList);
  const imgBorder = useSelector((state) => state.imgBorder);
  const handleQuestionClick = useCardDetail();
  const target = useRef(null);

  //FONCTION CLIC SUR CARTE
  const cardFlip = (index) => {
    if (allowToFlip) {
      //1. changer item.isVisible dans cardList
      dispatch({ type: "cardList/flipCard", payload: [index] });

      //2. s'il s'agit de la deuxième carte retournée : vérifier si la paire est bonne
      let displayedCards = cardList.filter((e) => e.isVisible === true);
      if (
        displayedCards.length > 0 &&
        displayedCards[0].id !== cardList[index].id //ne devrait pas exister normalement
      ) {
        setAllowToFlip(!allowToFlip);
        if (displayedCards[0].id === cardList[index].pair) {
          let binomIndex = cardList.findIndex(
            (e) => e.id === cardList[index].pair
          );
          // setImgBorder("2px solid green");
          dispatch({ type: "imgBorder/success" });

          setTimeout(
            () => next({ result: true, index: index, binomIndex: binomIndex }),
            2500
          );
        } else {
          // setImgBorder("2px solid red");
          dispatch({ type: "imgBorder/fail" });
          let binomIndex = cardList.findIndex(
            (e) => e.id === displayedCards[0].id
          );
          setTimeout(
            () => next({ result: false, index: index, binomIndex: binomIndex }),
            2500
          );
        }
      }
    }
  };

  //FONCTION DE CALLBACK SETTIMEOUT
  const next = (resultObject) => {
    console.log(allowToFlip);
    console.log("Next se lance");

    if (resultObject.result) {
      console.log("je suis dans le résultat OK");
      dispatch({
        type: "cardList/findPair",
        payload: [resultObject.index, resultObject.binomIndex],
      });
      dispatch({
        type: "foundPairList/addPair",
        payload: [resultObject.index, resultObject.binomIndex],
      });
    }

    dispatch({
      type: "cardList/flipCard",
      payload: [resultObject.index, resultObject.binomIndex],
    });

    // setImgBorder("0px solid transparent");
    dispatch({ type: "imgBorder/reinitImgBorder" });
    setAllowToFlip(true);
  };

  if (!cardList.some((e) => !e.isFound)) {
    dispatch({ type: "bravo/win" });
  }

  let card = item.isFound ? (
    <Col className="card" alt={item.author}></Col>
  ) : !item.isVisible ? (
    <Col className="card" onClick={() => cardFlip(indice)}>
      <img
        src="/images/garden.jpg"
        className="Image"
        alt={item.author}
        style={{ opacity: 0.9 }}
      ></img>
    </Col>
  ) : (
    <Col className="card">
      <img
        src={item.url}
        className="Image"
        alt={item.author}
        style={{ border: imgBorder }}
        onClick={() => cardFlip(indice)}
      ></img>
      <QuestionCircleFilled
        className="icon"
        ref={target}
        onClick={() => handleQuestionClick(item)}
      />
    </Col>
  );

  return <div>{card}</div>;
}
