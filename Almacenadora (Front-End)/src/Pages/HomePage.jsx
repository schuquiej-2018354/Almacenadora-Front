import React from 'react'
import Canvas from '../components/Canvas/Canvas'
import { Navbar } from '../components/NavBar/Navbar.jsx'
import { Dashboard } from '../components/Dashboard/Dashboard'

export const HomePage = () => {
    return (
        <>
            <Navbar></Navbar>
            <h1>HomePage</h1>
            <Canvas></Canvas>
        </>
    )
}
