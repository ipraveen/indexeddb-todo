import React from 'react';

function TodoLabels({ labels, activeLabel, setActiveLabel }) {

    console.log({ labels });
    return (
        <div className='todo-labels'>
            {labels.map(label => <button className={activeLabel === label ? 'active' : ''} key={label} onClick={() => setActiveLabel(label)}>{label}</button>)}

            <button className='clear' onClick={() => setActiveLabel(null)}> clear</button>
        </div>
    );
}

export default TodoLabels;