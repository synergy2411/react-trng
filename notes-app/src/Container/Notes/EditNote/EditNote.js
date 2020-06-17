import React from 'react';

class EditNote extends React.Component{
    render(){
        return (
            <div className="col-sm-8 offset-sm-2">
                <div className="card">
                    <div className="card-header">
        <h4> {this.props.note.title.toUpperCase()} </h4>
                    </div>
                    <div className="card-body">
                        <p className="text-center">
                            {this.props.note.body}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditNote;