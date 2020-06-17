import React from "react";

// class Child extends React.Component{

//     render(){
//         console.log("CHILD - RENDER");
//         return (
//         <h3>Hi, I'm {this.props.name}| I am {this.props.age} years old! </h3>
//         )
//     }
// }

function Child(props) {
  return (
    <div>
      <p>
        Hello, This is {props.name} | I'm {props.age} years old!
      </p>
      <button onClick={props.onChildCalled}>Call Method on Parent</button>
      <button onClick={() => props.onValueSend({ message: "Some happy news" })}>
        Send Value to Parent
      </button>
    </div>
  );
}

export default Child;
