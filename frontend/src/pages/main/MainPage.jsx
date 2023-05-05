import React from 'react'
import { useNavigate } from 'react-router-dom';

export const MainPage = () => {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        navigate('/update');
    };

    return (
    <div>
      <h1>Main Page</h1>
        <button onClick={handleLogin}>Update</button>
    </div>
    )
}


