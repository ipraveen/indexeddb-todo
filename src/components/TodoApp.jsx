import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodosTable from './TodosTable';

function Todos() {

    const [todos, setTodos] = useState([]);

    const handleSubmit = async (todo) => {
        setTodos((todos) => [...todos, todo])
    }

    return (
        <main>
            <h2>IndexedDB Master Class</h2>
            <h1>TODOs App</h1>
            <TodoInput onSubmit={handleSubmit} />
            <TodosTable todos={todos} />
        </main>
    );
}

export default Todos;