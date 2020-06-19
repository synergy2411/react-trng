import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component{
    render(){
        return (
            <div className="container">
                <p className="display-4">
                    Counter  : { this.props.counter }
                </p>
            </div>
        )
    }
}

// export default Counter;

// Map the Redux state with the Component Props
const mapStateToProps = (state) => {        
    return {
     counter : state.counter   
    }
}
// Map the dispatch Actions with Component Props
const mapDispatchToProps = (state) => {}

const connectedFunc = connect(mapStateToProps, mapDispatchToProps);

export default connectedFunc(Counter);

