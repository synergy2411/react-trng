import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Note from './Container/Note/Note';

function App() {
  return (
    // React.createElement("div", {className : "App"}, 
    //   React.createElement("p", {}, "This app is working fine...") )

      <div className="container">
        <p className="text-center">The app is coming soon ...</p>
        <br/>
        <Note />
      </div>
  );
}

export default App;

// npm install bootstrap --save