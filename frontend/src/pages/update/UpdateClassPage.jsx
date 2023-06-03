import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./update.css";
import readStudentRequest from "../../api/readStudentRequest";
import ClassDropDown from "../../components/classDropDown";
import readClassID from "../../api/readClassID";
import updateStudentClass from "../../api/updateStudentClass";

export const UpdateClassPage = () => {
  const navigate = useNavigate();
  const [classOption, setClassOption] = useState([]);
  const [selectedClass, setSelectedClass] = useState("");
  const [classList, setclassList] = useState([]);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [students, setStudents] = useState([]);

  const handleBack = (e) => {
    e.preventDefault();
    navigate("/management");
  };

  const handleClassID = (event) => {
    const selectedValue1 = event.target.value;
    setSelectedClass(selectedValue1);
    const classlist = students.filter(
      (item) => item.classID === selectedValue1
    );
    setclassList(classlist);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await readStudentRequest("");
        setStudents(data);
        const data1 = await readClassID();
        setClassOption(data1);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
      }
    };

    fetchData();
  }, []);

  const handleIDChange = (event) => {
    setSearchTerm(event.target.value);
    const filteredResults = students
      .filter(
        (item) =>
          item.studentID.includes(event.target.value) && item.classID === ""
      )
      .slice(0, 5); // Chỉ lấy tối đa 5 kết quả
    setSearchResults(filteredResults);
  };

  const handleSelect = (id) => {
    // Trả về id khi người dùng chọn
    setSearchTerm(id);
  };
  const handleRefresh = async () => {
    const classlist = students.filter((item) => item.classID === selectedClass);
    setclassList(classlist);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateStudentClass(searchTerm, selectedClass);
    } catch (error) {
      setError(error.message);
    }
    const data = await readStudentRequest("");
    setStudents(data);
  };

  return (
    <div>
      <div className="btn">
        <button onClick={handleBack}>Quay lại</button>
      </div>
      <div className="container">
        <h1>Cập nhật danh sách lớp</h1>
      </div>
      <div>
        <div className="searchform">
          <form>
            <label>Chọn lớp học:</label>
            <ClassDropDown options={classOption} handleChange={handleClassID} />
          </form>
        </div>
        <div className="searchform">
          <form onSubmit={handleSubmit}>
            <label>Tìm mã học sinh:</label>
            <input
              type="text"
              value={searchTerm}
              onChange={handleIDChange}
              placeholder="HS0001"
            />
            <button>Thêm</button>
            {error}
          </form>
        </div>
        <ul className="list">
          {" "}
          {searchResults.map((item) => (
            <li
              key={item.studentID}
              onClick={() => handleSelect(item.studentID)}
            >
              {" "}
              {item.studentID} - {item.name}{" "}
            </li>
          ))}{" "}
        </ul>
      </div>
      <div className="container">
        <label>Danh sách lớp: {selectedClass}</label>
        <button onClick={() => handleRefresh()}>Tải lại</button>
        <table>
          <thead>
            <tr>
              <th>STT</th>
              <th>Mã HS</th>
              <th>Tên</th>
              <th>Lớp</th>
            </tr>
          </thead>
          <tbody>
            {classList.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.studentID}</td>
                <td>{item.name}</td>
                <td>{item.classID}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
