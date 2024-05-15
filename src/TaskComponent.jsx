import React, { memo } from 'react'

const TaskComponent = ({data,addTask,deleteTask,editTask,id,updateTask}) => {
    console.log('task component called..');
  return (
    
    <div>
    {
        data.map((i,index)=>{
            return(
                <div key={index}>{i} <button onClick={()=>editTask(index)}>Edit</button>
                <button onClick={()=>deleteTask(index)}>Delete</button></div>
            )
        })
      }
        <button onClick={id ? updateTask : addTask}>
            { id ? "Update" : "Add"} Task
        </button>
    </div>
  )
}

export default memo(TaskComponent)
