import React, { useState } from 'react';


function TodoInput({ onSubmit }) {

    const [todo, setTodo] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();

        if (todo.includes('#')) {
            const [text, label] = todo.split('#')
            onSubmit({
                text: text.trim(),
                label,
                completed: false
            });
        } else {
            onSubmit({
                text: todo,
                completed: false
            });
        }

        setTodo('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="What Next?" value={todo} onChange={(e) => setTodo(e.target.value)} />
        </form>
    );
}

export default TodoInput;