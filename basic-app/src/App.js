import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Note from './Container/Note/Note';
import LifeCycleDemo from "./Container/LifeCycle/LifeCycle";
import Parent from "./Container/Props/Parent";
import ControlledComponent from './Container/ControlledComponent/FormComponent';
import FuncCmp from "./Container/Hooks/UseStateHook";

import { BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';


function App() {

  return (
    <Router>
      <div className="container">
        <nav>
        <ul className="list-unstyled">
          <li>
            <Link to="/">Home</Link>
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
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/note">
          <Note />
        </Route>
        <Route path = "/lifecycle">
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

   )
   function Home() {
    return (
      <h3>Home Component</h3>
    )
  }
  // function About(){
  //   return (
  //     <h3>About Component</h3>
  //   )
  // }
  // function Contact(){
  //   return (
  //     <h3>Contact Component</h3>
  //   )
  // }

  // return (
  //   // React.createElement("div", {className : "App"}, 
  //   //   React.createElement("p", {}, "This app is working fine...") )

  //     <div className="container">
  //       <p className="text-center">The app is coming soon ...</p>
  //       <br/>
  //       {/* <Note /> */}
  //       {/* <LifeCycleDemo /> */}
  //       {/* <Parent/> */}
  //       {/* <ControlledComponent /> */}
  //       {/* <FuncCmp /> */}
  //     </div>
  // );
}

export default App;

// npm install bootstrap --save