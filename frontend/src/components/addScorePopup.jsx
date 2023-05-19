import React, { useState } from 'react';
import updateScore from '../api/updateScore';

const AddScorePopup =  ({ v1, v2, v3, onClose }) => {
  const [t1, setT1] = useState('');
  const [t2, setT2] = useState('');
  const [t3, setT3] = useState('');
  const [error, setError] = useState("");

  const handleSendScore = async () => {
    // Call the API function here
    try {
      await updateScore(v1, v2, v3, t1, t2, t3);
    } catch (error) {
      setError(error.message);
    }
  };


  return (
    <div>
    <div className='container'>
      <h1>Nhập điểm cho học sinh: {v1}, môn: {v2}, kì:{v3}</h1>
      <label>Điểm 15 phút</label>
      <input type="text" placeholder="10" value={t1} onChange={(e) => setT1(e.target.value)} />
      <label>Điểm 15 phút</label>
      <input type="text" placeholder="10" value={t2} onChange={(e) => setT2(e.target.value)} />
      <label>Điểm 15 phút</label>
      <input type="text" placeholder="10" value={t3} onChange={(e) => setT3(e.target.value)} />
    </div>
    <div>
      <button onClick={handleSendScore}>Nhập</button>
      <button onClick={onClose}>Đóng</button>
      {error}
    </div>
    </div>
  );
};

export default AddScorePopup;
