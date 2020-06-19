import * as actionTypes from '../actions/actions';

const initialState = {
    counter : 101,
    result : []
}
function rootReducer(state = initialState, action){
    switch(action.type){
        case actionTypes.INCREMENT : {
            return {
                ...state,
                counter : state.counter + 1
            }
        }
        case "DECREMENT" : {
            return {
                ...state,
                counter : state.counter - 1
            }
        }
        case "ADD" :{
            return {
                ...state,
                counter : state.counter + action.payload
            }
        }
        case "SUBSTRACT" : {
            return {
                ...state,
                counter : state.counter - action.payload
            }
        }
        default:{
            return state;
        }
    }
    
}

export default rootReducer;