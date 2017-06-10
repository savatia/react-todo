import React from "react";
import ReactDom from "react-dom";
import {Provider, connect} from "react-redux";
import configureStore from "../store/configureStore";
import ToDoForm from "../components/ToDoForm";
import ToDoList from "../components/ToDoList";
import * as actions from "../actions/todoActions";
const store = configureStore();
console.log(store.getState());

export default class App extends React.Component{
    render(){
        return(
            <Provider store={store}>
                <div>
                    <ToDoForm onSubmit={(text) =>{ store.dispatch(actions.addToDo(text)); console.log(store.getState().todoList)  } } />
                    <ToDoList />
                </div>
            </Provider>
            );
    }
} 

