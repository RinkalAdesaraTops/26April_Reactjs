import React,{useState,useMemo, useCallback} from 'react'
import TaskComponent from './TaskComponent'

const UsememoExample = () => {
  const [task,setTask] = useState("")
  const [id,setId] = useState("")
    const [count,setCount] = useState(0)
    const [data,setData] = useState([])
    const addTask = useCallback(()=>{
        // setData([...data,"task added.."])
         setData([...data,task])
         setTask('')
     },[task])
     const addCounter = ()=>{
        // setData([...data,"task added.."])
         setCount(count+1)
     }
     const calcFunction = ({count})=>{
        console.log('calc function called...');
        for(let i=0;i<100000;i++){
            count+=i;
        }
        console.log(count);
        return count;
     }
     const calc = useMemo(()=> calcFunction({count}),[count])
    
     const deleteTask =(id)=>{ //0 1  3
        let data1 = data.filter((i,index)=>{
          return index!=id
        })
        setData(data1)
     }
     const editTask =(id)=>{ //0 1  3
        let data1 = data.filter((i,index)=>{
            return index==id
          })
      setTask(data1[0])
      setId(id)
   }
   const updateTask = ()=>{
    let data1 = data.map((i,index)=>{
        if(index == id){
            i=task
        }
        return i;
    })
    console.log(data1);
    setData(data1)
    setId("")
   }
    //  const calc = useMemo(()=>{
    //     return calcFunction({count})
    //  },[count]) 
  return (
    <div>
      <h3>Task List</h3>
     
      <input type='text' name="task" value={task} onChange={(e)=>setTask(e.target.value)}/>
      <TaskComponent data={data} id={id} addTask={addTask} deleteTask={deleteTask} editTask={editTask} updateTask={updateTask}/>

      <h4>Count is :{count}</h4>
      <button onClick={addCounter}>Add</button>

      <h4>Calculation is : {calc}</h4>
    </div>
  )
}
export default UsememoExample