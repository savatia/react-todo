import React from "react";
import {connect} from "react-redux";

import AddItemForm from "../components/AddItemForm";
import ToDoList from "./ToDoList";
import * as actions from "../actions/todoActions";

class App extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
                <div className="container">
                    <div className="hoz-spacer"/>
                    <div className="row col-sm-6  col-sm-offset-3">
                        <AddItemForm onSubmit={(text) => this.props.addToDo(text)  } />
                        <hr/>
                        <ToDoList/>
                    </div>                   
                </div>
            );
    }
} 

function mapStateToProps(state){
    return({});
}

function mapDispatchToProps(dispatch) {
  return ({
      addToDo: (text)=> dispatch(actions.addToDo(text))
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
