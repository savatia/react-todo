import React from "react";
import {connect} from "react-redux";

import {Modal, Button} from "react-bootstrap";

import ListItem from "../components/ListItem";
import * as actions from "../actions/todoActions";

class ToDoListItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {text: "", todo: this.props.todo, showModal: false};
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    close() {
        this.setState({ showModal: false });
    }

    open() {
        this.setState({ showModal: true , text: this.state.todo.text});
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            todo: nextProps.todo
        });
    }

    handleSubmit(e){
        
        e.preventDefault();
        this.props.editToDo(this.state.text, this.props.todo.id);
        this.close();
    }

    handleInputChange(e){
        this.setState({text: e.target.value});
    }
    render(){
        return(
            <div>
                <ListItem removeEvent={() => this.props.removeToDo(this.props.todo)} text={this.props.todo.text} editEvent={() => this.open()}/>
                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit "{this.props.todo.text}"</Modal.Title>
                    </Modal.Header>
                    <form onSubmit={this.handleSubmit}>
                        <Modal.Body>
                            <input required="required" onChange={this.handleInputChange} value={this.state.text} type="text" className="form-control"></input>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button bsStyle="success" type="submit">Save</Button>
                            <Button bsStyle="danger" onClick={this.close}>Close</Button>
                        </Modal.Footer>
                    </form>
                </Modal>
            </div>
            );
    }
} 
function mapStateToProps(){return {}; };
function mapDispatchToProps(dispatch) {
  return ({
      removeToDo: (todo) => dispatch(actions.removeToDo(todo)),
      editToDo: (text, id) => dispatch(actions.editToDo(text, id))
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoListItem);
