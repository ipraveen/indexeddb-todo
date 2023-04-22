import React from 'react';

function BookTable({ todos }) {

    if (todos.length === 0) return;

    return (
        <table>
            <tbody>
                {todos.map(({ text }, index) => (<tr key={index}><td>{text}</td></tr>))}
            </tbody>
        </table>
    );
}

export default BookTable;