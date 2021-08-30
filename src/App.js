import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import MyForm from "./components/test";
import Main from "./components/main";
import Navbar from "./components/nav";
import Home from "./components/home";
import About from "./components/about";
import Calculator from "./components/calculator";

function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

        <Switch>
          {/* <Route path="/about">
            <About />
          </Route>
          <Route path="/calculator" component={Calculator} /> */}

          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
