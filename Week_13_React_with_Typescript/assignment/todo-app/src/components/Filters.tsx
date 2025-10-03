import React from 'react';
import { useTodos } from '../TodoContext';

const Filters: React.FC = () => {
  const { todos, filter, setFilter, clearCompleted } = useTodos();
  const itemsLeft = todos.filter(todo => !todo.completed).length;

  return (
    <div className="todo-footer">
      <span className="items-left">{itemsLeft} items left</span>
      
      <div className="filter-buttons">
        <button 
          onClick={() => setFilter('all')} 
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
        >
          All
        </button>
        <button 
          onClick={() => setFilter('active')} 
          className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
        >
          Active
        </button>
        <button 
          onClick={() => setFilter('completed')} 
          className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
        >
          Completed
        </button>
      </div>
      
      <button onClick={clearCompleted} className="clear-completed">
        Clear Completed
      </button>
    </div>
  );
};

export default Filters;
