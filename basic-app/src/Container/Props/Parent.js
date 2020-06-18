import React from 'react';
import Child from './Child';

class Parent extends React.Component{
    constructor(){
        super();
        this.state = {
            user : {
                name : "Foo",
                age : "34",
                address : {}
            },
            name : "FooBar"
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

    toBeCalledByChild = () => {
        alert("Called by child....");
    }

    valueSend = (data) => {
        console.log(data);
        alert("Value send called");
    }
    render(){
        return (
            <div className="container">
                <p>This is Parent Component... </p>
                <button onClick={this.changeName}>Change Name</button>
                <br/>
                <Child 
                    name = {this.state.user.name} 
                    age = {this.state.user.age} 
                    onChildCalled = {this.toBeCalledByChild}
                    onValueSend = {(data) => this.valueSend(data)}/>

            </div>
        )
    }
}

export default Parent;