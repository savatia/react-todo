import React from "react";
import ReactDom from "react-dom";
import {Provider, connect} from "react-redux";
import configureStore from "../store/configureStore";
import ToDoForm from "../components/ToDoForm";
import ToDoList from "../components/ToDoList";
import EditToDo from "../components/EditToDo";
import * as actions from "../actions/todoActions";

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = { todoList: [], editText: undefined, editIndex: undefined, showEditModal: false};
        this.showModal = this.showModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    closeModal(){
        this.setState({showEditModal: false});
    }
    showModal(index){

        this.setState({
            editText: this.state.todoList[index],
            editIndex: index,
            showEditModal: true
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            todoList: nextProps.todoList
        });
    }

    render(){
        return(
                <div className="container">
                    <div className="hoz-spacer"/>
                    <div className="col-sm-6  col-sm-offset-3">
                        <ToDoForm onSubmit={(text) => this.props.addToDo(text)  } />
                        <hr/>
                        <ToDoList todoList={this.state.todoList} 
                        removeEvent={(index) => this.props.removeToDo(index)}
                        editEvent={(index)=> this.showModal(index)}/>
                        <EditToDo saveEdit={undefined} 
                        close={this.closeModal}
                        show={this.state.showEditModal}
                        text={this.state.editText} 
                        index={this.saveEdit}/>
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
