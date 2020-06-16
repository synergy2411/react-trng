import React from 'react';

// class Child extends React.Component{
    
//     render(){
//         console.log("CHILD - RENDER");
//         return (
//         <h3>Hi, I'm {this.props.name}| I am {this.props.age} years old! </h3>
//         )
//     }
// }

function Child(props){
    return (
        <div> 
            <p>Hello, This is {props.name} | I'm {props.age} years old!</p>
        </div>
    )
}


export default Child;