import React from 'react'

export default function Footer(props)
 {
     const todos= props.todos;
     const handleClearCompleted= props.handleClearCompleted;
     const handleDisplayChange= props.handleDisplayChange;
  return (
    <div className="footer">
    <div className="grid-item items-left">
      <div className="ml-1 ">
        {todos.length + " "} items left
      </div>
    </div>
    <div className="display-links grid-item" id="display-links">
      <div
        className="link active"
        onClick={(e) => {
          handleDisplayChange(e);
        }}>
        All
      </div>
      <div
        className="link"
        onClick={(e) => {
          handleDisplayChange(e);
        }}>
        Active
      </div>
      <div
        className="link"
        onClick={(e) => {
          handleDisplayChange(e);
        }}>
        Completed
      </div>
    </div>
    <div className="grid-item clear-completed third-item">
      <div className="mr-1  link" onClick={handleClearCompleted}>
        Clear Completed
      </div>
    </div>
  </div>
  )
}
