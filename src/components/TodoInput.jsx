import React, {useState} from 'react';
import {addTodo} from "../redux/actions"
import {v1 as uuid} from "uuid"
import {useDispatch} from "react-redux";

const TodoInput = () => {
  const [name, setName] = useState('')
  const dispatch = useDispatch()
  return (
    <div>
      <div className='row m-2'>
        <input type="text" className='from-control col' value={name} onChange={(e) => setName(e.target.value)}/>
        <button className='btn btn-primary m-2' onClick={() => {
          dispatch(
            addTodo(
              {
                id: uuid(),
                name: name
              }
            )
          )
          setName("")
        }}
                disabled={name.length < 6}
        >Add
        </button>
      </div>
    </div>
  );
};

export default TodoInput;