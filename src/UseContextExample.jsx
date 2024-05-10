import {React,useState} from 'react'

const UseContextExample = () => {
    const [name,setName] = useState("testing")
  return (
    <div>
      <h3>My Component1 </h3>
      <h4>My name is : {name}</h4>
      <Cmp2 name={name}/>
    </div>
  )
}
const Cmp2 = ({name})=>{
    return (
        <>
        <h3>My COmponent2</h3>
        <Cmp3 name={name}/>
        </>
    )
}
const Cmp3 = ({name})=>{
    return (
        <>
            <h3>My COmponent3</h3>
            <Cmp4 name={name}/>
        </>
    )
}
const Cmp4 = ({name})=>{
    return (
        <>
        <h3>My COmponent4</h3>
        <h4>Finally Name is needed here -- {name}</h4>
        </>
    )
}

export default UseContextExample
