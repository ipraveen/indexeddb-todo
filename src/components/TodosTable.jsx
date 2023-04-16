import React from 'react';

function BookTable({ todos }) {

    if (todos.length === 0) return;

    return (
        <table>
            <tbody>
                {todos.map(({ id, text }) => (<tr key={id}><td>{text}</td></tr>))}
            </tbody>
        </table>
    );
}

export default BookTable;