import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/login.js';
import Dashboard from './components/dashboard.js';
import React from 'react';
import './App.css';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />,
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
    },
]);
export default function App() {
    return (
        <div className="app">
            <RouterProvider router={router} />
        </div>
    );
}
