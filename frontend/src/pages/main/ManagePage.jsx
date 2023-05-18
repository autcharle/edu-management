import React from "react";
import { useNavigate } from "react-router-dom";
import "./menu.css";

import icon2 from "../../assets/2.png";
import icon3 from "../../assets/3.png";
import icon5 from "../../assets/5.png";
import icon6 from "../../assets/6.png";

export const ManagePage = () => {
  const navigate = useNavigate();

  const handleClick = (e, nav) => {
    e.preventDefault();
    navigate(nav);
  };

  const handleLogOut = (e) => {
    e.preventDefault();
    navigate("/");
  };

  function MyComponent(txt, link, nav) {
    return (
      <div className="col">
        <div className="box logo" onClick={(event) => handleClick(event, nav)}>
          <img src={link} className="" />
        </div>
        <h3>{txt}</h3>
      </div>
    );
  }
  return (
    <div>
      <div className="btn">
        <button onClick={handleLogOut}>Trang chủ</button>
      </div>
      <div className="container">
        <h1>Quản lý cập nhật thông tin</h1>
        <div className="row">
          {MyComponent("Tiếp nhận học sinh", icon2, "/management/student")}
          {MyComponent("Cập nhật danh sách lớp", icon3, "/management/class")}
        </div>
        <div className="row">
          {MyComponent("Cập nhật điểm", icon5, "/management/score")}
          {MyComponent("Cập nhật quy định", icon6, "/management/rule")}
        </div>
      </div>
    </div>
  );
};
