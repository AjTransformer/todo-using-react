import React from 'react'
import { useSelector } from 'react-redux'

function A() {

    const result = useSelector(function(output){
        return output.tasks;
    })
  return (
    <div>
        <h3>Tasks:</h3>
        {
          result.map(function(task, index){
            return (<li key={index}>{task}</li>)
          })
        }
      </div>
  )
}

export default A
