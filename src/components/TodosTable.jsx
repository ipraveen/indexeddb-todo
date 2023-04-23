import React from 'react';
import TodoItem from './TodoItem';

function BookTable({ todos, onDelete, onTodoUpdate }) {

    if (todos.length === 0) return;

    return (
        <table>
            <tbody>
                {todos.map((todo) => (<tr key={todo.id}><td><TodoItem todo={todo} onDelete={onDelete} onTodoUpdate={onTodoUpdate}/></td></tr>))}
            </tbody>
        </table>
    );
}

export default BookTable;