import React,{useState,useMemo} from 'react'

const UsememoExample = () => {
    const [task,setTask] = useState("")
    const [count,setCount] = useState(0)
    const [data,setData] = useState([])
    const addTask = ()=>{
        // setData([...data,"task added.."])
         setData([...data,task])
         setTask('')
     }
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
    
    //  const calc = useMemo(()=>{
    //     return calcFunction({count})
    //  },[count]) 
  return (
    <div>
      <h3>Task List</h3>
      {
        data.map((i,index)=>{
            return(
                <div key={index}>{i}</div>
            )
        })
      }
      <input type='text' name="task" value={task} onChange={(e)=>setTask(e.target.value)}/>
      <button onClick={addTask}>Add Task</button>

      <h4>Count is :{count}</h4>
      <button onClick={addCounter}>Add</button>

      <h4>Calculation is : {calc}</h4>
    </div>
  )
}
export default UsememoExample