import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './views/Home/Home';

import Login from './views/Login/Login';

import {createBrowserRouter, RouterProvider} from  'react-router-dom';
import SignUpUser from './views/SignUpUser/SignUpUser';
import MyOrders from './views/MyOrders/MyOrders';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: "/signup",
        element: <SignUpUser/>
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/orders',
        element: <MyOrders/>
    }
]);

root.render( <RouterProvider router={router} /> );