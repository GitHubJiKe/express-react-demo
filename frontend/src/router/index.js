import {
  Route,
  Link,
  Router
} from "react-router-dom";
import React from 'react';
import { createBrowserHistory } from 'history';
import { LoginPage, HomePage } from '../pages'
const style = {
  width: "100%",
  height: "100%",
  position: "absolute"
}
const appHistory = createBrowserHistory();
const MyRouter = () => {
  return <Router history={appHistory}>
    <div style={style}>
      <Route exact path="/" component={LoginPage} />
      <Route path="/home" component={HomePage} />
    </div>
  </Router>
}

export {
  MyRouter,
  appHistory
};