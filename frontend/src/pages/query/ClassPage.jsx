import { React, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./query.css";
import readClassID from "../../api/readClassID";
import readClassAttendant from "../../api/readClassAttendant";
import ClassDropDown from "../../components/classDropDown";

export const ClassPage = () => {
  const navigate = useNavigate();

  const handleLogOut = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [classAttendants, setClassAttendants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await readClassID();
        setOptions(data);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await readClassAttendant(selectedOption);
    setClassAttendants(data);
  };
  return (
    <div>
      <div className="Btn">
        <button onClick={handleLogOut}>Trang chủ</button>
      </div>
      <div className="container">
        <h1>Tra cứu lớp học</h1>
      </div>
      <div className="SearchForm">
        <form onSubmit={handleSubmit}>
          <label>Lớp học:</label>
          <ClassDropDown
            options={options}
            handleChange={handleChange}
            check={true}
          />
          <button>Tìm kiếm</button>
        </form>
      </div>
      <div className="container">
        <h3>Sĩ số: {classAttendants.length}</h3>
      </div>
      <div className="container">
        <table>
          <thead>
            <tr>
              <th>STT</th>
              <th>Mã HS</th>
              <th>Tên</th>
              <th>Lớp</th>
              <th>Kì I</th>
              <th>Kì II</th>
              <th>Tổng kết</th>
            </tr>
          </thead>
          <tbody>
            {classAttendants.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.studentID}</td>
                <td>{item.name}</td>
                <td>{item.classID}</td>
                <td>{item.firstSemester}</td>
                <td>{item.secondSemester}</td>
                <td>{item.FinalScore}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
