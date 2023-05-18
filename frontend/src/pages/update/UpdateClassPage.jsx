import React from "react";
import { useNavigate } from "react-router-dom";
import "./update.css";

export const UpdateClassPage = () => {
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
        <h1>Cập nhật danh sách lớp</h1>
      </div>
    </div>
  );
};
