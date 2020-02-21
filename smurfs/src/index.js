import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

// import redux hooks
import { Provider } from "react-redux"
import { createStore, applyMiddleWare } from "redux"
import thunk from "redux-thunk"

// import reducer
import reducer from "./reducers/reducers"

// create store
const store = createStore(reducer, applyMiddleWare(thunk))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
