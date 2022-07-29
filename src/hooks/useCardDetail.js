import { useDispatch } from "react-redux";

const useCardDetail = (item) => {
  const dispatch = useDispatch();

  const handleQuestionClick = (item) => {
    dispatch({ type: "showDetail/toggleDetail" });
    dispatch({ type: "cardData/setCardData", payload: item });
  };

  return handleQuestionClick;
};

export default useCardDetail;
