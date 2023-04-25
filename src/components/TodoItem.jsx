import React from 'react';

function TodoItem({ todo, onDelete, onTodoUpdate }) {
    const { id, text, completed, label } = todo;

    const textDecoration = completed ? 'line-through' : '';

    return (
        <div className='todo-item'>
            <section>
                <input type='checkbox' checked={completed} onChange={() => onTodoUpdate({ ...todo, completed: !completed })}></input>
                <span style={{ textDecoration }}>{text}</span> {label && <small className='label'>{label}</small>}
            </section>
            <button onClick={() => onDelete(id)}>X</button>
        </div>
    );
}

export default TodoItem;