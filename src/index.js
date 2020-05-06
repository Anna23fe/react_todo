//console.log('work');

import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/AppHeader/AppHeader';
import SearchBlock from './components/SearchBlock';
// const AppHeader = () => {
//   return <h1>Todo List</h1>;
// }


const SearchBlock = () => {

  const searchBlockText = ' What do you want to search'
  return <input placeholder={searchBlockText} />;
}



const App = () => {

  const todoData = [
    {label: 'Learn HTML', important: false },
    {label: 'Learn JS', important: true},
    {label: 'Learn React', important: false },
  ]

  return (<div>
    <div>
      <AppHeader />
      <SearchBlock />
      <TodoList todoItems={todoData} />
    </div>
    <div>
      <p>lorem</p>
    </div>
  </div>);
}

ReactDOM.render(<App />, document.getElementById('root'));