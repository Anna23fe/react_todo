import Ract from 'react';
import TodoListItem from './TodoListItem';
import TodoListItems from './TodoListItem';


const TodoList = () => {
    const items = [ ' Learn html', 'learn mmm'];
  
    return (<ul>
      <li><TodoListItem/></li>
      <li><TodoListItem/></li>
    </ul>);
  }
  
  export default TodoList;