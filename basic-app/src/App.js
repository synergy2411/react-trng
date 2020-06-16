import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Note from './Container/Note/Note';
import LifeCycleDemo from "./Container/LifeCycle/LifeCycle";
import Parent from "./Container/Props/Parent";

function App() {
  return (
    // React.createElement("div", {className : "App"}, 
    //   React.createElement("p", {}, "This app is working fine...") )

      <div className="container">
        <p className="text-center">The app is coming soon ...</p>
        <br/>
        {/* <Note /> */}
        {/* <LifeCycleDemo /> */}
        <Parent/>
      </div>
  );
}

export default App;

// npm install bootstrap --save