import React, { useState } from 'react'

const UsememoExample = () => {
    const [count,setCount] = useState(0)
    const [data,setData] = useState([])

    const addTask = ()=>{
        setData((i)=>[...i,"Task1"])
    }
  return (
    <>
    <div>
      <h3>Count is {count}</h3>
      <button onClick={()=>setCount(count+1)}>Add</button>
      {
        data.map((i,index)=>{
            return <p key={index}>{i}</p>
        })
      }
      

      <h3>Task List</h3>
      <button onClick={addTask}>Add Task</button>
      
    </div>
    </>
  )
}

export default UsememoExample
