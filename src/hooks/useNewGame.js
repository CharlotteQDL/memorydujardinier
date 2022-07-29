import { useDispatch } from "react-redux";

export default function useNewGame() {
  const dispatch = useDispatch();
  const newGame = () => {
    console.log("je passe bien par là newgame");
    dispatch({ type: "cardList/reinitCards" });
    console.log("j'ai réussi");
    dispatch({ type: "cardList/shuffleCards" });
    console.log("j'ai réussi2");
    dispatch({ type: "foundPairList/reinitPairs" });
    console.log("j'ai réussi3");
    dispatch({ type: "bravo/reinitBravo" });
    console.log("j'ai réussi4");
  };

  return {
    newGameOnClick: {
      onClick: newGame,
    },
    newGaleToggle: {
      toggle: newGame,
    },
  };
}
