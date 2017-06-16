import React from "react";
import { connect} from "react-redux";

import List from "../components/List";
import ToDoListItem from "./ToDoListItem";

class ToDoList extends React.Component{
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
            <List>
                {
                    this.state.todoList.map((todo) =>{
                        return <ToDoListItem todo={todo} key={todo}/>
                    })
                }
            </List>
            );
    }
} 

function mapStateToProps(state, ownProps){
    return {
        todoList: state.todoList
    };
}

function mapDispatchToProps(){
    return ({});
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
