import React, { useEffect, useState } from 'react';
import TodoInput from './TodoInput';
import TodosTable from './TodosTable';
import todoDao from '../db/dao/todoDao';
import TodoLabels from './TodoLabels';

function Todos() {

    const [todos, setTodos] = useState([]);
    const [labels, setLabels] = useState();
    const [activeLabel, setActiveLabel] = useState();


    useEffect(() => {

        const load = async () => {
            const todos = await todoDao.getAll({label: activeLabel});
            setTodos(todos);
        }

        load();
    }, [activeLabel])

    useEffect(() => {

        const load = async () => {
            const labels = await todoDao.getLabels();
            setLabels(labels);
        }

        load();
    }, [todos.length])

    const handleSubmit = async (todo) => {
        const todoDb = await todoDao.add(todo);
        setTodos((todos) => [...todos, todoDb]);

    }

    const handleTodoDelete = async (id) => {
        // Delete Todo
        await todoDao.delete(id);

        const todos = await todoDao.getAll({label: activeLabel});
        setTodos(todos);
    }

    const handleTodoUpdate = async (todo) => {

        await todoDao.update(todo);

        const todos = await todoDao.getAll();
        setTodos(todos);
    }

    return (
        <main>
            <h2>IndexedDB Master Class</h2>
            <h1>TODOs App</h1>
            <TodoInput onSubmit={handleSubmit} />
            {Array.isArray(labels) &&  <TodoLabels labels={labels} activeLabel={activeLabel} setActiveLabel={setActiveLabel}/>}
            <TodosTable todos={todos} onDelete={handleTodoDelete} onTodoUpdate={handleTodoUpdate} />
        </main>
    );
}

export default Todos;