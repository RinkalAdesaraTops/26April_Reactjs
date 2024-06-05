import React, { useState } from 'react'
import axios from 'axios'

const JSONservercrud = () => {
    const [userdata,setUserData] = useState([])
    const [data,setData] = useState({
        name:"",
        age:"",
        salary:""
    })
    const handleChange = (e)=>{
        const {name,value}= e.target
        setData({
            ...data,
            [name]:value
        })
    }
    const saveData = (e)=>{
      e.preventDefault();
      axios.post('http://localhost:4000/users',data)
      .then((res)=>console.log(res))
        .catch((err)=> console.log(err))
    }
  return (
    <div>
      <h3>Json Server CRUD Example</h3>
      <form action="#" method='post' onSubmit={saveData}>
        Name: <input type="text" name="name" id="" value={data.name} onChange={handleChange} />
        Age: <input type="number" name="age" id="" value={data.age} onChange={handleChange} />
        Salary: <input type="number" name="salary" id="" value={data.salary} onChange={handleChange} />
       <input type="submit"  value="Save Data"/>

      </form>
    </div>
  )
}

export default JSONservercrud
