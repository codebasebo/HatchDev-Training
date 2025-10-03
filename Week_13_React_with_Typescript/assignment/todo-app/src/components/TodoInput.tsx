import React, { useState } from 'react';
import { useTodos } from '../TodoContext';

const TodoInput: React.FC = () => {
  const [input, setInput] = useState('');
  const { addTodo } = useTodos();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input.trim());
      setInput('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-input-container">
      <div className="input-circle"></div>
      <input
        type="text"
        className="todo-input"
        placeholder="Create a new todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
      />
    </form>
  );
};

export default TodoInput;