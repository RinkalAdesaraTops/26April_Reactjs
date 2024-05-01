import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Mycomponent from './Mycomponent.jsx'
import Classcomponent from './Classcomponent.jsx'
import Task1 from './Task1.jsx'
import Task1Class from './Task1Class.jsx'
import ObjectAccess from './ObjectAccess.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Mycomponent newname="RinkalSoni"/> */}
    {/* <Classcomponent color="red"/> */}
    {/* <Task1 /> */}
    {/* <Task1Class /> */}
    <ObjectAccess />
  </React.StrictMode>,
)
