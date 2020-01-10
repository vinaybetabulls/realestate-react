import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import AddProperty from "./components/addProperty";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/redux";

const Routing = (
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={App} />
      <Route path="/addProperty" component={AddProperty} />
    </Router>
  </Provider>
);

ReactDOM.render(Routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
