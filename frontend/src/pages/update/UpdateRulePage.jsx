import React from "react";
import { useNavigate } from "react-router-dom";
import "./update.css";

export const UpdateRulePage = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div>
      <div className="btn">
        <button onClick={handleClick}>Trang chủ</button>
      </div>
      <div className="container">
        <h1>Cập nhật quy định lớp</h1>
      </div>
    </div>
  );
};
