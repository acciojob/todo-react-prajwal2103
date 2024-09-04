
import React from "react";
import './../styles/App.css';
import {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
const App = () => {
  const[inputValue,setValue]=useState('');
  const[task,setTask]=useState([]);
  return (
    <div>
      <h1>To-Do List</h1>
      <input type='text' value={inputValue} onChange={(event)=>
        setValue(event.target.value)
      } />
      <button onClick={()=>{
        let newTodo={
          id:uuidv4(),
          name:task
        }
        setTask([...task,newTodo])

      }}>Add Todo</button>
      <ul>
        {
          task.map((item)=>{
          <li key={item.id}>
            <div>{item.name}</div>
            <button onClick={()=>{
              let newArr=task.filter((element)=>{
                return element.id !== item.id
              })
              setTask(newArr)
            }}>Delete</button>
          </li>

          })
        }
      </ul>


    </div>
  )
}

export default App
