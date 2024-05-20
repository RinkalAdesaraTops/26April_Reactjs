import React, { useState } from 'react'

const LocalstorageCRUD = () => {
    const [data,setData] = useState({
        name:"",
        age:""
    })
    const [userData,setUserData] = useState([])
    const handleChange = (e)=>{
        const {name,value} = e.target
        setData({
            ...data,
            [name]:value
        })
    }
    const saveData = ()=>{
        // userData.push(data)
        setUserData(prevData => [
            ...prevData,
            data
        ])
        const updatedData = [...userData,data]
        
        localStorage.setItem("UserData",JSON.stringify(updatedData))
    }
  return (
    <div>
      <h3>Localstorage CRUD Example User Detail</h3>
      Name:<input type='text' name='name' value={data.name} onChange={handleChange}/>
      Age:<input type='text' name='age' value={data.age} onChange={handleChange}/>

      <br /><br />
      <button onClick={saveData}>Save Data</button>
    
    </div>
  )
}

export default LocalstorageCRUD
