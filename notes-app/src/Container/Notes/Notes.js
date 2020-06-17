import React from "react";
import Note from "./Note/Note";

class Notes extends React.Component {
  state = {
    notes: [
      { id: 1, title: "shopping", body: "to buy the pulses" },
      { id: 2, title: "reading", body: "to read the books" },
      { id: 3, title: "insurance", body: "to renew the car insurance" },
      { id: 4, title: "plant", body: "to pot the plant" },
    ],
  };
  render() {
    let notes = this.state.notes.map((note) => <Note note={note} key={note.id} />);
    
    return (
      <div className="container">
        <p className="display-4 text-center">My Awesome Notes</p>

        <div className="row">{notes}</div>
      </div>
    );
  }
}

export default Notes;
