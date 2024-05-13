import { Navigate } from 'react-router-dom';
export function CheckUserExists({ children }) {
    const token = localStorage.getItem('token');
    return token ? children : <Navigate to="/" replace />;
}
