import React from 'react';
import Child from './Child';

class Parent extends React.Component{
    constructor(){
        super();
        this.state = {
            user : {
                name : "Foo",
                age : 34,
                address : {}
            }
        }
    }
    changeName = () => {
        this.setState({
            user :{
                ...this.state.user,
                name : "Changed Name - Bar"
            }
        });
        console.log("STATE" , this.state);
    }

    render(){
        return (
            <div className="container">
                <p>This is Parent Component...</p>
                <button onClick={this.changeName}>Change Name</button>
                <br/>
                <Child name = {this.state.user.name} age = {this.state.user.age} />

            </div>
        )
    }
}

export default Parent;