import React from 'react';

class ControlledComponent extends React.Component{
    state = {
        email : "test@test.com"
    }
    inputPasswordRef = React.createRef();

    clickHandler = (event) => {
        event.preventDefault();
        // Constrolled Element - via component state
        console.log("Email : ", this.state.email);
        // Uncontrolled Element - via Refs
        console.log("Password : ", this.inputPasswordRef.current.value);
    }
    render(){
        return (
            <div className="container">

                <form>
                    <div className="form-group">
                        <label>Email : </label>
                        <input type="text" 
                            value={this.state.email}
                            onChange={event => {this.setState({email : event.target.value})}}/>
                    </div>
                    <div className="form-group">
                        <label>Password : </label>
                        <input type="password" ref= {this.inputPasswordRef}/>
                    </div>
                    <div className="form-group">
                        <button onClick={(event) => this.clickHandler(event)}>Login</button>
                    </div>
                </form>

            </div>
        )
    }
}

export default ControlledComponent;