import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodosTable from './TodosTable';

function Todos(props) {

    const [todos, setTodos] = useState([]);

    const handleSubmit = async (todo) => {
        setTodos((todos) => [...todos, todo])
    }

    return (
        <main>
            <h1>TODOs</h1>
            <TodoInput onSubmit={handleSubmit} />
            <TodosTable todos={todos} />
        </main>
    );
}

export default Todos;