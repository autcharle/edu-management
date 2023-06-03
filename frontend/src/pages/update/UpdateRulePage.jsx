import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import updateRuleRequest from "../../api/updateRule";
import readRuleRequest from "../../api/readRule";
import "./update.css";

export const UpdateRulePage = () => {
  const [maxAge, setMaxAge] = useState("");
  const [minAge, setMinAge] = useState("");
  const [maxClassAttendant, setMaxClassAttendant] = useState("");
  const [stdScore, setStdScore] = useState("");
  const [updateResult, setUpdateResult] = useState("");
  const [error, setError] = useState("");
  const [rules, setRules] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRules = async () => {
      try {
        const data = await readRuleRequest();
        setMaxAge(data.maxAge);
        setMinAge(data.minAge);
        setMaxClassAttendant(data.maxClassAttendant);
        setStdScore(data.stdScore);
        setRules(data);
      } catch (error) {
        setError("Lỗi khi lấy dữ liệu: " + error);
      }
    };
    fetchRules();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      rules.maxAge === maxAge &&
      rules.minAge === minAge &&
      rules.maxClassAttendant === maxClassAttendant &&
      rules.stdScore === stdScore
    ) {
      navigate("/rule");
    } else {
      try {
        await updateRuleRequest(maxAge, minAge, maxClassAttendant, stdScore);
        navigate("/rule");
      } catch (err) {
        setError(err.message);
      }
    }
  };

  return (
    <div>
      <div className="Btn">
        <button onClick={handleClick}>Trang chủ</button>
      </div>
      <div className="container">
        <h1>Cập nhật quy định lớp</h1>
        <div className="app">
          <form className="InputForm" onSubmit={handleSubmit}>
            <p>Tuổi tối đa</p>
            <input
              className="InputField"
              placeholder="Nhập quy định tuổi tối đa"
              type="number"
              value={maxAge}
              onChange={(e) => setMaxAge(e.target.value)}
            />
            <p>Tuổi tối thiểu</p>
            <input
              className="InputField"
              placeholder="Nhập quy định tuổi tối thiểu"
              type="number"
              value={minAge}
              onChange={(e) => setMinAge(e.target.value)}
            />
            <p>Số học sinh tối đa trong lớp</p>
            <input
              className="InputField"
              placeholder="Nhập quy định số học sinh tối đa trong lớp"
              type="number"
              value={maxClassAttendant}
              onChange={(e) => setMaxClassAttendant(e.target.value)}
            />
            <p>Điểm chuẩn đạt môn</p>
            <input
              className="InputField"
              placeholder="Nhập quy định điểm chuẩn đạt môn"
              type="number"
              step={0.01}
              max={10}
              min={0}
              value={stdScore}
              onChange={(e) => setStdScore(e.target.value)}
            />
            <div
              style={{
                color: "red",
                fontSize: "1rem",
                lineHeight: "1.5rem",
                fontFamily: "Monsterrat-500",
                height: "1.5rem",
              }}
            >
              {error}
            </div>
            <button style={{ width: "10%" }}>Lưu</button>
          </form>
        </div>
      </div>
    </div>
  );
};
