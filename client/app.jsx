//
// This is the client side entry point for the React app.
//

import React from "react";
import {render} from "react-dom";

import { Router, Route, IndexRoute, browserHistory } from "react-router";
import {createStore} from "redux";
import {Provider} from "react-redux";
import "./styles/base.css";
import rootReducer from "./reducers";

//
// Add the client app start up code to a function as window.webappStart.
// The webapp's full HTML will check and call it once the js-content
// DOM is created.
//

import Home from "./components/home";

window.webappStart = () => {
  render(
    <Router history={browserHistory}>
      <Route path="/" component={Home}/>
    </Router>,
    document.querySelector(".js-content")
  );
};
