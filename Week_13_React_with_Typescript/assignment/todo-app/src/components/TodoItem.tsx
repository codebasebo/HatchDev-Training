import React from 'react';
import { useTodos } from '../TodoContext';
import { Todo } from '../types';

interface TodoItemProps {
  todo: Todo;
  index: number;
  onDragStart: (e: React.DragEvent, index: number) => void;
  onDragOver: (e: React.DragEvent) => void;
  onDrop: (e: React.DragEvent, index: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  index,
  onDragStart,
  onDragOver,
  onDrop,
}) => {
  const { toggleTodo, deleteTodo } = useTodos();

  return (
    <div
      className={`todo-item ${todo.completed ? 'completed' : ''}`}
      draggable
      onDragStart={(e) => onDragStart(e, index)}
      onDragOver={onDragOver}
      onDrop={(e) => onDrop(e, index)}
    >
      <div
        className={`todo-checkbox ${todo.completed ? 'completed' : ''}`}
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.completed && (
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
            <path
              fill="none"
              stroke="#FFF"
              strokeWidth="2"
              d="M1 4.304L3.696 7l6-6"
            />
          </svg>
        )}
      </div>
      <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
        {todo.text}
      </span>
      <button
        className="delete-btn"
        onClick={() => deleteTodo(todo.id)}
        aria-label="Delete todo"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
          <path
            fill="#494C6B"
            fillRule="evenodd"
            d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
          />
        </svg>
      </button>
    </div>
  );
};

export default TodoItem;