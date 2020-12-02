import React from 'react'
import TodoItem from "./TodoItem";
import {useSelector} from "react-redux";


const TodoList = () => {
    const todos = useSelector((s) => s)
    return (
        <div className='my-5'>
            {
                todos.map((todo, idx) => (
                    <TodoItem key={todo.id} todo={todo} idx={idx}/>
                ))
            }
        </div>
    )
}

export default TodoList