import React from 'react';
import './TodoListItem.css';

class TodoListItem extends React.Component{
  // constructor(){
 //   super();
 // this.onLabelClick = () => {
 //   console.log(this.props.label);
 // }
//}


// state = { 2-й раз коментили
//   done: false,
//   important: false,
// };

// onLabelClick = () => {
// this.setState((state) => {
//   return {
//     done: !state.done
//   };
// });
// };
// onImportantButtonClick = () =>{
//   this.setState({
//     important: true
//   });
// }

render(){
  const {label, onDelete, done, important, onToggleImportant, onToggleDone } = this.props;

  let classNames = 'todo-list-item'; 
    if (done) { 
    classNames += ' done';
  }
    if (important){
    classNames += ' important';
  }

  return (
  <div className= {classNames}>
    <span 
      className={"todo-list-label"}
      onClick= {onToggleDone}>
    { label }
    </span>

    <button
     className="btn btn-outline-success btn-important"
       onClick= {onToggleImportant}> <i className="fa fa-star" aria-hidden="true"> </i>  </button>
    <button className="btn btn-outline-danger"
    onClick={onDelete}> <i className="fa fa-trash" aria-hidden="true"> </i>  </button>
  </div>

);
}
}

export default TodoListItem;