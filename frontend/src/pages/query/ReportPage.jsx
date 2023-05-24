import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./query.css";
import SubjectDropDown from "../../components/subjectDropDown";
import readSubject from "../../api/readSubject";
import readReport from "../../api/readReport";

export const ReportPage = () => {
  const navigate = useNavigate();

  const handleLogOut = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const [options, setOptions] = useState([]);
  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");

  const [reports, setReports] = useState([]);

  useEffect(() => {
    // Gọi hàm getClasID() để lấy dữ liệu JSON
    const fetchData = async () => {
      try {
        const data = await readSubject();
        setOptions(data);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
      }
    };

    fetchData();
  }, []);

  const handleSubject = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption1(selectedValue);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await readReport(selectedOption1, selectedOption2);
    setReports(data);
  };
  return (
    <div>
      <div className="btn">
        <button onClick={handleLogOut}>Trang chủ</button>
      </div>
      <div className="container">
        <h1>Báo cáo</h1>
      </div>
      <div className="searchform">
        <form onSubmit={handleSubmit}>
          <label>Môn học:</label>
          <SubjectDropDown
            options={options}
            handleChange={handleSubject}
            check={true}
          />
          <label>Kì học:</label>
          <select onChange={(e) => setSelectedOption2(e.target.value)}>
            <option key={"1"} value={"1"}>
              I
            </option>
            <option key={"2"} value={"2"}>
              II
            </option>
            <option key={"0"} value={""}>
              Tất cả
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
              <th>Lớp</th>
              <th>Sĩ số</th>
              <th>Số lượng đạt</th>
              <th>Tỷ lệ</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.classID}</td>
                <td>{item.studentCount}</td>
                <td>{item.studentPass}</td>
                <td>{item.percentage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
