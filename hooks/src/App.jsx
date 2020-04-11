import React, { useState } from 'react';
import './App.css'
import Todo from './components/Todo'
import TodoForm from './components/TodoForm'

const App = () => {

    const [todos, setTodos] = useState([{
        text: 'Learn JS',
        isCompleted: false,
        id: 1
    }, {
        text: 'Learn React',
        isCompleted: false,
        id: 2
    },
    {
        text: 'Learn NodeJS',
        isCompleted: false,
        id: 3
    }])

    const addTodo = (text) => {
        const newState = [...todos, { text }]
        setTodos(newState)
    }

    const completed = (index) => {
        const newState = [...todos]
        newState[index].isCompleted = true
        setTodos(newState)
    }

    const deleteTodo = index => {
        const newState = [...todos]
        newState.splice(index, 1)
        setTodos(newState)
    }


    return (
        <div className="app">
            <ul className="todo-list">
                {todos.map((todo, id) => {
                    return <Todo key={id} index={id}
                        todo={todo}
                        completed={completed}
                        deleteTodo={deleteTodo} />
                })}
            </ul>
            <TodoForm addTodo={addTodo} />
        </div>
    );
}

export default App;
