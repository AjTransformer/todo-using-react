import {createStore} from 'redux';

const state = {
    tasks:[]
}

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
    return info;
}

export const Mystore = createStore(Myreducer);