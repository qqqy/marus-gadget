import React from "react";
import { Switch , Route , Redirect} from "react-router-dom";
import Home from "./components/views/Home";
import About from "./components/views/About";

export default (
  <Switch>
    <Route path="/" exact render={() => (<Redirect to="/home"/>)}/>
    <Route path="/home" component={Home}/>
    <Route path="/about" component={About}/>
  </Switch>
)