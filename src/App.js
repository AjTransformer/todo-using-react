import './App.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import A from './A';
import { addTask } from './redux';
function App() {

  const[task , setTask] = useState("")
  const todoDispatcher = useDispatch()

  function addTheTask(){
    //setTask(...setTask , task)
    todoDispatcher(addTask(task))
    setTask("");
  }
  return (
    <div>
      <span>Enter The Task Name:</span>
      <input value={task} onChange={function(input){
        setTask(input.target.value);
      }}></input>
      <button onClick={function(){
        addTheTask();
      }}>Add Task</button>
      <A/>
    </div>
  );
}

export default App;
