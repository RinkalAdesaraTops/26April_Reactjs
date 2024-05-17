import React, { useCallback, useState } from 'react'

const Localstorage = () => {
    // const [name,setName] = useState("")
    const [data,setData] = useState({
        name:""
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    const saveData = ()=>{
        // localStorage.setItem('name',name)
        // setData(()=>[...data,name])
        console.log(data);
        localStorage.setItem('userdata',JSON.stringify(data))
    }
  return (
    <div>
      <h1>Localstorage Demo</h1>
      <input type="text" name="name" id="" value={data.name} onChange={handleChange} />
      <input type="button" value="Save" onClick={saveData} />
    </div>
  )
}

export default Localstorage
