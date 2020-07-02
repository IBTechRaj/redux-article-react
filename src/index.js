import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
//rdx
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";

// const initialState = {
//   books: [
//     { id: Date.now(), title: "First Flight" },
//     { id: Date.now(), title: "Second Choice" }
//   ]
// };

const store = createStore(reducer);

ReactDOM.render(
  // redux
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
