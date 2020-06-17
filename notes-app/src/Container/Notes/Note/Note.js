import React from "react";
import "./Note.css";

function Note(props) {
  return (
    <div className="col-sm-6">
      <div className="card mystyle" onClick={() => props.handleClick(props.note.id)}>
        <div className="card-body">
          <h4 className="text-center">
            {props.note.title.toUpperCase()}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Note;
