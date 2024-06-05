import React from 'react'
import useFetch from './useFetch'

const CustomHook = () => {
const [data] = useFetch('https://fakestoreapi.com/products')
const [users] = useFetch('http://dummyjson.com/users')
  return (
    <div>
      <h3>Custom hook example</h3>
      <h4>Get All User List</h4>
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
                            <td></td>
                                
                        </tr>
                    )
                })
            }
        </table>
    </div>
  )
}

export default CustomHook
