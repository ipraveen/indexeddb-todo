import React from 'react';

function TodoItem({ todo, onDelete }) {
    const { id, text } = todo;

    return (
        <div className='todo-item'>
            <span>{text}</span><button onClick={() => onDelete(id)}>X</button>
        </div>
    );
}

export default TodoItem;