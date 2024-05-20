import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import LocalstorageExample from './LocalstorageExample.jsx'
import LocalstorageCRUD from './LocalstorageCRUD.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <LocalstorageExample /> */}
    <LocalstorageCRUD />
  </React.StrictMode>,
)
