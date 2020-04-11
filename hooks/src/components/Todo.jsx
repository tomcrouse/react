import React from 'react';

const Todo = ({ todo, index, completed, deleteTodo }) => {
    console.log(todo, index)
    return (
        <div className="todo-item">
            <li
                style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}>
                {todo.text}
            </li>
            <button className='btn' onClick={() => completed(index)}>done</button>
            <button className='btnx' onClick={() => deleteTodo(index)}>x</button>
        </div>
    );
}

export default Todo;
