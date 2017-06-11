import * as todoActions from "../actions/todoActions";
import initialState from "./initialState";

export default function todoReducer(state = initialState.todoList, action){
    switch(action.type){
        case "ADD_TODO":
           return [...state, action.payload];
           break;
        case "REMOVE_TODO":
            return [
                ...state.slice(0, action.payload),
                ...state.slice(action.payload + 1)
            ]
        default:
            return state;
    }
}