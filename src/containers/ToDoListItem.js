import React from "react";
import {connect} from "react-redux";

import ListItem from "../components/ListItem";
import * as actions from "../actions/todoActions";

class ToDoListItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {index: this.props.index, todo: this.props.todo};
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
        });
    }

    render(){
        return(
            <ListItem removeEvent={() => this.props.removeToDo(this.props.index)} text={this.props.todo}/>
            );
    }
} 
function mapStateToProps(){return {}; };
function mapDispatchToProps(dispatch) {
  return ({
      removeToDo: (index) => dispatch(actions.removeToDo(index)),
      editToDo: (index) => {}
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoListItem);
