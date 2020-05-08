import React from 'react';
import './TodoList.css';
import TodoListItem from './TodoListItem';


const TodoList = ( {todoItems}) => {
    
    const elements = todoItems.map((element) => {

  const { id, ...otherProps } = element;

    return  (
    <li key ={id} className='list-group-item'>
        <TodoListItem {...otherProps}/>
        </li> );
});

return (<ul className='list-group'>
    {elements}
</ul>);
}
  
//       label= {todoItems[0].label} 
//       important={todoItems[0].important} /></li>
//        <li><TodoListItem 
//       label= {todoItems[1].label} 
//       important={todoItems[1].important} /></li>
//        <li><TodoListItem 
//       label= {todoItems[2].label} 
//       important={todoItems[2].important} /></li>
//     </ul>); 
//   }
  
  export default TodoList;