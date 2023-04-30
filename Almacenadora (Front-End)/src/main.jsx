import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomePage } from './Pages/HomePage'
import { ProfilePage } from './Pages/ProfilePage';
import { UpdateCellar } from './components/Update/UpdateCellar';
import { NotFoundPage } from './Pages/NotFoundPage';
import { LoginPage } from './Pages/LoginPage';
import { RegisterPage } from './Pages/RegisterPage';
import { MainPage } from './Pages/MainPage';
import { ClientsPage } from './Pages/ClientsPage';
import { AddClient } from './components/Add/AddClient';
import { AccountPage } from './Pages/AccountPage';
import { AddAccount } from './components/Add/AddAccount';
import { ServicesPage } from './Pages/ServicesPage';
import { AddService } from './components/Add/AddService';
import { CellarsPage } from './Pages/CellarsPage'
import { AddCellars } from './components/Add/AddCellars'
import { UpdateClient } from './components/Update/UpdateClient'
import { UpdateAccount } from './components/Update/UpdateAccount'
import { CrudPage } from './Pages/CrudPage'


const routes = createBrowserRouter([
  {
    path: '',
    element: <App></App>,
    errorElement: <NotFoundPage></NotFoundPage>,
    children: [
      {
        path: '/',
        element: <HomePage></HomePage>
      },
      {
        path: '/login',
        element: <LoginPage></LoginPage>
      },
      {
        path: '/register',
        element: <RegisterPage />
      },
      {
        path: '/main',
        element: <MainPage></MainPage>
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
        element: <CellarsPage />
        
      },
      {
        path: '/addCellar',
        element: <AddCellars />
      },
      {
        path: '/update/:id',
        element: <UpdateCellar></UpdateCellar>
      },
      {
        path: '/clients',
        element: <ClientsPage></ClientsPage>
      },
      {
        path: '/addClient',
        element: <AddClient></AddClient>
      },
      {
        path: '/updateC/:id',
        element: <UpdateClient />
      },
      {
        path: '/accounts',
        element: <AccountPage />
      },
      {
        path: '/addAccount',
        element: <AddAccount />
      },
      {
        path: '/updateA/:id',
        element: <UpdateAccount />
      },
      {
        path: '/services',
        element: <ServicesPage />
      },
      {
        path: '/addServices',
        element: <AddService />
      },
      {
        path: '/crud1',
        element: <CrudPage />
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
