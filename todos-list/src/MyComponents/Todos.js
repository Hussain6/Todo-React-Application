import React from 'react'
import {TodoItems} from "./TodoItems"

export const Todos = (props) => {
    return (
        <div className="continer ">
          <h3 className="">Todos List</h3>
          {props.todos.length===0? "No Todos to Display " : 
             props.todos.map((todo)=>{
               return <TodoItems todo={todo}  key={todo.sno}  onDelete={props.onDelete} />
             })
          
          }
        </div>
    )
}
