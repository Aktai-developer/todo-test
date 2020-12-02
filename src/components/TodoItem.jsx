import React,{ useState } from 'react';
import {useDispatch} from "react-redux";

import {deleteTodo, updateTodo} from "../redux/actions"

const TodoItem = ({todo, idx}) => {
    const[editable,setEditable] = useState(false)
    const[name,setName] = useState(todo.name)
    const dispatch = useDispatch()
    const taskChecked = () => {
       dispatch(updateTodo({...todo, done: !todo.done}))
    }
    const isDoneStyle = {
      textDecoration: "line-through"
    }
    return (
        <div>

            <div className="row mx-2 align-item-center align-items-center">
                <div className="mr-2">{idx + 1}</div>
                <input type="checkbox" checked={todo.done} onChange={taskChecked}/>
                <div className='col'>
                    {editable ?
                      <input type="text" className="form-control" value={name} onChange={(e) => {setName(e.target.value)}}/> :
                      <h4 style={todo.done ? isDoneStyle : null} className="m-0">{todo.name}</h4>}
                </div>
                <button className="btn btn-primary m-2" onClick={()=> {
                    dispatch(updateTodo(
                        {
                            ...todo,
                            name:name
                        }
                    ))
                    if (editable){
                            setName(todo.name)
                    }
                    setEditable(!editable)
                }}>{editable ? "Update" : "Edit"}</button>
                <button className="btn btn-danger m-2" onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
            </div>
        </div>
    );
};

export default TodoItem;