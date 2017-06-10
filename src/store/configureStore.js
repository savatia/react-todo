import {createStore, applyMiddleware, combineReducers} from "redux";
import todoReducer from "../reducers/todoReducer";

export default function configureStore(){
    return createStore(
        combineReducers({todoList: todoReducer}),
        applyMiddleware()
    )
}