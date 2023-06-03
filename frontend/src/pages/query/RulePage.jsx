import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./query.css";
import readRuleRequest from "../../api/readRule";

export const RulePage = () => {
  const navigate = useNavigate();

  const handleLogOut = (e) => {
    e.preventDefault();
    navigate("/");
  };
  const [rules, setRules] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await readRuleRequest();
        setRules(data);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="Btn">
        <button onClick={handleLogOut}>Trang chủ</button>
      </div>
      <div className="container">
        <h1>Tra cứu quy định</h1>
      </div>

      <div className="container">
        <div>
          <h3 className="box">Tuổi tối đa: {rules.maxAge}</h3>
          <h3 className="box">Tuổi tối thiểu: {rules.minAge}</h3>
          <h3 className="box">
            Số học sinh tối đa trong lớp: {rules.maxClassAttendant}
          </h3>
          <h3 className="box">Số môn học: {rules.subjectCount}</h3>
          <h3 className="box">Điểm chuẩn đạt môn: {rules.stdScore}</h3>
        </div>
      </div>
    </div>
  );
};
