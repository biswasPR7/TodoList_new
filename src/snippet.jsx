import React from "react";

function snippet(props) {

    

  return (
    <div className="todo-snippet">
      <div className="todo-display">{props.text}</div>
      <button className="todo-delete" onClick = {props.deleteStuff} >delete</button>
      
    </div>
  );
}
//onClick={props.update({ id: 1, value: "priyanshu" })}
export default snippet;
