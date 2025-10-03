import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { Todo, FilterType, TodoContextType } from './types';
import { v4 as uuidv4 } from 'uuid';

interface TodoState {
  todos: Todo[];
  filter: FilterType;
}

type TodoAction =
  | { type: 'ADD_TODO'; payload: string }
  | { type: 'TOGGLE_TODO'; payload: string }
  | { type: 'DELETE_TODO'; payload: string }
  | { type: 'SET_FILTER'; payload: FilterType }
  | { type: 'CLEAR_COMPLETED' }
  | { type: 'REORDER_TODOS'; payload: { startIndex: number; endIndex: number } }
  | { type: 'LOAD_TODOS'; payload: Todo[] };

const initialState: TodoState = {
  todos: [],
  filter: 'all',
};

const todoReducer = (state: TodoState, action: TodoAction): TodoState => {
  switch (action.type) {
    case 'ADD_TODO':
      const newTodo: Todo = {
        id: uuidv4(),
        text: action.payload,
        completed: false,
        createdAt: new Date(),
      };
      return {
        ...state,
        todos: [...state.todos, newTodo],
      };

    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload),
      };

    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload,
      };

    case 'CLEAR_COMPLETED':
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.completed),
      };

    case 'REORDER_TODOS':
      const { startIndex, endIndex } = action.payload;
      const result = Array.from(state.todos);
      const [removed] = result.splice(startIndex, 1);
      result.splice(endIndex, 0, removed);
      return {
        ...state,
        todos: result,
      };

    case 'LOAD_TODOS':
      return {
        ...state,
        todos: action.payload,
      };

    default:
      return state;
  }
};

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const TodoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  // Load todos from localStorage on mount
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      try {
        const parsedTodos = JSON.parse(savedTodos).map((todo: any) => ({
          ...todo,
          createdAt: new Date(todo.createdAt),
        }));
        dispatch({ type: 'LOAD_TODOS', payload: parsedTodos });
      } catch (error) {
        console.error('Failed to load todos from localStorage:', error);
      }
    }
  }, []);

  // Save todos to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state.todos));
  }, [state.todos]);

  const addTodo = (text: string) => {
    if (text.trim()) {
      dispatch({ type: 'ADD_TODO', payload: text.trim() });
    }
  };

  const toggleTodo = (id: string) => {
    dispatch({ type: 'TOGGLE_TODO', payload: id });
  };

  const deleteTodo = (id: string) => {
    dispatch({ type: 'DELETE_TODO', payload: id });
  };

  const setFilter = (filter: FilterType) => {
    dispatch({ type: 'SET_FILTER', payload: filter });
  };

  const clearCompleted = () => {
    dispatch({ type: 'CLEAR_COMPLETED' });
  };

  const reorderTodos = (startIndex: number, endIndex: number) => {
    dispatch({ type: 'REORDER_TODOS', payload: { startIndex, endIndex } });
  };

  const value: TodoContextType = {
    todos: state.todos,
    filter: state.filter,
    addTodo,
    toggleTodo,
    deleteTodo,
    setFilter,
    clearCompleted,
    reorderTodos,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export const useTodos = (): TodoContextType => {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error('useTodos must be used within a TodoProvider');
  }
  return context;
};