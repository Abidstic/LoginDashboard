import React, { useState } from 'react';
import '../styles/login.css';
import Divider from './divider.js';
import googleIcon from '../assets/google.png';

function Login({ onLogin, error }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin(username, password);
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
                    />
                </div>
                <div>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            <div className="google-login">
                <Divider text={'or continue with'} />
                <button>
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
