import React, { useEffect, useState } from 'react'

const Apicomponent = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
        console.log('use effect called..');
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=> {
                
                setData(json)
            })
    })
  return (
    <div>
      <h3>Api Call Example</h3>
        <table border={'2'}>
            <tr>
                <td>Id</td>
                <td>Title</td>
                <td>Price</td>
                <td>Image</td>
                
            </tr>
            {
                data && data.map((i)=>{
                    return(
                        <tr>
                            <td>{i.id}</td>
                            <td>{i.title}</td>
                            <td>{i.price}</td>
                            <td><img src={i.image} height={'50px'} width={'50px'} /></td>
                        </tr>
                    )
                })
            }
        </table>
    </div>
  )
}

export default Apicomponent
