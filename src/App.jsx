import React from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Films from "./components/Films";
import FilmDetails from "./components/FilmDetails";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/films">
            <Films />
          </Route>
          <Route exact path="/films/:filmid">
            <FilmDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
