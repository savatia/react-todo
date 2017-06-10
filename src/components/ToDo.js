import React from "react";

export default class ToDo extends React.Component{
    render(){
        return(
            <div>
                {this.props.todo}
            </div>
        )
    }
}