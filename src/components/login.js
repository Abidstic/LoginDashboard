import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css';
import Divider from './divider.js';
import googleIcon from '../assets/google.png';
import { useGoogleLogin } from '@react-oauth/google';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin();
    };
    const login = useGoogleLogin({
        onSuccess: (tokenResponse) => {
            console.log('Login Successful');
            // Set values in local storage
            localStorage.setItem('token', tokenResponse.access_token);

            // Navigate to the dashboard or perform any other actions
            navigate('/dashboard');
        },
        onError: (error) => {
            console.log('Login Failed:', error);
            setError(error);
        },
    });

    const handleLogin = async () => {
        try {
            const response = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                    expiresInMins: 30,
                }),
            });
            const data = await response.json();

            if (data.id) {
                localStorage.setItem('token', data.token);
                localStorage.setItem('id', data.id);
                console.log('Login Successful');
                navigate('/dashboard');
            } else {
                // Failed login
                const errorData = await response.json();
                console.log(response);
                setError(errorData.message);
            }
        } catch (error) {
            console.error('Error during login:', error);
            setError('An error occurred during login.');
        }
    };
    const handleUsernameFocus = () => {
        setError('');
    };

    const handlePasswordFocus = () => {
        setError('');
    };

    return (
        <div className="login-container">
            <div className="header">Tesla Corp</div>
            <div className="login-h">Login to your dashboard</div>
            <div className="login-sub">
                Enter with your username and password
            </div>
            {error && <div className="error">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        placeholder="Username"
                        onChange={(e) => setUsername(e.target.value)}
                        onFocus={handleUsernameFocus}
                    />
                </div>
                <div>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        onFocus={handlePasswordFocus}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            <div className="google-login">
                <Divider text={'or continue with'} />
                <button onClick={() => login()}>
                    <img src={googleIcon} alt="icon" />
                    Google
                </button>
            </div>
            <div className="footer">
                By clicking continue, you agree to our{' '}
                <span>Terms of Service</span> and <span>Privacy Policy</span>
            </div>
        </div>
    );
}

export default Login;
