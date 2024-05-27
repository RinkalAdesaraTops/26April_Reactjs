import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import LocalstorageExample from './LocalstorageExample.jsx'
import LocalstorageCRUD from './LocalstorageCRUD.jsx'
import Mystylecomponent from './Mystylecomponent.jsx'
import Apicomponent from './Apicomponent.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <LocalstorageExample /> */}
    {/* <LocalstorageCRUD /> */}
    {/* <Mystylecomponent /> */}
    <Apicomponent />
  </React.StrictMode>,
)
