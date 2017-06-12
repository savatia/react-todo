import React, {PropTypes} from "react";
import ToDo from "./ToDo";
import {connect} from  "react-redux";
import { CSSTransitionGroup } from 'react-transition-group';


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
              <CSSTransitionGroup transitionName="example" transitionEnterTimeout={700} transitionLeaveTimeout={700}>
                {
                    this.state.todoList.map((todo, index) => <ToDo key={todo} 
                    clickEvent={() => this.props.removeEvent(index)} 
                    editEvent={()=> this.props.editEvent(index)}
                    todo={todo}/>)
                }
                </CSSTransitionGroup>
            </div>

        )
    }
}

ToDoList.propTypes = {
  todoList: PropTypes.array.isRequired,
  removeEvent: PropTypes.func.isRequired,
  editEvent: PropTypes.func.isRequired
};

export default ToDoList;
