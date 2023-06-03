import React, { useContext, useState } from "react";
import "./LoginPage.css";
import loginRequest from "../../api/logInRequest";
import { useNavigate } from "react-router-dom";
import { TokenContext } from "../../App";

export const LogInPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [, setToken] = useContext(TokenContext);

  const handleLogin = (e) => {
    e.preventDefault();
    loginRequest(username, password)
      .then(({ token }) => {
        localStorage.setItem("token", token);
        setToken(token);
        navigate("/");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className="app">
      <h1>Student Tracker</h1>
      <div className="cover">
        <h2>Đăng nhập để bắt đầu sử dụng</h2>

        <form className="LoginForm" onSubmit={handleLogin}>
          <input
            className="LoginInput"
            placeholder="Tài khoản"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="LoginInput"
            placeholder="Mật khẩu"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div
            style={{
              color: "red",
              fontSize: "1rem",
              lineHeight: "1.5rem",
              fontFamily: "Monsterrat-300",
              height: "1.5rem",
            }}
          >
            {error}
          </div>
          <button>Đăng nhập</button>
        </form>
      </div>
    </div>
  );
};
