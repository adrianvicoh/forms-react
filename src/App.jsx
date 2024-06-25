import { useState } from 'react'
import './App.css'
import Login from './components/Login.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <Login nombre_correcto="admin" password_correcto="1234"/> 
    </>
  )
}

export default App
