import {React,useState,useContext,useEffect} from 'react'

import { useNavigate } from 'react-router-dom';
import "./update.css";
import ClassDropDown from '../../components/classDropDown';
import SubjectDropDown from '../../components/subjectDropDown';
import AddScorePopup from '../../components/addScorePopup';

import readClassID from '../../api/readClassID';
import readSubject from '../../api/readSubject';
import readStudentRequest from '../../api/readStudentRequest';
import readScore from '../../api/readScore';

export const UpdateScorePage = () => {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const handleLogOut = (e) => {
        e.preventDefault();
        navigate("/management");
    };

    const [options2, setOptions2] = useState([]);
    const [selectedOption2, setSelectedOption2] = useState('');
    const [selectedOption3, setSelectedOption3] = useState('');

    useEffect(() => {
        // Gọi hàm getClasID() để lấy dữ liệu JSON
        const fetchData = async () => {
          try {
            const data2 = await readSubject();
            setOptions2(data2);
            const data3 = await readStudentRequest("");
            setstudents(data3);
          } catch (error) {
            setError(error.message);
          }
        };
    
        fetchData();
      }, []);
    
    const handleSubject = event => {
        const selectedValue2 = event.target.value;
        setSelectedOption2(selectedValue2);
    };
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [students, setstudents] = useState([]);

    const handleIDChange = (event) => {
      setSearchTerm(event.target.value);
      const filteredResults = students.filter((item) =>
        item.studentID.includes(event.target.value) && item.classID != ''
      ).slice(0, 5); // Chỉ lấy tối đa 5 kết quả
      setSearchResults(filteredResults);
    };
    
    const handleSelect = (id) => {
      setSearchTerm(id);
      handleOpenPopup();
    };

    const [showPopup, setShowPopup] = useState(false);
    const handleOpenPopup = () => {
      setShowPopup(true);
    };
  
    const handleClosePopup = () => {
      setShowPopup(false);
    };
  
    return (
        <div>
            <div className="btn">
                <button  onClick={handleLogOut} >Trang chủ</button>
            </div>
            <div className="container">
                <h1>Bảng điểm</h1>
            </div>
            <div className="searchform">
                <form >
                    <label>Môn học:</label>
                    <SubjectDropDown options={options2} handleChange={handleSubject} check={false}/>
                    <label>Kì học:</label>
                    <select onChange={(e) => setSelectedOption3(e.target.value)}>
                        <option key={"1"} value={"1"}>
                            I
                        </option>
                        <option key={"2"} value={"2"}>
                            II
                        </option>
                    </select>
                </form>
            </div>
            <div className="searchform">
              <form>
                <label>Tìm mã học sinh:</label>
                <input type="text" value={searchTerm} onChange={handleIDChange} placeholder="HS0001" />
              </form>              
            </div>
            <ul className="list"> 
              {searchResults.map((item) => ( 
              <li key={item.studentID} 
              onClick={()=> handleSelect(item.studentID)}> 
              {item.studentID} - {item.name} - {item.classID} </li> ))} </ul>
            <div className='container'>
            {showPopup && (
                <div className="popup-overlay">
                  <AddScorePopup v1={searchTerm} v2={selectedOption2} v3={selectedOption3} onClose={handleClosePopup} />
                </div>
              )}
            </div>
          
            
        </div>
    )
}


