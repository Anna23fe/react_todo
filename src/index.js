//console.log('work');

import React from 'react';
import ReactDOM from 'react-dom';

const AppHeader = () =>{
  return<h1>Todo List</h1>;
}

const SearchBlock = () => {
  return <input placeholder="search"></input>;
}

const TodoList = () => {
  return (<ul>
  <li>learn js</li>
  <li>learn react</li>
  </ul>);
}

const el = (
    <div>
    <AppHeader />
    <SearchBlock />
    <TodoList />
    </div>
);

console.log(el);
ReactDOM.render(el, document.getElementById('root'));