import React, { useCallback, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { store } from "./redux";
import Header from "./components/Header";
import CardGrid from "./components/CardGrid";
import "sanitize.css";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <CardGrid />
    </Provider>
  );
}

export default App;
