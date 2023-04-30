import React from 'react';
import App from './App';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { CrudPage } from './Pages/CrudPage';
import { HomePage } from './Pages/HomePage'
import { ProfilePage } from './Pages/ProfilePage';
import { ModalCellars } from './components/Add/AddCellars';
import { UpdateCellar } from './components/Update/UpdateCellar';
import { NotFoundPage } from './Pages/NotFoundPage';
import { LoginPage } from './Pages/LoginPage';
import { RegisterPage } from './Pages/RegisterPage';
import { MainPage } from './Pages/MainPage/MainPage';

export const Index = () => {
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
                    element: <CrudPage></CrudPage>,
                },
                {
                    path: '/addCellar',
                    element: <ModalCellars></ModalCellars>
                },
                {
                    path: 'update/:id',
                    element: <UpdateCellar></UpdateCellar>
                }
            ]
        }
    ])

    return (
        <RouterProvider router={routes}></RouterProvider>
    )
}
