import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Note from './Container/Note/Note';
import LifeCycleDemo from "./Container/LifeCycle/LifeCycle";
import Parent from "./Container/Props/Parent";
import ControlledComponent from './Container/ControlledComponent/FormComponent';
import FuncCmp from "./Container/Hooks/UseStateHook";

function App() {
  return (
    // React.createElement("div", {className : "App"}, 
    //   React.createElement("p", {}, "This app is working fine...") )

      <div className="container">
        <p className="text-center">The app is coming soon ...</p>
        <br/>
        {/* <Note /> */}
        {/* <LifeCycleDemo /> */}
        {/* <Parent/> */}
        {/* <ControlledComponent /> */}

        <FuncCmp />
      </div>
  );
}

export default App;

// npm install bootstrap --save