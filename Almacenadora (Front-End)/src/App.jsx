import 'bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from './components/NavBar/Navbar.jsx'

export const App = () => {
  return (
    <>
      <Outlet></Outlet>
    </>
  )
}

export default App