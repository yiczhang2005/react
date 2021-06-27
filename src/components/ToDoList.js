import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({ toDoList, handleToggle, handleFilter }) => {
    return (
        <div className="format_text"> Task List
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter} />
                )
            })}
            <button style={{ margin: '15px' }} onClick={handleFilter}>Clear Completed</button>
        </div>
    );
};

export default ToDoList;