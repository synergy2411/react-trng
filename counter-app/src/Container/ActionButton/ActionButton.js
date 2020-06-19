import React from 'react';
import { connect } from 'react-redux';
import * as actionType from '../../store/actions/actions';

function ActionButton (props) {
    return (
        <div className="container">
            <div className="row">
                <div className = "col-sm-3">
                    <button className="btn btn-block btn-primary"
                        onClick = { props.onIncrease }>Increase</button>
                </div>
                <div className = "col-sm-3">
                    <button className="btn btn-block btn-warning"
                        onClick = { props.onDecrease }>Decrease</button>
                </div>
                <div className = "col-sm-3">
                    <button className="btn btn-block btn-dark"
                        onClick = { () => props.onAdd(10) }>Add</button>
                </div>
                <div className = "col-sm-3">
                    <button className="btn btn-block btn-success"
                        onClick = { () => props.onSubstract(5) }>Substract</button>
                </div>
            </div>
        </div>
    )
}

// Map the dispatch action with the props of component
const mapDispatchToProps = dispatch => {
    return {
        onIncrease : () => {
            // dispatch({type : "INCREMENT"});
            // dispatch({type : actionType.INCREMENT})
            dispatch(actionType.onIncrement())
        },
        onDecrease : () => {dispatch({type : "DECREMENT"})},
        onAdd : (value) => {
            // dispatch({type : "ADD", payload : value})
            dispatch(actionType.onAdd(value))
        },
        onSubstract : value => {dispatch({type : "SUBSTRACT", payload : value})}
    }
}

export default connect(null, mapDispatchToProps) (ActionButton);