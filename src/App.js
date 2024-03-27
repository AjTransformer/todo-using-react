import './App.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import A from './A';
import { addTask } from './redux';

function App() {
  const [task, setTask] = useState("");
  const todoDispatcher = useDispatch();

  function addTheTask() {
    todoDispatcher(addTask(task));
    setTask("");
  }

  return (
    <div className="container">
      <div className="input-container">
        <span>Enter The Task Name:</span>
        <input 
          value={task} 
          onChange={e => setTask(e.target.value)}
          placeholder="Enter task name"
        />
        <button onClick={addTheTask}>Add Task</button>
      </div>
      <A />
    </div>
  );
}

export default App;
