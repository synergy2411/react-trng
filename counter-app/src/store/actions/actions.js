export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD = "ADD";
export const SUBSTRACT = "SUBSTRACT";

// Action Creators
export function onIncrement(){
    return {
        type : INCREMENT
    }
}

export function onAdd(value){
    return {
        type : ADD,
        payload : value
    }
}