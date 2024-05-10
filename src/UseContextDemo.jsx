import React, { createContext, useContext,useState } from 'react'
const nameContext = createContext()
const UseContextDemo = () => {
    const [name,setName] = useState("testing")
  return (
    <div>
        <nameContext.Provider value={name}>
            <h3>My Component1 </h3>
            <h4>My name is : {name}</h4>
            <Cmp2/>
      </nameContext.Provider>
    </div>
  )
}
const Cmp2 = ()=>{
    return (
        <>
        <h3>My COmponent2</h3>
        <Cmp3/>
        </>
    )
}
const Cmp3 = ()=>{
    return (
        <>
            <h3>My COmponent3</h3>
            <Cmp4/>
        </>
    )
}
const Cmp4 = ()=>{
    const getName = useContext(nameContext)
    return (
        <>
        <h3>My COmponent4</h3>
        <h4>Finally Name is needed here -- {getName}</h4>
        </>
    )
}

export default UseContextDemo
