import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import { useSelector, useDispatch } from "react-redux";
import useNewGame from "../hooks/useNewGame";
import PairsDetail from "./PairsDetail";

function Header() {
  const foundPairList = useSelector((state) => state.foundPairList);
  const dispatch = useDispatch();
  const { newGameOnClick } = useNewGame();

  let phrase =
    foundPairList.length === 0
      ? "0 paire trouvée"
      : foundPairList.length === 1
      ? "1 paire trouvée"
      : `${foundPairList.length} paires trouvées`;

  return (
    <div className="row header">
      <h1>LE MEMORY DU JARDINIER</h1>
      <button className="shufflebtn" {...newGameOnClick}>
        Nouvelle partie
      </button>
      <button
        className="shufflebtn"
        onClick={() =>
          dispatch({
            type: "showFoundPairs/togglePairs",
          })
        }
      >
        {phrase}
      </button>
      <PairsDetail />
    </div>
  );
}

export default Header;
