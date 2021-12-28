import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
    return (
        <div className="container">
            <h6 className="m-1">{todo.title}</h6>
            <p className="m-1">{todo.desc}</p>
            <button className="btn btn-danger btn-sm my-0.5" onClick={() =>{onDelete(todo)}}>Delete</button>
        </div>
    )
}
