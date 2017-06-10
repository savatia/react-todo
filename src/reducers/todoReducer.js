import * as todoActions from "../actions/todoActions";
import initialState from "./initialState";

export default function todoReducer(state = initialState.todoList, action){
    switch(action.type){
        case "ADD_TODO":
           return [...state, action.payload];
           break;
        default:
            return state;
    }
}