import React from 'react';

class LifeCycleDemo extends React.Component{
    constructor(){
        super();
        this.state = {
            counter : 0
        }
        console.log("[CONSTRUCTOR]")
    }
    componentDidMount(){
        console.log("[COPONENT DID MOUNT]")
    }
    componentDidUpdate(){
        console.log("[COMPONENT DID UPDATE]")
    }
    componentWillUnmount(){
        console.log("[COMPONENT WIL UNMOUNT]")
    }
    clickHandler = () => {
        // console.log("CLICKED");
        // this.state.counter++;
        // this.state.todos.push()
        this.setState({
            counter : this.state.counter + 1
        })
    }
    shouldComponentUpdate(){        
        console.log("SHOULD COMPONENT UPDATE");
        if(this.state.counter < 3){
            return true;
        }
        else{
            return false;
        }
    }
    render(){
        console.log("[RENDER]");
        return (
            <div>
                Life cycle demo is in progress ....
                <hr />
        <button onClick = {this.clickHandler}>  + </button>  | Counter : {this.state.counter}
            </div>
        )
    }
}

export default LifeCycleDemo;