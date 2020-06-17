import React from "react";

class AddNewForm extends React.Component {
  constructor() {
      super();
    this.inputTitleRef = React.createRef();
    this.inputBodyRef = React.createRef();
  }

  addNewHandler(event){
      event.preventDefault();
      let title = this.inputTitleRef.current.value;
      let body = this.inputBodyRef.current.value;
      this.props.onAddNewNote({title, body})
  }
  render() {
    return (
      <div className="col-sm-8 offset-sm-2">
        <div className="card">
          <div className="card-body">
            <form>
              <div className="form-group">
                <label>Title : </label>
                <input
                  type="text"
                  className="form-control"
                  ref={this.inputTitleRef}
                />
              </div>
              <div className="form-group">
                <label>Body : </label>
                <input
                  type="text"
                  className="form-control"
                  ref={this.inputBodyRef}
                />
              </div>
              <div className="form-group">
                <button
                  className="btn btn-block btn-outline-primary"
                  onClick={(event) => this.addNewHandler(event)}
                >
                  Add New Note
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddNewForm;

// Two ways to handle Form Element
// - Controlled Component : setting the state
// - using Refs : React.createRef()
