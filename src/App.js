// import logo from './logo.svg';
import './App.css';
import Header from './Mycomponents/Header';
import Todos from "./Mycomponents/Todos";
import AddTodo from './Mycomponents/AddTodo';
import Footer from "./Mycomponents/Footer";
// import About from "./Mycomponents/About";
import ScrollToTop from "react-scroll-to-top";
import React, { useState, useEffect } from 'react';

function App() {
  let initTodo;
  if(localStorage.getItem("todos") === null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo)=>{
    console.log("I'm on-delete", todo);
    // deleting this way in react does not work
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);

    setTodos(todos.filter((e)=>{
      return e !== todo;
    }));

    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc)=>{
    console.log("I am Adding this todo", title, desc);

    let sno;
    if(todos.length === 0){
      sno = 0 ;
    }
    else{
      sno = todos[todos.length - 1].sno + 1; 
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  return (
    <>
      <Header title="Todos list" />
      <AddTodo addTodo={addTodo}/>
      <Todos todos= {todos} onDelete={onDelete}/>
      <ScrollToTop smooth />
  {/* <About /> */}
      <Footer/>
    </>
  );
}

export default App;
