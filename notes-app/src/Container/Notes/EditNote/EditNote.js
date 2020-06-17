import React from 'react';

class EditNote extends React.Component{
    state = {
        txtValue : this.props.note.body
    }
    handleChange = event => {
        // console.log(event.target.value);
        this.setState({
            txtValue : event.target.value
        })
    }

    handleEditClick = () => {
        this.props.onhandleEdit({
            ...this.props.note,
            body : this.state.txtValue
        });
    }

    handleDelete = () => {
        this.props.onHandleDelete(this.props.note.id);
    }
    render(){
        return (
            <div className="col-sm-8 offset-sm-2">
                <div className="card">
                    <div className="card-header">
        <h4> {this.props.note.title.toUpperCase()} </h4>
                    </div>
                    <div className="card-body">
                        <div className = "row">
                            <div className="col-sm-6 offset-sm-1">
                                <input type="text" 
                                    className="form-control"
                                    value = {this.state.txtValue}
                                    onChange={event => this.handleChange(event)}/>
                            </div>
                            <div className="col-sm-4">
                                <button 
                                    className="btn btn-sm btn-block btn-outline-primary"
                                    onClick = {this.handleEditClick}>
                                    Edit
                                </button>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col">
                                <button 
                                    className="btn btn-block btn-outline-danger"
                                    onClick={this.handleDelete}>
                                    Delete</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default EditNote;