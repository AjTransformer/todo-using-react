import './App.css';
import { useState } from 'react';
import A from './A';
import { database } from './firebase';
import { redirect } from 'react-router-dom';

function App(props) {
  if(!props.isLoggedIn){
    window.location.pathname = '/login';
  }
  
  const [task, setTask] = useState("");
  const [editedValue , setEditValue] = useState(null)
  const [oldData , setOldData] = useState("")

  async function addOrEditTask() {
    if (editedValue !== null) {
      // If editIndex is not null, it means we're editing an existing task
      // Update the task at the editIndex
      // Here, we're assuming you have an action to update a task
      const ItemName = task.toUpperCase();
      console.log("Item to update ",ItemName)

      const snapshot = await database.collection("todolist").where("Item", "==", oldData).get();
      snapshot.forEach(doc => {
        doc.ref.delete();
      });
      // Query for the document where 'Item' matches the new item name
      database.collection("todolist").where("Item", "==", ItemName).get()
      .then((querySnapshot) => {
          if (querySnapshot.empty) {
              // Document doesn't exist, add the new item
              database.collection("todolist").doc().set({
                  Item: task.toUpperCase(),
                  status: false // Assuming you have a 'Status' field
              })
              .then(() => {
                  console.log("Item added successfully");
                  // Reset the task input field
                  setTask("");
              })
              .catch((error) => {
                  console.error("Error adding item: ", error);
              });
          } else {
              alert("Item already exists");
          }
      })
      .catch((error) => {
          console.error("Error getting documents: ", error);
      });      
    } else {
      // If editIndex is null, it means we're adding a new task
      // Convert item name to lowercase for case-insensitive comparison
    const ItemName = task.toUpperCase();

      // Query for the document where 'Item' matches the new item name
      database.collection("todolist").where("Item", "==", ItemName).get()
      .then((querySnapshot) => {
          if (querySnapshot.empty) {
              // Document doesn't exist, add the new item
              database.collection("todolist").doc().set({
                  Item: task.toUpperCase(),
                  status: false // Assuming you have a 'Status' field
              })
              .then(() => {
                  console.log("Item added successfully");
                  // Reset the task input field
                  setTask("");
              })
              .catch((error) => {
                  console.error("Error adding item: ", error);
              });
          } else {
              alert("Item already exists");
          }
      })
      .catch((error) => {
          console.error("Error getting documents: ", error);
      });
      }
    
  }

  return (
    <div className="container">
      <div className="card">
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
      </div>
      <br/>
      <div className="cardDetails">
        <A setEditValue={setEditValue} setTask={setTask} setOldData={setOldData}/>
      </div>      
    </div>
  );
}

export default App;
