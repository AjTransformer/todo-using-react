import {createStore} from 'redux';

const state = {
    tasks:[]
}

let lastAddedTask = "";

export function addTask(myTask){
    return{
        type:"Add_Task",
        payload : myTask
    }
}

export function removeTask(myTask){
    return{
        type:"Remove_Task",
        payload:myTask
    }
}

export function editTask(myTask){
    return{
        type:"Edit_Task",
        payload:myTask
    }
}

export function lastTask(myTask){
    return{
        type:"Last_Task",
        payload:myTask
    }
}

export function Myreducer(info=state , action){
    if(action.type === "Add_Task"){
        return{
            tasks:[...info.tasks , action.payload]
        }
    }
    if(action.type === "Remove_Task"){
        const upDatedArray= info.tasks.filter(task =>task!==action.payload)
        return{
            tasks:upDatedArray
        }
    }

    if(action.type==="Edit_Task"){
        const editedTask = info.tasks.map(task=> {
            if(task==lastAddedTask){
                return action.payload
            }
            return task
        });
        return{
            tasks:editedTask
        }
    }

    if(action.type==="Last_Task"){
       lastAddedTask = action.payload
    }

    return info;
}

export const Mystore = createStore(Myreducer);