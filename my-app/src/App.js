import './App.css';
import Header from './Mycomponents/Header'
import {Footer} from './Mycomponents/Footer'
import {About} from './Mycomponents/About'

// import {TodoItem} from './Mycomponents/TodoItem'
import {Todos} from './Mycomponents/Todos'
import {AddTodo} from './Mycomponents/AddTodo'

import React, { useState,useEffect,Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



function App() {
  let initTodo;
  if(localStorage.getItem('todos')===null){
    initTodo=[];
  }
  else{
    initTodo= JSON.parse(localStorage.getItem('todos'));
  }
  // let myvariable="Anjan Prasad"
  const onDelete=(todo)=>{
    console.log("I am Delete!! ",todo);
  
    setTodos(todos.filter((e)=>{
      return e!==todo;
    
    }))
    localStorage.setItem("todos",JSON.stringify(todos));
    
  };
  const addTodo =(title,desc)=>{
    console.log("I am Adding this Todo ",title,desc);
    let sno;
    if(todos.length===0){
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

  const [todos, setTodos] = useState([initTodo]);
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos])
  return (
    <>
    <Router>
    <Header title={"MyTodoList"} SearchBar={true}/>

    <Switch>
      
          <Route path="/" render={() =>{
            return(
              <>
              <AddTodo addTodo={addTodo}/>
              <Todos todos={todos} onDelete={onDelete}/>
              </>)
          }
          }>
            </Route>
          <Route  path="/about">
            <About />
          </Route>
         
    </Switch>
    <Footer/>
    </Router>
    </>
  )
}

export default App;
