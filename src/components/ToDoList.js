import React, {PropTypes} from "react";
import ToDo from "./ToDo";
import {connect} from  "react-redux";

class ToDoList extends React.Component{
     constructor(props){
        super(props);
        this.state = {};
        this.state.todoList = this.props.todoList;
    }
 

    render(){
        return(
            <div>
                {
                    this.props.todoList.map(todo => <ToDo todo={todo}/>)
                }
            </div>
        )
    }
}

ToDoList.propTypes = {
  todoList: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps){
    return {
        todoList: state.todoList
    };
}


function mapDispatchToProps(dispatch) {
  return ({});
}
export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
