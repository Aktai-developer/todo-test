import React from 'react'

import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  return (
      <div className="App m-5 container ">
         <div className="row">
             <div className="col-md-6 offset-4">
                 <h3 className="text-center mb-4">Todo List</h3>
                 <TodoInput/>
                 <TodoList/>
             </div>
         </div>
      </div>
  )
}

export default App
