const { createStore } = require("redux");


const initialState = {
    counter : 0
}
// Reducers
function rootReducer(state = initialState, action){
    if(action.type === "INCREMENT"){
        return {
         counter : state.counter + 1   
        }
    }else if(action.type === "DECREMENT"){
        return {
            counter : state.counter - 1
        }
    }else if(action.type === "ADD"){
        return {
            counter : state.counter + action.payload
        }
    }else{
        return state;
    }
}

// Store
const store = createStore(rootReducer);


// Subscription

store.subscribe(() => {
    console.log("[STATE]", store.getState());
})

// Dispatch Action
store.dispatch({type : "INCREMENT"});

// console.log("[AFTER IN ACTION - STATE]", store.getState());

store.dispatch({type : "DECREMENT"});

// console.log("[AFTER DE ACTION - STATE]", store.getState());

store.dispatch({type : "ADD", payload : 5})