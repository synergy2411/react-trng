import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ControlledComponent from "./Container/ControlledComponent/FormComponent";
import Home from './Container/Home/Home';
import FuncCmp from "./Container/Hooks/UseStateHook";
import LifeCycleDemo from "./Container/LifeCycle/LifeCycle";
import Parent from "./Container/Props/Parent";
import Note from './Container/Note/Note';

function App() {
  return (
    <Router>
      <div className="container">
        <nav>
          <ul className="list-unstyled">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/lifecycle">Life Cycle Demo</Link>
            </li>
            <li>
              <Link to="/props">Props Demo</Link>
            </li>
            <li>
              <Link to="/forms">Forms Demo</Link>
            </li>
            <li>
              <Link to="/hooks">Hooks Demo</Link>
            </li>
            <li>
              <Link to="/note">Note Demo</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Switch>
        {/* <Route path="/home" exact>  http://localhost:3000/home/react  */}  
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/note">
          <Note />
        </Route>
        <Route path="/lifecycle">
          <LifeCycleDemo />
        </Route>
        <Route path="/props">
          <Parent />
        </Route>
        <Route path="/forms">
          <ControlledComponent />
        </Route>
        <Route path="/hooks">
          <FuncCmp />
        </Route>
      </Switch>
    </Router>
  );
  
}

export default App;

