import './App.css';
import Header from './MyComponents/Header'
import { Footer } from './MyComponents/Footer'
import { Todos } from './MyComponents/Todos'
import React, { useState } from 'react';
import {AddTodo} from "./MyComponents/AddTodo"

function App() {
  const onDelete = (todo) => {
    console.log("I am deleted of todo", todo);

    setTodos(todos.filter((e) => {
      return e !==todo;

       }))

  }

const addTodo = (title,desc)=> {
console.log("I am adding this to todo",title,desc)
let sno=todos[todos.length-1].sno +1;
const myTodo = {
  sno:sno,
title:title,
desc:desc
} 
setTodos([...todos,myTodo]);
console.log(myTodo);
}
  const [todos, setTodos] = useState([
    {

      sno: 1,
      title: "Go to Wawqas",
      desc: "You need to go to wawqas"
    },
    {

      sno: 2,
      title: "Go to Jakas",
      desc: "You need to go to Jakas"
    },
    {

      sno: 3,
      title: "Go to Nakas",
      desc: "You need to go to Nakas"
    },
  ]);
  return (
    <>
      <Header title="My Todos List" searchBar={false} />
      <AddTodo  addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
      </>
  );
}

export default App;
