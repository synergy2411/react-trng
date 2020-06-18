import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Note from "./Container/Note/Note";
import LifeCycleDemo from "./Container/LifeCycle/LifeCycle";
import Parent from "./Container/Props/Parent";
import ControlledComponent from "./Container/ControlledComponent/FormComponent";
import FuncCmp from "./Container/Hooks/UseStateHook";

import { BrowserRouter as Router, Link, Switch, Route, useRouteMatch, useParams } from "react-router-dom";

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
        <Route exact path="/home">
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
  function Home() {
    console.log("ROUTE MATCH : ",  useRouteMatch());
    const {url, path } = useRouteMatch();
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <ul className="list-group">
              <li className="list-group-item">
                <Link to ={`${url}/javascript`}>JavaScript</Link>    
              </li>
              <li className="list-group-item">
                <Link to ={`${url}/react`}>React</Link>
              </li>
              <li className="list-group-item">
                <Link to ={`${url}/node`}>Node</Link>
              </li>
            </ul>
          </div>
        </div>
        <Switch>
          <Route exact path={path}>
            <h3>Home Component Loaded....</h3>
          </Route>
          <Route path={`${path}/:courseId`} children={<Course />} />

        </Switch>
      </div>
    );
  }

  function Course(){
    const {courseId} = useParams();
    console.log("Course Loaded", useParams());
    return (
      <div>
        Course Component Loaded with {courseId}.....
      </div>
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
