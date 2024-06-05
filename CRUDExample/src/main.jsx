import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Apicomponent from './Apicomponent.jsx'
import CustomHook from './CustomHook.jsx'
import JSONservercrud from './JSONservercrud.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <LocalstorageExample /> */}
    {/* <LocalstorageCRUD /> */}
    {/* <Mystylecomponent /> */}
    {/* <Apicomponent /> */}
    {/* <CustomHook /> */}
    <JSONservercrud />
  </React.StrictMode>,
)
