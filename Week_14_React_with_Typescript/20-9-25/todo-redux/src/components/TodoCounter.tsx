import React from 'react';
import { useAppSelector } from '../hooks/useStore';
import { selectActiveTodosCount } from '../store/todo';

export default function TodoCounter() {
    const activeTodosCount = useAppSelector(selectActiveTodosCount);

    return (
        <div className="todo-counter">
            <span>
                {activeTodosCount} {activeTodosCount === 1 ? 'item' : 'items'} left
            </span>
        </div>
    );
}