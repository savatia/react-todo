import * as todoActions from "../actions/todoActions";
import initialState from "./initialState";

export default function todoReducer(state = initialState.todoList, action){
    switch(action.type){
        case "ADD_TODO":
           return [...state, { id: guid(), text: action.payload}];
           break;
        case "REMOVE_TODO":
            var index = findWithAttr(state, "id", action.payload.id);
            let newItems = state.slice();
            newItems.splice(index, 1);
            return newItems;
        case "EDIT_TODO":
            return state.map(todo =>{
                if(todo.id === action.payload.id){
                    return  {...todo, text: action.payload.text };
                }
                else{return todo};
               
            } 
            );
        default:
            return state;
    }
}

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

function findWithAttr(array, attr, value) {
    for(var i = 0; i < array.length; i += 1) {
        if(array[i][attr] === value) {
            return i;
        }
    }
    return -1;
}