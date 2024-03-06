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

export function Myreducer(info=state , action){
    if(action.type === "Add_Task"){
        return{
            tasks:[...info.tasks , action.payload]
        }
    }
    return info;
}

export const Mystore = createStore(Myreducer);