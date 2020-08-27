import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/login">
          <h1>Login page</h1>
        </Route>
        <Route path="/checkout">
          <h1>Checkout page</h1>
        </Route>
        <Route path="/product">
          <h1>Products page</h1>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
