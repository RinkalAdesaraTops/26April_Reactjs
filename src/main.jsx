import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Mycomponent from './Mycomponent.jsx'
import Classcomponent from './Classcomponent.jsx'
import Task1 from './Task1.jsx'
import Task1Class from './Task1Class.jsx'
import ObjectAccess from './ObjectAccess.jsx'
import BootstrapComponent from './BootstrapComponent.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter,Routes,Route, HashRouter } from 'react-router-dom'
import Menu from './Menu.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import LifecycleClass from './LifecycleClass.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Mycomponent newname="RinkalSoni"/> */}
    {/* <Classcomponent color="red"/> */}
    {/* <Task1 /> */}
    {/* <Task1Class /> */}
    {/* <ObjectAccess /> */}
    {/* <BootstrapComponent /> */}
    <BrowserRouter>
    <Menu />
    <Routes>
      <Route path='/home' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='/lifecycle' element={<LifecycleClass  color='blue'/>}></Route>
    </Routes>
    </BrowserRouter>    
  </React.StrictMode>,
)
