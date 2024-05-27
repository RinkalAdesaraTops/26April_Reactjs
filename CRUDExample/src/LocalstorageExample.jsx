import React,{useState} from 'react'

const LocalstorageExample = () => {
    const [name,setName] = useState("")
    const saveData = ()=>{
        localStorage.setItem("username",name)
    }
    const getData = ()=>{
        let data1 = localStorage.getItem("username")
        console.log(data1);

    }
    const delData = ()=>{
        // localStorage.removeItem("username")
            localStorage.clear()
        

    }
  return (
    <div>
      <h3>CRUD With Localstorage</h3>
      <input type="text" name="name" id="" value={name} onChange={(e)=>setName(e.target.value)} />
      <input type="button" value="Save Data" onClick={saveData}/>
      <input type="button" value="Get Data" onClick={getData}/>
      <input type="button" value="delete Data" onClick={delData}/>

      
    </div>
  )
}

export default LocalstorageExample
