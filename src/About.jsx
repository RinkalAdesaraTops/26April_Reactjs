import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate()
  const prevMenu = ()=>{
    // navigate("/home")
    navigate(-1)
  }
  const nextMenu = ()=>{
    // navigate("/contact")
    navigate(1)

  }
  return (
    <div>
      <Outlet />
      
      My about Page
      <button onClick={prevMenu}>Previous</button>
      <button onClick={nextMenu}>Next</button>
      
    </div>
  )
}

export default About
