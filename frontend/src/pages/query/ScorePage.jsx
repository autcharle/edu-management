import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./query.css";
import ClassDropDown from "../../components/classDropDown";
import SubjectDropDown from "../../components/subjectDropDown";
import readClassID from "../../api/readClassID";
import readSubject from "../../api/readSubject";
import readScore from "../../api/readScore";

export const ScorePage = () => {
  const navigate = useNavigate();

  const handleLogOut = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const [options1, setOptions1] = useState([]);
  const [options2, setOptions2] = useState([]);
  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  const [selectedOption3, setSelectedOption3] = useState("");

  const [scores, setScores] = useState([]);

  useEffect(() => {
    // Gọi hàm getClasID() để lấy dữ liệu JSON
    const fetchData = async () => {
      try {
        const data1 = await readClassID();
        setOptions1(data1);
        const data2 = await readSubject();
        setOptions2(data2);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
      }
    };

    fetchData();
  }, []);

  const handleClassID = (event) => {
    const selectedValue1 = event.target.value;
    setSelectedOption1(selectedValue1);
  };
  const handleSubject = (event) => {
    const selectedValue2 = event.target.value;
    setSelectedOption2(selectedValue2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await readScore(
      selectedOption1,
      selectedOption2,
      selectedOption3
    );
    setScores(data);
  };
  return (
    <div>
      <div className="btn">
        <button onClick={handleLogOut}>Trang chủ</button>
      </div>
      <div className="container">
        <h1>Bảng điểm</h1>
      </div>
      <div className="searchform">
        <form onSubmit={handleSubmit}>
          <label>Lớp học:</label>
          <ClassDropDown
            options={options1}
            handleChange={handleClassID}
            check={true}
          />
          <label>Môn học:</label>
          <SubjectDropDown
            options={options2}
            handleChange={handleSubject}
            check={true}
          />
          <label>Kì học:</label>
          <select onChange={(e) => setSelectedOption3(e.target.value)}>
            <option key={"0"} value={""}>
              Tất cả
            </option>
            <option key={"1"} value={"1"}>
              I
            </option>
            <option key={"2"} value={"2"}>
              II
            </option>
          </select>
          <button>Tìm kiếm</button>
        </form>
      </div>
      <div className="container">
        <table>
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên</th>
              <th>Lớp</th>
              <th>Mã môn</th>
              <th>Học kì</th>
              <th>15 phút</th>
              <th>1 tiết</th>
              <th>Cuối kì</th>
              <th>Tổng kết</th>
            </tr>
          </thead>
          <tbody>
            {scores.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.classID}</td>
                <td>{item.subjectID}</td>
                <td>{item.Semester}</td>
                <td>{item.HS1}</td>
                <td>{item.HS2}</td>
                <td>{item.HS3}</td>
                <td>{item.FinalScore}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
