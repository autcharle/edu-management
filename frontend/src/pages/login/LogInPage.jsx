import React, { useContext, useState } from 'react';
import loginRequest from '../../api/login/logInRequest';
import { useNavigate } from 'react-router-dom';
import { TokenContext } from '../../App';


export const LogInPage = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [, setToken] = useContext(TokenContext);

    const handleLogin = (e) => {
        e.preventDefault();
        loginRequest(username, password)
          .then(({ token }) => {
            localStorage.setItem('token', token);
            setToken(token);
            navigate('/');
          })
          .catch((err) => {
            setError(err.message);
          });
    };
    
    return (
    <div>
      <h1>Login</h1>
      <div style={{ color: 'red' }}>{error}</div>
      <form onSubmit={handleLogin}>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Login</button>
      </form>
    </div>
    )
}

