import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/login.js';
import Dashboard from './components/dashboard.js';
import { CheckUserExists } from './helper/helper.js';
import { GoogleOAuthProvider } from '@react-oauth/google';
import React from 'react';
import './App.css';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />,
    },
    {
        path: '/dashboard',
        element: (
            <CheckUserExists>
                <Dashboard />
            </CheckUserExists>
        ),
    },
]);
export default function App() {
    return (
        <GoogleOAuthProvider clientId="914554593780-2pqefpg4i3dq1v5pqmfh0vgcifgg75d5.apps.googleusercontent.com">
            <div className="app">
                <RouterProvider router={router} />
            </div>
        </GoogleOAuthProvider>
    );
}
