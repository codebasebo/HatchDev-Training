import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './index';

export interface Todo {
    id: number, 
    text: string,
    completed: boolean
}

export interface Todos {
    todos: Todo[],
    filter: "ALL" | "ACTIVE" | "COMPLETED",
    counter: number
}

const initialState: Todos = {
    todos: [],
    counter: 1, 
    filter: "ALL"
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        /**
         * Marks the todo with given id as completed
         * @param state 
         * @param action 
         */
        completed: (state, action: PayloadAction<Pick<Todo, "id">>) => {
            let todo = state.todos.find(todo => todo.id === action.payload.id);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        add: (state, action: PayloadAction<Pick<Todo, "text">>) => {
            state.todos.push({id: state.counter, text: action.payload.text, completed: false});
            state.counter += 1;
        },
        /**
         * Deletes the todo with given id
         * @param state 
         * @param action 
         */
        deleteTodo: (state, action: PayloadAction<Pick<Todo, "id">>) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
        },
        /**
         * Sets the current filter
         * @param state 
         * @param action 
         */
        setFilter: (state, action: PayloadAction<"ALL" | "ACTIVE" | "COMPLETED">) => {
            state.filter = action.payload;
        }
    }
});

export const { completed, add, deleteTodo, setFilter } = todoSlice.actions;

// Selectors
export const selectTodos = (state: RootState) => state.todo.todos;
export const selectFilter = (state: RootState) => state.todo.filter;
export const selectFilteredTodos = (state: RootState) => {
    const todos = state.todo.todos;
    const filter = state.todo.filter;
    
    switch (filter) {
        case 'ACTIVE':
            return todos.filter(todo => !todo.completed);
        case 'COMPLETED':
            return todos.filter(todo => todo.completed);
        default:
            return todos;
    }
};
export const selectActiveTodosCount = (state: RootState) => 
    state.todo.todos.filter(todo => !todo.completed).length;