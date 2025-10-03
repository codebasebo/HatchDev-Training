import React from 'react';
import './App.css';
import TodoList from './components/list';
import TodoInput from './components/add-todo';
import FilterButtons from './components/FilterButtons';
import TodoCounter from './components/TodoCounter';

function App() {
  return (
    <div className="App">
      <div className="todo-container">
        <header className="todo-header">
          <h1>Todo App</h1>
          <p>Organize your tasks efficiently</p>
        </header>
        
        <main className="todo-main">
          <TodoInput />
          <FilterButtons />
          <TodoList />
        </main>
        
        <footer className="todo-footer">
          <TodoCounter />
        </footer>
      </div>
    </div>
  );
}

export default App;