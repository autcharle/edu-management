import "./App.css";
import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { MainPage } from "./pages/main/MainPage";
import { LogInPage } from "./pages/login/LogInPage";
import { ManagePage } from "./pages/main/ManagePage";
import { GetStudent } from "./pages/query/GetStudent";
import { GetRule } from "./pages/query/GetRule";

export const TokenContext = React.createContext(null);

const ProtectedRoute = ({ element }) => {
  const token = localStorage.getItem("token");
  return token ? element() : <Navigate to="/login" />;
};

const ProtectedLoginRoute = ({ element }) => {
  const token = localStorage.getItem("token");
  return token ? <Navigate to="/" /> : element();
};

function App() {
  const [token, setToken] = useState(null);

  return (
    <div className="App">
      <TokenContext.Provider value={[token, setToken]}>
        <Routes>
          <Route
            path="/login"
            element={<ProtectedLoginRoute element={LogInPage} />}
          />
          <Route path="/" element={<ProtectedRoute element={MainPage} />} />
          <Route
            path="/management"
            element={<ProtectedRoute element={ManagePage} />}
          />
          <Route
            path="/student"
            element={<GetStudent />}
          />
          <Route
            path="/rule"
            element={<GetRule />}
          />
        </Routes>
      </TokenContext.Provider>
    </div>
  );
}

export default App;
