import React, {PropTypes} from "react";
import ToDo from "./ToDo";
import {connect} from  "react-redux";

class ToDoList extends React.Component{
     constructor(props){
        super(props);
        this.state = {};
        this.state.todoList = this.props.todoList;
     }

     componentWillReceiveProps(nextProps) {
        this.setState({
            todoList: nextProps.todoList
        });
    }

    render(){
        return(
            <div>
                {
                    this.state.todoList.map(todo => <ToDo todo={todo}/>)
                }
            </div>
        )
    }
}

ToDoList.propTypes = {
  todoList: PropTypes.array.isRequired
};

export default ToDoList;
