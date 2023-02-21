

import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";

export default function Todo(props) {
    const todo = props.todo
    const handleDelete = props.handleDelete;
    const handleCompleteTask = props.handleCompleteTask;
    let className = "list-item " + (todo.done ? "completed" : "");
  return (
    <li className={className} key={todo.id}>
    <div className="flex">
      <span
        className="check-box"
        onClick={() => {
          handleCompleteTask(todo.id);
        }}
      >
        <FontAwesomeIcon icon={faCheck} />
      </span>
      <p>{todo.todo}</p>
      <FontAwesomeIcon
        onClick={() => {
          handleDelete(todo.id);
        }}
        className="x-icon delete"
        icon={faX}
      />
    </div>
  </li>
  )
}
