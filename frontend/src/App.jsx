import './App.css';
import React, { useState } from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';

import {MainPage} from './pages/main/MainPage';
import {LogInPage} from './pages/login/LogInPage';
import {ManagePage} from './pages/management/ManagePage';

export const TokenContext = React.createContext(null);

const ProtectedRoute = ({ element }) => {
  const token = localStorage.getItem('token');
  return token ? element() : <Navigate to="/login" />;
};

const ProtectedLoginRoute = ({ element }) => {
  const token = localStorage.getItem('token');
  return token ? <Navigate to="/" /> : element();
};

function App() {
  const [token, setToken] = useState(null);

  return (
    <div className="App">
      <TokenContext.Provider value={[token, setToken]}>
        <Routes>
          <Route
            path="/"
            element={<ProtectedRoute element={MainPage} />}
          />
          <Route 
            path="/management"
            element={<ProtectedRoute element={ManagePage} />}
          />
          <Route 
            path="/login" 
            element={<ProtectedLoginRoute element={LogInPage} />}
          />
          <Route
            path="/"
            element={<ProtectedRoute element={MainPage} />}
          />
          <Route
            path="/update"
            element={<ProtectedRoute element={ManageUpdatePage} />}
          />
        </Routes>
      </TokenContext.Provider>
    </div>
  )
}

export default App

