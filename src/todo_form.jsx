import React from "react";
import { useState } from "react";
import Snippet from "./snippet";
//first make a form
//keep hold of values using useState hook
//make object a random id and the typed new text
//store these objects inside an array
//deploy the messages of the array by extracting the text from each object use maps mybe
//ids will serve as unique key

function TodoForm() {
  const [currTxt, updateTxt] = useState("");
  const [currArr, updateArr] = useState([]);
  // currArr is an array of objects

  // keep hold of typed values
  function keepTrack(event) {
    updateTxt(event.target.value);
  }

  function AddIt() {
    const info = {
      id: Math.floor(Math.random() * 1000),
      value: currTxt,
    };

    updateArr([...currArr, info]);
    updateTxt("");
  }
  function deleteIt(id_del) {
    updateArr(currArr.filter((item) => item.id !== id_del));
  }
  

  function showIt(item) {
    return (
      <Snippet
        text={item.value}
        deleteStuff={() => deleteIt(item.id)}
       
      />
    );
  }

  return (
    <div className="todo-container">
      <h1>Add Your Task Here 🙂</h1>
      <div className="todo-form">
        <input
          type="text"
          placeholder="add task.."
          className="todo-input"
          onChange={keepTrack}
          value={currTxt}
          name="input"
        />
        <button className="todo-button" onClick={AddIt}>
          Add task
        </button>
      </div>
       <div className="todo-snippetConatainer">
         {currArr.map(showIt)}
      </div>
    </div>
  );
}

export default TodoForm;
