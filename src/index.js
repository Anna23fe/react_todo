//console.log('work');

import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/AppHeader';
import SearchBlock from './components/SearchBlock';
// const AppHeader = () => {
//   return <h1>Todo List</h1>;
// }


const SearchBlock = () => {

  const searchBlockText = ' What do you want to search'
  return <input placeholder={searchBlockText} />;
}



const App = () => {
  return (<div>
    <div>
      <AppHeader />
      <SearchBlock />
      <TodoList />
    </div>
    <div>
      <p>lorem</p>
    </div>
  </div>);
}

ReactDOM.render(<App />, document.getElementById('root'));