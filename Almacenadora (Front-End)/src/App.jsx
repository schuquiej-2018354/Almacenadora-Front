import 'bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap'
import React from 'react'
import { Navbar } from './components/Navbar'
import { Outlet } from 'react-router-dom'

export const App = () => {
  return (
    <>
      <Outlet></Outlet>
    </>
  )
}

export default App