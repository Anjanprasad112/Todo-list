import './App.css';
import Header from './Mycomponents/Header'
import {Footer} from './Mycomponents/Footer'
// import {TodoItem} from './Mycomponents/TodoItem'
import {Todos} from './Mycomponents/Todos'
import {AddTodo} from './Mycomponents/AddTodo'

import React, { useState } from 'react';


function App() {
  // let myvariable="Anjan Prasad"
  const onDelete=(todo)=>{
    console.log("I am Delete!! ",todo);
  
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  };
  const addTodo =(title,desc)=>{
    console.log("I am Adding this Todo ",title,desc);
    let sno;
    if(todos.length==0){
      sno =0;
    }
    else{
       sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno:sno,
      title:title,
      desc:desc
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo)
  }

  const [todos, setTodos] = useState(
  [
  {sno : 1,
    title : "Go to mail",
    desc :"Your should go to mail to complete your work1"
  },
  {sno : 2,
    title : "Go to menu",
    desc : "Your should go to mail to complete your work2"
  },
  {sno:3,
    title: "Go to Home",
    desc: "Your should go to mail to complete your work3"
  }
  ]);
  return (
    <>
    <Header title={"MyTodoList"} SearchBar={true}/>
    <AddTodo addTodo={addTodo}/>
    <Todos todos={todos} onDelete={onDelete}/>
    {/* <TodoItem/> */}
    <Footer/>
    </>
  )
}

export default App;
