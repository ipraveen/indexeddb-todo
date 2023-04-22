import React, { useEffect, useState } from 'react';
import TodoInput from './TodoInput';
import TodosTable from './TodosTable';
import { DB, TODO_STORE } from '../db/db';

function Todos() {

    const [todos, setTodos] = useState([]);


    useEffect(() => {

        const load = async () => {
            const db = await DB.openDB()
            const store = db.transaction([TODO_STORE]).objectStore(TODO_STORE);
            const request = store.getAll();
            request.onsuccess = () =>{
                const dbTodos = request.result;
                setTodos(dbTodos);
            }
        }

        load();
    }, [])

    const handleSubmit =  async(todo) => {
        // DB
        const db = await DB.openDB()
        const store = db.transaction([TODO_STORE], 'readwrite').objectStore(TODO_STORE);
        const request =  store.add(todo);

        request.onsuccess = () =>{
            const todoDb = request.result;

            console.log({todoDb});

            setTodos((todos) => [...todos, todoDb]);
        }


        // Write in DB

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