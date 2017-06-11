import React, {PropTypes} from "react";

class ToDo extends React.Component{
    render(){
        return(
            <div>
                <a onClick={this.props.clickEvent} href="#">{this.props.todo}</a>
            </div>
        )
    }
}

ToDo.propTypes = {
  clickEvent: PropTypes.func.isRequired,
  todo: PropTypes.string.isRequired
};
export default ToDo;