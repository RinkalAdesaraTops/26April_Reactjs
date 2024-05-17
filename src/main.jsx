import React,{useState} from 'react'
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
import LifecycleFunction from './LifecycleFunction.jsx'
import UsememoExample from './UsememoExample.jsx'
import UseContextExample from './UseContextExample.jsx'
import UseContextDemo from './UseContextDemo.jsx'
import UseRef from './UseRef.jsx'
import Localstorage from './Localstorage.jsx'

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
    <Route path='/' element={<Home />}></Route>
      <Route path='/home' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='/useref' element={<UseRef />}></Route>
      <Route path='/usememo' element={<UsememoExample />}></Route>
      <Route path='/localstorage' element={<Localstorage />}></Route>
      {/* <Route path='/lifecycle' element={<LifecycleClass  color='blue'/>}></Route>
      <Route path='/lifecyclefunc' element={<LifecycleFunction  color='blue'/>}></Route>
      {/* <Route path='/COntext' element={<UseContextExample />}></Route> */}
      {/* <Route path='/COntext' element={<UseContextDemo />}></Route> */} 
     
    </Routes>
    </BrowserRouter>    
  </React.StrictMode>,
)
