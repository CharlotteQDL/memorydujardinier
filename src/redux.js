import { configureStore, createSlice } from "@reduxjs/toolkit";
import initialCardList from "./initialCardList";

const cardListSlice = createSlice({
  name: "cardList",
  initialState: initialCardList,
  reducers: {
    shuffleCards: (state) => {
      //action={type:cardList/shuffleCards}
      state.sort(() => Math.random() - 0.5);
      return state;
    },
    reinitCards: (state) => {
      for (let element of state) {
        element.isVisible = false;
        element.isFound = false;
      }
      return state;
    },
    flipCard: (state, action) => {
      for (let index of action.payload) {
        console.log("tuuuuu", state);
        state[index].isVisible = !state[index].isVisible;
      }
      return state;
    },
    findPair: (state, action) => {
      for (let element of action.payload) {
        state[element].isFound = true;
        console.log("J'ai mis à true", element);
      }
      return state;
    },
  },
});

const foundPairListSlice = createSlice({
  name: "foundPairList",
  initialState: [],
  reducers: {
    addPair: (state, action) => {
      //le payload est l'indice de la carte à ajouter
      state.push(action.payload);
      return state;
    },
    reinitPairs: (state, action) => {
      state = [];
      return state;
    },
  },
});

const bravoSlice = createSlice({
  name: "bravo",
  initialState: false,
  reducers: {
    win: (state) => {
      return true;
    },
    reinitBravo: (state) => {
      return false;
    },
  },
});

const imgBorderSlice = createSlice({
  name: "imgBorder",
  initialState: "0px solid transparent",
  reducers: {
    fail: (state) => "4px solid #e47676",
    success: (state) => "4px solid green",
    reinitImgBorder: (state) => "0px solid transparent",
  },
});

const showFoundPairsSlice = createSlice({
  name: "showFoundPairs",
  initialState: false,
  reducers: {
    togglePairs: (state) => !state,
  },
});

const showDetailSlice = createSlice({
  name: "showDetail",
  initialState: false,
  reducers: {
    toggleDetail: (state) => !state,
  },
});

const allowToFlipSlice = createSlice({
  name: "allowToFlip",
  initialState: true,
  reducers: {
    toggleAllow: (state) => !state,
  },
});

const cardDataSlice = createSlice({
  name: "cardData",
  initialState: null,
  reducers: {
    setCardData: (state, action) => action.payload,
  },
});

export const {
  shuffleCards,
  reinitCards,
  flipCard,
  findPair,
} = cardListSlice.actions;
export const { addPair, reinitPairs } = foundPairListSlice.actions;
export const { win, reinitBravo } = bravoSlice.actions;
export const { fail, success, reinitImgBorder } = imgBorderSlice.actions;
export const { togglePairs } = showFoundPairsSlice.actions;
export const { toggleDetail } = showDetailSlice.actions;
export const { toggleAllow } = allowToFlipSlice.actions;
export const { setCardData } = cardDataSlice.actions;

export const store = configureStore({
  reducer: {
    cardList: cardListSlice.reducer,
    foundPairList: foundPairListSlice.reducer,
    bravo: bravoSlice.reducer,
    imgBorder: imgBorderSlice.reducer,
    showFoundPairs: showFoundPairsSlice.reducer,
    showDetail: showDetailSlice.reducer,
    allowToFlip: allowToFlipSlice.reducer,
    cardData: cardDataSlice.reducer,
  },
});
