import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Apicomponent = () => {
    const [data,setData] = useState([])
    const [udata,setUData] = useState({
        title:"",
        description:"",
        image:"",
        price:"",
        category:""
    })
    useEffect(()=>{
        console.log('use effect called..');
        axios.get('https://fakestoreapi.com/products')
            .then(json=> {
                setData(json)
            }).catch((err)=>console.log(err)) 
    })
    const handleChange = (e)=>{
        const {name,value} = e.target;
        setUData({
            ...udata,
            [name]:value
        })
    }
    const saveData = (e)=>{
        e.preventDefault();
        axios.post('https://fakestoreapi.com/products',udata)
        .then(json=>console.log(json))
        .catch((err)=>console.log(err)) 
        // fetch('https://fakestoreapi.com/products',{
        //     method:"POST",
        //     body:JSON.stringify(udata)
        // })
        //     .then(res=>res.json())
        //     .then(json=>console.log(json))
    }
    const delData = (id)=>{
        fetch('https://fakestoreapi.com/products/'+id,{
            method:"DELETE"
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
    }
    const editData = (id)=>{
        fetch('https://fakestoreapi.com/products/'+id,{
                method:"PUT",
            })
                .then(res=>res.json())
                .then(json=>console.log(json))
    }
  return (
    <div>
      <h3>Api Call Example</h3>
      <form action="#" encType='multipart/form-data' onSubmit={saveData}>
            Title : <input type="text" name="title" value={udata.title} onChange={handleChange} />
            <br /><br />
            Description : <input type="text" name="description" value={udata.description} onChange={handleChange} />
            <br /><br />
            Image : <input type="file" name="image" value={udata.image} onChange={handleChange} />
            <br /><br />
            Category : <input type="text" name="category" value={udata.category} onChange={handleChange} />
            <br /><br />
            Price : <input type="number" name="price" value={udata.price} onChange={handleChange} />
            <br /><br />
            <input type='submit' value='Save Data'/>
      </form>
        <table border={'2'}>
            <tr>
                <td>Id</td>
                <td>Title</td>
                <td>Price</td>
                <td>Image</td>
                <td>Action</td>
                
            </tr>
            {
                data && data.map((i)=>{
                    return(
                        <tr>
                            <td>{i.id}</td>
                            <td>{i.title}</td>
                            <td>{i.price}</td>
                            <td><img src={i.image} height={'50px'} width={'50px'} /></td>
                            <td>
                                <button onClick={()=>editData(i.id)}>Edit</button>
                                <button onClick={()=>delData(i.id)}>Delete</button></td>
                        </tr>
                    )
                })
            }
        </table>
    </div>
  )
}

export default Apicomponent
