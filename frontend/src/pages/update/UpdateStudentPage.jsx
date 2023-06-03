import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import createStudent from "../../api/createStudent";
import "./update.css";

export const UpdateStudentPage = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [birth, setBirth] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [updateResult, setUpdateResult] = useState("");
  const [resultColor, setResultColor] = useState("");
  const navigate = useNavigate();

  const handleNavigate = (e) => {
    e.preventDefault();
    navigate("/management");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createStudent(name, gender, birth, address, email);
      setResultColor("green");
      setUpdateResult("Thành công");
      setName("");
      setGender("");
      setBirth("");
      setAddress("");
      setEmail("");
    } catch (err) {
      setResultColor("red");
      setUpdateResult(err.message);
    }
  };

  return (
    <div>
      <div className="btn">
        <button onClick={handleNavigate}>Quay lại</button>
      </div>
      <div className="container">
        <h1>Thêm học sinh</h1>
        <div className="app">
          <form className="InputForm" onSubmit={handleSubmit}>
            <p>Họ và tên</p>
            <input
              className="InputField"
              placeholder="Nhập họ và tên"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <p>Giới tính</p>
            <select
              className="InputField"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">--Chọn giới tinh--</option>
              <option value="Nam">Nam</option>
              <option value="Nữ">Nữ</option>
            </select>
            <p>Ngày sinh</p>
            <input
              className="InputField"
              type="date"
              value={birth}
              onChange={(e) => setBirth(e.target.value)}
            />
            <p>Địa chỉ</p>
            <input
              className="InputField"
              placeholder="Nhập địa chỉ"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <p>Email</p>
            <input
              className="InputField"
              placeholder="Nhập email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div
              style={{
                color: resultColor,
                fontSize: "1rem",
                lineHeight: "1.5rem",
                fontFamily: "Monsterrat-300",
                height: "1.5rem",
              }}
            >
              {updateResult}
            </div>
            <button style={{ width: "10%" }}>Lưu</button>
          </form>
        </div>
      </div>
    </div>
  );
};
