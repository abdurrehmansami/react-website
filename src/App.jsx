import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "./node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import Service from "./Service.jsx";
import Contact from "./Contact.jsx";
import About from "./About.jsx";

import { Switch, Route, Redirect } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Switch>
        <Navbar />
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/about"} component={About} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
