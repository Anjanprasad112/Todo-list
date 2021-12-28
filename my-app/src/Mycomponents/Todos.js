import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = (props) => {
    return (
        <div className="container my-5">
           <h2>TODO LIST</h2>
           {props.todos.length===0 ? "No Todos To Display" :
           props.todos.map((todo) =>{
               return (
               <>
               <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/> <hr />
               </>)
           })}
           
        </div>
    )
}
