import React, { useState } from 'react';
import { useTodos } from '../TodoContext';
import TodoItem from './TodoItem';
import Filters from './Filters';

const TodoList: React.FC = () => {
  const { todos, filter } = useTodos();
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const handleDragStart = (e: React.DragEvent, index: number) => {
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e: React.DragEvent, dropIndex: number) => {
    e.preventDefault();
    if (draggedIndex !== null && draggedIndex !== dropIndex) {
      // Handle reordering logic here
    }
    setDraggedIndex(null);
  };

  if (filteredTodos.length === 0) {
    return (
      <div className="todo-container">
        <div className="empty-state">
          <p>No todos found</p>
        </div>
        <Filters />
      </div>
    );
  }

  return (
    <div className="todo-container">
      <div className="todo-list">
        {filteredTodos.map((todo, index) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            index={index}
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          />
        ))}
      </div>
      <Filters />
    </div>
  );
};

export default TodoList;
