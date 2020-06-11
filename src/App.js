import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/Abount";
import Trayectory from "./page/Trayectory";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/my-cv" component={Home} />
        <Route exact path="/my-cv/about" component={About}></Route>
        <Route exact path="/my-cv/trayectory" component={Trayectory}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
