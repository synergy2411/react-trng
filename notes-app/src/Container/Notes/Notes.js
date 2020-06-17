import React from "react";
import Note from "./Note/Note";
import EditNote from "./EditNote/EditNote";
import AddNewForm from "./AddNewForm/AddNewForm";

class Notes extends React.Component {
  state = {
    notes: [
      { id: 1, title: "shopping", body: "to buy the pulses" },
      { id: 2, title: "reading", body: "to read the books" },
      { id: 3, title: "insurance", body: "to renew the car insurance" },
      { id: 4, title: "plant", body: "to pot the plant" },
    ],
    showEdit: false,
    selectedNotedId: null,
    showAddNewForm : false
  };

  onHandleClick = (id) => {
    this.setState({
      showEdit: true,
      selectedNotedId: id,
    });
  };

  handleEdit(note) {
    //   console.log("[UPDATED NOTE]",note);
    const position = this.state.notes.findIndex((n) => n.id === note.id);
    if (position >= 0) {
      const duplicateNotes = [...this.state.notes];
      duplicateNotes[position].body = note.body;
      this.setState({
        notes: duplicateNotes,
        showEdit: false,
        selectedNotedId: null,
      });
    }
  }

  handleDelete(id) {
    const duplicateNotes = this.state.notes.filter(note => note.id !== id);
    this.setState({
        notes: duplicateNotes,
        showEdit : false,
        selectedNotedId : null
    })
  }

  handleAddNewForm = () => {
      this.setState({
          showAddNewForm : true
      })
  }

  addNewNote = ({title, body}) => {
    let note = {title, body, id : this.state.notes.length+1};
    const duplicateNotes = [...this.state.notes];
    duplicateNotes.push(note);
    this.setState({
        notes : duplicateNotes,
        showAddNewForm : false
    })

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
    if (this.state.showEdit && this.state.selectedNotedId !== null) {
      const note = this.state.notes.find(
        (note) => note.id === this.state.selectedNotedId
      );
      editNote = (
        <EditNote
          note={note}
          onhandleEdit={(note) => this.handleEdit(note)}
          onHandleDelete={(id) => this.handleDelete(id)}
        />
      );
    }

    let addNewForm = null;
    if(this.state.showAddNewForm){
        addNewForm = <AddNewForm onAddNewNote = {({title, body}) => this.addNewNote({title, body})}/>
    }


    return (
      <div className="container">
          <div className="row">
              <div className="col-sm-10">
              <p className="display-4 text-center">My Awesome Notes</p>
              </div>
              <div className="col-sm-2">
                  <button className="btn btn-block btn-outline-dark"
                        onClick={this.handleAddNewForm}>
                      Add
                  </button>
              </div>
          </div>
        
        {/* List of Notes */}
        <div className="row">{notes}</div>
        <hr />
        {/* Selected Note based on ID */}
        <div className="row">{editNote}</div>
        <br/>
        <div className="row">
            {addNewForm}
        </div>

      </div>
    );
  }
}

export default Notes;
