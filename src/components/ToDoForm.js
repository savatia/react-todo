import React from "react";

export default class ToDoForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {text: ''};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleSubmit(e){
             
        e.preventDefault();
        this.props.onSubmit(this.state.text);
         this.setState({text: ""});
   
    }

    handleInputChange(e){
        this.setState({text: e.target.value});
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleInputChange} value={this.state.text} type="text" className="form"></input>
                <input type="submit" className="btn btn-info"/>
            </form>
        )
    }
}