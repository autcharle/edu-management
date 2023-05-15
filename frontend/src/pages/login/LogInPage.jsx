import React, { useContext, useState } from "react";
import "./LoginPage.css";
import loginRequest from "../../api/login/logInRequest";
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
    <div className="cover">
      <h1>Đăng nhập để bắt đầu sử dụng</h1>

      <form onSubmit={handleLogin}>
        <input
          placeholder="Tài khoản"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
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
  );
};
