import React, {PropTypes} from "react";

class ToDo extends React.Component{
    render(){
        return(
            <div className="well todo-item">
                {this.props.text}
        
                <button onClick={this.props.removeEvent} type="button" className="close" aria-label="Close">
                    <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                </button>
                <button onClick={this.props.editEvent} type="button" className="close" aria-label="Close">
                    <span aria-hidden="true" className="glyphicon glyphicon-pencil"></span>
                </button>
            </div>
        )
    }
}

ToDo.propTypes = {
  removeEvent: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  editEvent: PropTypes.func.isRequired
};
export default ToDo;