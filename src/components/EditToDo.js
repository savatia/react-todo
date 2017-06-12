import React, {PropTypes} from "react";
import {Modal, Button, Popover, Tooltip} from "react-bootstrap";

class EditToDo extends React.Component {
    constructor(props){
        super(props);
        this.state = {showModal: this.props.show,
            text: this.props.text,
            index: this.props.index,
            close: this.props.close,
            saveEdit: this.props.saveEdit};
            this.close = this.close.bind(this);
            this.handleInputChange = this.handleInputChange.bind(this);
    }

    close(){
        this.state.close();
        this.setState({ close: false});
    }

    handleInputChange(e){
        this.setState({text: e.target.value});
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            showModal: nextProps.show,
            text: nextProps.text,
            index: nextProps.index,
            saveEdit: nextProps.saveEdit,
            close: nextProps.close
        });
    }

  render() {
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    const tooltip = (
      <Tooltip id="modal-tooltip">
        wow.
      </Tooltip>
    );

    return (
      <div>
        <Modal show={this.state.showModal} onHide={this.state.close}>
          <Modal.Header closeButton>
            <Modal.Title>Edit ToDo</Modal.Title>
          </Modal.Header>
          <form>
            <Modal.Body>
                 <input required="required" onChange={this.handleInputChange} value={this.state.text} type="text" className="form-control"></input>
            </Modal.Body>
            <Modal.Footer>
                <Button  bsStyle="success" type="submit" onClick={this.close}>Save</Button>
                <Button  bsStyle="danger" onClick={this.close}>Close</Button>
            </Modal.Footer>
          </form>
        </Modal>
      </div>
    );
  }
}

EditToDo.propTypes = {
  saveEdit: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  show: PropTypes.bool.isRequired
};

export default EditToDo;