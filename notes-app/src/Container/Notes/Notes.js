import React from "react";
import Note from "./Note/Note";
import EditNote from "./EditNote/EditNote";

class Notes extends React.Component {
  state = {
    notes: [
      { id: 1, title: "shopping", body: "to buy the pulses" },
      { id: 2, title: "reading", body: "to read the books" },
      { id: 3, title: "insurance", body: "to renew the car insurance" },
      { id: 4, title: "plant", body: "to pot the plant" },
    ],
    showEdit : false,
    selectedNotedId : null
  };

  onHandleClick = (id) => {
    this.setState({
        showEdit : true,
        selectedNotedId : id
    })
  };

  handleEdit(note){
    //   console.log("[UPDATED NOTE]",note);
    const position = this.state.notes.findIndex( n => n.id === note.id);
    if(position >= 0){
        const duplicateNotes = [...this.state.notes];
        duplicateNotes[position].body = note.body;
        this.setState({
            notes : duplicateNotes,
            showEdit : false,
            selectedNotedId : null
        })
    }
  }

  handleDelete(id){
    //   to perform the seleted item from notes 
  }

  render() {
    let notes = this.state.notes.map((note) => {
      return (
        <Note
          note={note}
          key={note.id}
          handleClick={(id) => this.onHandleClick(id)}
        />
      );
    });

    let editNote = null;
    if(this.state.showEdit && this.state.selectedNotedId !==null){
        const note = this.state.notes.find(note => note.id === this.state.selectedNotedId);
        editNote = <EditNote note={note} 
                    onhandleEdit = {(note) => this.handleEdit(note)} 
                    onHandleDelete = {id => this.handleDelete(id)}
                    />
    }

    return (
      <div className="container">
        <p className="display-4 text-center">My Awesome Notes</p>
        {/* List of Notes */}
        <div className="row">
            {notes}
        </div>
        <hr />
        {/* Selected Note based on ID */}
        <div className="row">
            {editNote}
        </div>
      </div>
    );
  }
}

export default Notes;
