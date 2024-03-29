import './App.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import A from './A';
import { addTask,editTask} from './redux';

function App() {
  const [task, setTask] = useState("");
  const [editedValue , setEditValue] = useState(null)
  const todoDispatcher = useDispatch();
  // const [edit,setEdit] = useState("")

  // function addTheTask() {
  //   todoDispatcher(addTask(task));
  //   setTask("");
  // }

  function addOrEditTask() {
    if (editedValue !== null) {
      // If editIndex is not null, it means we're editing an existing task
      // Update the task at the editIndex
      // Here, we're assuming you have an action to update a task
      // todoDispatcher(updateTask(editIndex, task));
      // Reset editIndex
      setEditValue(null);
      todoDispatcher(editTask(task))
    } else {
      // If editIndex is null, it means we're adding a new task
      todoDispatcher(addTask(task));
    }
    // Reset the task input field
    setTask("");
  }

  return (
    <div className="container">
      <div className="input-container">
        <span>{editedValue !== null ? "Edit" : "Enter"} The Task Name:</span>
        <input 
          value={task} 
          onChange={e => {setTask(e.target.value)}}
          placeholder="Enter task name"
        />
        <button onClick={function(){
          addOrEditTask()
          }}>{editedValue==null? "Add Task":"Edit Task"}</button>
      </div>
      <A setEditValue={setEditValue} setTask={setTask}/>
    </div>
  );
}

export default App;
