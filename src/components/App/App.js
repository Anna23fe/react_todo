import React from 'react';

import './App.css';
import AppHeader from '../AppHeader';
import SearchBlock from '../SearchBlock';
import TodoList from '../TodoList';
import ItemAddForm from '../ItemAddForm';
import ItemStatusFilter from '../ItemStatusFilter';
// const AppHeader = () => {
//   return <h1>Todo List</h1>;
// }
class App extends React.Component {
  ids =10;
 state = {
 todoData: [
  {label: 'Learn HTML', important: false, done: false, id: 1, },
  {label: 'Learn JS', important: false, done: false, id: 2,},
  {label: 'Learn React', important: false, done: false, id: 3,},

  ],
  detectedText: '',
  filter: 'all', //all,active,done
};

  deleteItem = (id) => {
    this.setState(({todoData}) => {
      const index = todoData.findIndex((elem) => elem.id === id);

      const newTodoDate = [
      ...todoData.slice(0, index),
      ...todoData.slice(index +1)
      ]

      return {
        todoData: newTodoDate
      };

    });
  }

  addItem = (text) =>{
    console.log('text');
    const item = {
       label: text,
     important: false,
     id: this.ids++
    }

    this.setState(({ todoData}) => {
      const newArr = [...todoData,item];

    return{
    todoData: newArr
    }
    })
  } 

toggleProp = (id, arr, prop) => {
  const index = arr.findIndex((elem) => elem.id === id);

   const oldObj = arr[index];
   const newObj = {...oldObj, [prop]: !oldObj[prop]};

 return [
    ...arr.slice(0, index),
    newObj,
     ...arr.slice(index+1)
  ];
}


  toggleDone = (id) => {

  //this.setState(({todoData}) => {
    //const index = todoData.findIndex((elem) => elem.id === id);

   // const oldObj = todoData[index];
   // const newObj = {...oldObj, done: !oldObj.done}
   // const newArr = [
   //   ...todoData.slice(0, index),
  //    newObj,
  //    ...todoData.slice(index+1)
   // ];
   // return{
  //    todoData: newArr
 //   } });
  this.setState(({ todoData}) => {
  return {
    todoData: this.toggleProp(id, todoData, 'done')
  };
});
 
  }

  toggleImportant= (id) => {
    this.setState(({ todoData}) => {
    return {
      todoData: this.toggleProp(id, todoData, 'important')
    };
  });
}
  onSearchChange = (detectedText) => {
    this.setState({ detectedText});
  }

  search = (arr, detectedText) => {
    if (detectedText.length === 0) {
      return arr;
    }
    return arr.filter((el) => {
      return el.label.toUpperCase().indexOf(detectedText.toUpperCase()) > -1;

    });
  }
  
  itemsFilter = (arr, filterText) => {
    switch(filterText) {
      case 'all':
        return arr;
      case 'active':
        return arr.filter((el) => !el.done);
      case 'done':
        return arr.filter((el) => el.done);
      default:
        return arr;
      
    } 
  }

  onItemsFilterChange = (filter) => {
    this.setState({filter});
  }

  render() {
    const { todoData, detectedText, filter} = this.state;
    const detectedItems = this.itemsFilter( this.search(todoData, detectedText), filter);
    const done= this.state.todoData.filter((el) => el.done).length;
    const todo= this.state.todoData.filter((el) => !el.done).length;
  return (
    <div className="App">
      <AppHeader toDo={todo} done={done}/>
      <div className="searchPanel d-flex"> 
      <SearchBlock
       onSearchChange={this.onSearchChange}
       />
       <ItemStatusFilter    filter ={filter}
       onItemsFilterChange={this.onItemsFilterChange}
       />
       </div>
      <TodoList 
       todoItems={detectedItems}
       onDelete={ this.deleteItem} 
       onToggleImportant={this.toggleImportant}
       onToggleDone={this.toggleDone} />
      <ItemAddForm onItemAdd={ this.addItem}/>
    </div>
  );
  }
}

export default App; 
