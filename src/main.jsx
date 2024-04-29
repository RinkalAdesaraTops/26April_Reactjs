import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Mycomponent from './Mycomponent.jsx'
import Classcomponent from './Classcomponent.jsx'
import Task1 from './Task1.jsx'
import Task1Class from './Task1Class.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Mycomponent newname="Rinkal"/> */}
    {/* <Classcomponent color="red"/> */}
    {/* <Task1 /> */}
    <Task1Class />
  </React.StrictMode>,
)
