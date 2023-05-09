import './App.css';
import React, {useContext, useState } from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';

import {MainPage} from './pages/main/MainPage';
import {LogInPage} from './pages/login/LogInPage';
import {ManagePage} from './pages/management/ManagePage';

export const TokenContext = React.createContext(null);

const ProtectedRoute = ({ element }) => {
  const [token] = useContext(TokenContext);
  return token ? element() : <Navigate to="/login" />;
};

function App() {
  /*const { isLoading, data: todos } = useQuery(
    'todos',
    logInRequest
  );*/
  const [token, setToken] = useState(null);

  return (
    <div className="App">
      <TokenContext.Provider value={[token, setToken]}>
        <Routes>
          <Route path="/" element={<ProtectedRoute element={MainPage}/>}/>
          <Route path="/management" element={<ProtectedRoute element={ManagePage}/>}/>
          <Route path="/login" element={<LogInPage/>}/>
          
          <Route path="/test" element={<MainPage/>}/>
        </Routes>
      </TokenContext.Provider>
    </div>
  )
}

export default App

/*{isLoading ? (<div>Loading...</div>):
      (
        todos.map((todo) => (
          <div key='1'>
            {todo.Toan}
          </div>
        ))
      )}*/

      