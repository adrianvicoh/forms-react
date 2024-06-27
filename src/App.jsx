import { useState } from 'react'
import './App.css'
import Login from './components/Login.jsx'
import Header from './components/Header.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <Header />
      <Login nombre_correcto="admin" password_correcto="1234"/>
      <br /><br /><br /><br /><br /><br />
      
    </>
  )
}

export default App
