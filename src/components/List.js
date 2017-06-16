import React, {PropTypes} from "react";
import { CSSTransitionGroup } from 'react-transition-group';


class ToDoList extends React.Component{
     constructor(props){
        super(props);
        this.state = {};
        this.state.listItems = this.props.children;
     }

     componentWillReceiveProps(nextProps) {
         console.log(nextProps.children);
        this.setState({
            listItems: nextProps.children
        });
    }

    render(){
        return(
              <CSSTransitionGroup component="div" transitionName="example" transitionEnterTimeout={700} transitionLeaveTimeout={700}>
                {
                    this.state.listItems
                }
                </CSSTransitionGroup>


        )
    }
}

// ToDoList.propTypes = {
//   listItems: PropTypes.array.isRequired
// };

export default ToDoList;
