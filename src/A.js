import React, { useState, useEffect } from 'react';
import './A.css';
import { database } from './firebase';

function A({setEditValue,setTask,setOldData}) {
  const[data , setData] = useState([])


  useEffect(function () {
    database.collection("todolist").onSnapshot(function (mySnapshot) {
      setData(mySnapshot.docs.map(function (i) {
        return i.data().Item;
      }));
    });
  }, [])

  function editMyTask(index) {
    const taskToBeDone = document.getElementById(`taskName-${index}`).textContent;
    setEditValue(index);
    setTask(taskToBeDone);
    setOldData(taskToBeDone);
  }

  useEffect(function(){
    database.collection("todolist").onSnapshot(function(mySnapshot){
        //this will show me data present in db and I have to store it...
        setData(mySnapshot.docs.map(function(i)
        {
            return i.data().Item
        }
        ))
    });
  },[])

  function completeMyItem(index) {
    const taskNameElement = document.getElementById(`taskName-${index}`);
    if (taskNameElement) {
      const taskName = taskNameElement.textContent.trim();
      
      // Query for the document where 'Item' matches the taskName
      database.collection("todolist").where("Item", "==", taskName).get()
      .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {

              const currentStatus = doc.data().status;
                  
              // Toggle the status value
              const newStatus = !currentStatus;
              if(newStatus){
                taskNameElement.style.textDecoration = 'line-through';
              }else{
                taskNameElement.style.textDecoration = 'none';
              }
              // Update the 'Status' field in the document
              doc.ref.update({
                  status: newStatus // Replace 'new_status' with the new status value
              })
              .then(() => {
                  console.log("Status updated successfully");
              })
              .catch((error) => {
                  console.error("Error updating status: ", error);
              });
          });
      })
      .catch((error) => {
          console.error("Error getting documents: ", error);
      });
  }
  }

  const deleteCollection = async (itemToDelete) => {
    const snapshot = await database.collection("todolist").where("Item", "==", itemToDelete).get();
    snapshot.forEach(doc => {
      doc.ref.delete();
    });
  };  
   
  useEffect(function(){
    data.forEach((task, index) => {
      const textContent = document.getElementById(`taskName-${index}`);
      const checkboxElement = document.getElementById(`check-${index}`);
      if(textContent){
        database.collection("todolist").where("Item","==",task).get()
        .then((result)=>{
          result.forEach((val)=>{
            const status = val.data().status;
            if(status){
              textContent.style.textDecoration = 'line-through';
              checkboxElement.checked = true;
            } else {
              textContent.style.textDecoration = 'none';
              checkboxElement.checked = false;
            }
          })
        })
        .catch((error)=>{
          console.log("error while loading ",error);
        })
      }
    })
  },[data])

  
  return (
    <div>
      <h3>Tasks:</h3>
      <form className="task-form">
        <ul className="task-list">
          {data.map((task, index) => (
            <li key={index}>
              <label class="checked-container">
                <input type="checkbox" id={`check-${index}`}
                onClick={() => completeMyItem(index)}/>
                <div class="checkmark"></div>
              </label>
              <label htmlFor={`check-${index}`} id={`taskName-${index}`}>
                <h4>{task}</h4>
              </label>
              <lord-icon
                src="https://cdn.lordicon.com/wpyrrmcq.json"
                trigger="hover"
                id="delete"
                onClick={function(){
                  // removeMyTask(index)
                  const dataToDelete = document.getElementById(`taskName-${index}`).textContent;
                  deleteCollection(dataToDelete)
                }}
              />
              <button type="button" className="editBtn">
                <svg height="1em" viewBox="0 0 512 512" onClick={function(){
                  editMyTask(index)
                }}>
                  <path
                    d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"
                  ></path>
                </svg>
              </button>
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default A;
