import React, { useState } from 'react'

const LocalstorageCRUD = () => {
  const [id,setId] = useState("")
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
        setUserData(updatedData)
        setData({
          name:"",
          age:""
      })
    }
    const deleteData = (id)=>{
      let data1 = JSON.parse(localStorage.getItem("UserData"))
      let dt = data1.filter((i,index)=>{
        return index!=id
      })
      setUserData(dt)
      localStorage.setItem("UserData",JSON.stringify(dt))

    }
    const editData = (id)=>{
      let data1 = JSON.parse(localStorage.getItem("UserData"))
      let dt = data1.filter((i,index)=>{
        return index==id
      })
      setData(dt[0])
      setId(id)
    }
    const updateData = ()=>{
      let data1 = JSON.parse(localStorage.getItem("UserData"))
      let finalData = data1.map((i,index)=>{
          if(index == id){
              i.name = data.name
              i.age = data.age
          }
          return i;
      })
      setUserData(finalData)
      localStorage.setItem("UserData",JSON.stringify(finalData))
      setData({
          name:"",
          age:""
      })
      setId("")

    }
  return (
    <div>
      <h3>Localstorage CRUD Example User Detail</h3>
      Name:<input type='text' name='name' value={data.name} onChange={handleChange}/>
      Age:<input type='text' name='age' value={data.age} onChange={handleChange}/>

      <br /><br />
      <button onClick={id ? updateData:saveData}>{id ? "Update Data":"Save Data"}</button>
    
    <table>
      <tr>
        <td>Id</td>
        <td>Name</td>
        <td>Age</td>
        <td>Action</td>
      </tr>
      {
        userData && userData.map((i,index)=>{
          return (
            <tr>
              <td>{index+1}</td>
              <td>{i.name}</td>
              <td>{i.age}</td>
              <td>
                <button onClick={()=>editData(index)}>Edit</button>
                <button onClick={()=>deleteData(index)}>Delete</button>
              </td>
            </tr>
          )
        })
      }
    </table>
    </div>
  )
}

export default LocalstorageCRUD
