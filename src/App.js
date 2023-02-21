import React, { useState } from "react";
import { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";

import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([])
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");
  const [display, setDisplay] = useState("all");


  useEffect(()=>{
    if(localStorage.getItem("todos")){
      console.log(localStorage.getItem("todos"))
      setTodos(()=>JSON.parse(localStorage.getItem("todos")))
    } else {
      saveTodos()
    }
  }, [])


  const saveTodos=()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name !== "") {
      setTodos([
        ...todos,
        {
          todo: name,
          id: counter,
          done: false,
        },
      ]);

     
      setCounter(counter + 1);
      saveTodos();
      setName("");
    }
  };
  const handleClearCompleted = () => {
    setTodos(
      todos.filter((todo) => {
        return todo.done === false;
      })
    );
  };
  const handleDisplayChange = (e) => {
    const links = document.getElementById("display-links").children;

    for (var i = 0; i < links.length; i++) {
      var tableChild = links[i];
      tableChild.classList.remove("active");
    }
    e.target.classList.add("active");
    setDisplay(e.target.innerHTML.toLowerCase());
  };

  const handleDelete = (e) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== e;
      })
    );
  };
  const handleTodoFormChange = () => {
    const value = document.getElementById("todo-input");
    setName(value.value);
  };
  const handeleCompleteTask = (id) => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          return {
            todo: item.todo,
            id: item.id,
            done: !item.done,
          };
        } else {
          return item;
        }
      })
    );
    saveTodos();
  };

  return (
    <div id="app" className="app">
      <Header />
      <div className="wrapper padding-container content">
        <form
          className="search-bar"
          onSubmit={(e) => {
            handleSubmit(e);
          }}>
          <button className="submit" type="submit"></button>
          <input type="text" placeholder="Create a new todo..." onChange={handleTodoFormChange} id="todo-input" value={name} />{" "}
        </form>
        <TodoList todos={todos} handleDelete={handleDelete} handeleCompleteTask={handeleCompleteTask} display={display} />
    <Footer todos={todos} handleDisplayChange={handleDisplayChange} handleClearCompleted={handleClearCompleted}/>
      </div>
    </div>
  );
}

export default App;
