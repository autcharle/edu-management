import "./App.css";
import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { MainPage } from "./pages/main/MainPage";
import { LogInPage } from "./pages/login/LogInPage";
import { ManagePage } from "./pages/main/ManagePage";
import { StudentPage } from "./pages/query/StudentPage";
import { RulePage } from "./pages/query/RulePage";
import { ClassPage } from "./pages/query/ClassPage";
import { ScorePage } from "./pages/query/ScorePage";
import { ReportPage } from "./pages/query/ReportPage";

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
            element={<StudentPage />}
          />
          <Route
            path="/rule"
            element={<RulePage />}
          />
          <Route
            path="/class"
            element={<ClassPage />}
          />
          <Route
            path="/score"
            element={<ScorePage />}
          />
          <Route
            path="/report"
            element={<ReportPage />}
          />
        </Routes>
      </TokenContext.Provider>
    </div>
  );
}

export default App;
