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
import { Redirigir } from './Pages/Redirigir';
import { UpdateService } from './components/Update/UpdateService'
import { LeasePage } from './Pages/LeasePage'
import { AddLease } from './components/Add/AddLease'
import { UpdateLease } from './components/Update/UpdateLease';

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
                    element: <Redirigir></Redirigir>,
                    children: [
                        {
                            path: '',
                            element: <CrudPage></CrudPage>
                        },
                        {
                            path: 'cellars',
                            element: <CellarsPage></CellarsPage>,
                        },
                        {
                            path: 'cellars/addCellar',
                            element: <AddCellars></AddCellars>
                        },
                        {
                            path: 'cellars/update/:id',
                            element: <UpdateCellar></UpdateCellar>
                        },
                        {
                            path: 'clients',
                            element: <ClientsPage></ClientsPage>
                        },
                        {
                            path: 'clients/add',
                            element: <AddClient></AddClient>
                        },
                        {
                            path: 'clients/update/:id',
                            element: <UpdateClient></UpdateClient>
                        },
                        {
                            path: 'accounts',
                            element: <AccountPage></AccountPage>
                        },
                        {
                            path: 'accounts/add',
                            element: <AddAccount></AddAccount>
                        },
                        {
                            path: 'accounts/update/:id',
                            element: <UpdateAccount></UpdateAccount>
                        },
                        {
                            path: 'services',
                            element: <ServicesPage></ServicesPage>
                        },
                        {
                            path: 'services/add',
                            element: <AddService></AddService>
                        },
                        {
                            path: 'services/update/:id',
                            element: <UpdateService></UpdateService>
                        },
                        {
                            path: 'lease',
                            element: <LeasePage></LeasePage>
                        },
                        {
                            path: 'lease/addLease',
                            element: <AddLease></AddLease>
                        },
                        {
                            path: 'lease/update/:id',
                            element: <UpdateLease></UpdateLease>
                        }
                    ]
                }
            ]
        }
    ])

    return (
        <AuthContext.Provider value={{ setLoggedIn, loggedIn }}>
            <RouterProvider router={routes} />
        </AuthContext.Provider>
    )
}
