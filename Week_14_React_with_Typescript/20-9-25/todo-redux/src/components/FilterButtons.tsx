import React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/useStore';
import { setFilter, selectFilter } from '../store/todo';

export default function FilterButtons() {
    const dispatch = useAppDispatch();
    const currentFilter = useAppSelector(selectFilter);

    const filters = [
        { key: 'ALL', label: 'All' },
        { key: 'ACTIVE', label: 'Active' },
        { key: 'COMPLETED', label: 'Completed' }
    ] as const;

    return (
        <div className="filter-buttons">
            {filters.map((filter) => (
                <button
                    key={filter.key}
                    onClick={() => dispatch(setFilter(filter.key))}
                    className={`filter-button ${currentFilter === filter.key ? 'active' : ''}`}
                >
                    {filter.label}
                </button>
            ))}
        </div>
    );
}