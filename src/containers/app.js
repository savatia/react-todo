import React from "react";
import ReactDom from "react-dom";
import {Provider, connect} from "react-redux";
import configureStore from "../store/configureStore";
import ToDoForm from "../components/ToDoForm";
import ToDoList from "../components/ToDoList";
import * as actions from "../actions/todoActions";

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = { todoList: []};
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            todoList: nextProps.todoList
        });
    }

    render(){
        return(
                <div className="container">
                    <hr/>
                    <div className="col-sm-6  col-sm-offset-3">
                        <ToDoForm onSubmit={(text) => this.props.addToDo(text)  } />
                        <ToDoList todoList={this.state.todoList} removeEvent={(index) => this.props.removeToDo(index)}/>
                    </div>
                   
                </div>
            );
    }
} 

function mapStateToProps(state, ownProps){
    return {
        todoList: state.todoList
    };
}


function mapDispatchToProps(dispatch) {
  return ({
      addToDo: (text)=> dispatch(actions.addToDo(text)),
      removeToDo: (index) => dispatch(actions.removeToDo(index))
  });
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
