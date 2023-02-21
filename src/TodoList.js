import React from "react";
import NoTodos from "./NoTodos";

import Todo from "./Todo";

export default function TodoList(props) {
  const todos = props.todos;
  const handleDelete = props.handleDelete;
  const handleCompleteTask = props.handeleCompleteTask;
  const display = props.display;
  return (
    <div className="todos">
    
      <div>{todos.length === 0 && <NoTodos />}</div>
    

      <div>
        <ul className="list-container">
          {todos.map((item, index) => {
            if (display === "all") {
              return (
               <Todo todo={item} handleCompleteTask={handleCompleteTask} handleDelete={handleDelete}/>
              );
            } else if (display === "completed") {
              if (item.done === true) {
                return (
                  <Todo todo={item} handleCompleteTask={handleCompleteTask} handleDelete={handleDelete}/>

                );
              }
            } else if (display === "active") {
              if (item.done === false) {
                return (
                  <Todo todo={item} handleCompleteTask={handleCompleteTask} handleDelete={handleDelete}/>

                );
              }
            }
      
          })}
        </ul>
      </div>
    </div>
  );
}
