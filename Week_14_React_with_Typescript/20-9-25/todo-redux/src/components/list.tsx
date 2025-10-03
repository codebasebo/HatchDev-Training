import React, { useState } from "react"
import { useAppDispatch, useAppSelector } from "../hooks/useStore"
import { completed, deleteTodo, selectFilteredTodos } from "../store/todo"

export default function TodoList() {
  const todos = useAppSelector(selectFilteredTodos);
  const dispatch = useAppDispatch();
  const [deletingId, setDeletingId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    dispatch(completed({id}));
  }

  const handleDelete = (id: number) => {
    setDeletingId(id);
    setTimeout(() => {
      dispatch(deleteTodo({id}));
      setDeletingId(null);
    }, 200);
  }

  if (todos.length === 0) {
    return (
      <div className="todo-list">
        <p className="empty-state">No todos found. Add some tasks to get started!</p>
      </div>
    );
  }

  return (
    <div className="todo-list">
      {todos.map(todo => 
        <div key={todo.id} className={`todo-item ${deletingId === todo.id ? 'deleting' : ''}`}>
          <div className="todo-content">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggle(todo.id)}
              className="todo-checkbox"
              title={`Mark "${todo.text}" as ${todo.completed ? 'incomplete' : 'complete'}`}
            />
            <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
              {todo.text}
            </span>
          </div>
          <button
            onClick={() => handleDelete(todo.id)}
            className="delete-button"
            aria-label={`Delete "${todo.text}"`}
            title={`Delete "${todo.text}"`}
          >
            ×
          </button>
        </div>
      )}
    </div>
  )
}