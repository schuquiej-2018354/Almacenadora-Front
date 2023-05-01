import React, { createContext, useEffect, useState } from 'react';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NotFoundPage } from './Pages/NotFoundPage';
import { MainPage } from './Pages/MainPage/MainPage';
import { LoginPage } from './Pages/LoginPage';
import { HomePage } from './Pages/HomePage'
import { RegisterPage } from './Pages/RegisterPage';
import { ProfilePage } from './Pages/ProfilePage';
import { CrudPage } from './Pages/CrudPage';
import { CellarsPage } from './Pages/CellarsPage';
import { AddCellars } from './components/Add/AddCellars';
import { UpdateCellar } from './components/Update/UpdateCellar';
import { ClientsPage } from './Pages/ClientsPage';
import { AddClient } from './components/Add/AddClient';
import { UpdateClient } from './components/Update/UpdateClient';
import { AccountPage } from './Pages/AccountPage';
import { AddAccount } from './components/Add/AddAccount';
import { UpdateAccount } from './components/Update/UpdateAccount';
import { ServicesPage } from './Pages/ServicesPage';
import { AddService } from './components/Add/AddService';
import { Dashboard } from './components/Dashboard/Dashboard';

export const AuthContext = createContext();

export const Index = () => {

    const [loggedIn, setLoggedIn] = useState(false)
    const [dataUser, setDataUser] = useState({
        name: '',
        username: '',
        role: ''
    })

    useEffect(() => {
        let token = localStorage.getItem('token')
        if (token) setLoggedIn(true)
    }, [])

    const routes = createBrowserRouter([
        {
            path: '',
            element: <App></App>,
            errorElement: <NotFoundPage></NotFoundPage>,
            children: [
                {
                    path: '/',
                    element: <MainPage></MainPage>
                },
                {
                    path: '/login',
                    element: <LoginPage></LoginPage>
                },
                {
                    path: '/home',
                    element: <HomePage></HomePage>
                },
                {
                    path: '/register',
                    element: <RegisterPage></RegisterPage>
                },
                {
                    path: '/profile',
                    element: <ProfilePage></ProfilePage>
                },
                {
                    path: '/dashboard',
                    element: loggedIn ? <Dashboard></Dashboard> : <LoginPage></LoginPage>,
                    children: [
                        {
                            path: 'cellars',
                            element: <CellarsPage></CellarsPage>,
                        },
                        {
                            path: 'cellars/addCellar',
                            element: <AddCellars></AddCellars>
                        },
                        {
                            path: 'clients',
                            element: <ClientsPage></ClientsPage>
                        },
                        {
                            path: 'accounts',
                            element: <AccountPage></AccountPage>
                        },
                        {
                            path: 'services',
                            element: <ServicesPage></ServicesPage>
                        }

                    ]
                }

            ]
        }
    ])
    return (
        <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
            <RouterProvider router={routes} />
        </AuthContext.Provider>
    )
}
