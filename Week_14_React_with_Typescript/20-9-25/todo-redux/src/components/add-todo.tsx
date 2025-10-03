import React, { useState } from "react"
import { useAppDispatch } from "../hooks/useStore";
import { add } from "../store/todo";

export default function TodoInput(){
  const [text, setText] = useState<string>("");
  const dispatch = useAppDispatch();

  const handleAdd = () => {
    if (text.trim()) {
      dispatch(add({text: text.trim()}));
      setText("");
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  };

  return (
    <div className="todo-input">
      <input 
        type="text" 
        value={text} 
        onChange={e => {setText(e.target.value)}}
        onKeyPress={handleKeyPress}
        placeholder="What needs to be done?"
        className="todo-input-field"
      />
      <button onClick={handleAdd} className="add-button" disabled={!text.trim()}>
        Add Todo
      </button>
    </div>
  )
}