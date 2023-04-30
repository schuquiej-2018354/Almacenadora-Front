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
                    path: '/crud',
                    element: loggedIn ? <CrudPage></CrudPage> : <LoginPage></LoginPage>,
                    children: [
                        {
                            path: 'cellars',
                            element: <CellarsPage></CellarsPage>,
                            children: [
                                {
                                    path: 'addCellar',
                                    element: <AddCellars></AddCellars>
                                },
                                {
                                    path: 'updateCellar/:id',
                                    element: <UpdateCellar></UpdateCellar>
                                },
                            ]
                        },
                        {
                            path: 'clients',
                            element: <ClientsPage></ClientsPage>,
                            children: [
                                {
                                    path: 'addClient',
                                    element: <AddClient></AddClient>
                                },
                                {
                                    path: 'updateClient/:id',
                                    element: <UpdateClient></UpdateClient>
                                }
                            ]
                        },
                        {
                            path: 'accounts',
                            element: <AccountPage></AccountPage>,
                            children: [
                                {
                                    path: 'addAccount',
                                    element: <AddAccount></AddAccount>
                                },
                                {
                                    path: 'updateAccount/:id',
                                    element: <UpdateAccount></UpdateAccount>
                                }
                            ]
                        },
                        {
                            path: 'services',
                            element: <ServicesPage></ServicesPage>,
                            children: [
                                {
                                    path: 'addService',
                                    element: <AddService></AddService>
                                }
                            ]
                        },
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
