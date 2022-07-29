import React, { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row } from "reactstrap";
import "./CardGrid.css";
import Card from "./Card";
import CardDetail from "./CardDetail";
import Win from "./Win";

function CardGrid() {
  const dispatch = useDispatch();

  const cardList = useSelector((state) => state.cardList);

  useEffect(() => {
    dispatch({ type: "cardList/shuffleCards" });
  }, []);

  return (
    <Container className="container px-0">
      <Row xs="4" className="px-0">
        {cardList.map((item, i) => (
          <>
            <Card className="px-0" key={i} indice={i} item={item} />
          </>
        ))}
      </Row>
      <CardDetail />
      <Win />
    </Container>
  );
}

export default CardGrid;
