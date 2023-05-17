import {React,useState,useContext,useEffect} from 'react'
import {useQuery} from 'react-query'
import ClipLoader from 'react-spinners/ClipLoader'

import { useNavigate } from 'react-router-dom';
import "./query.css";
import readClassID from '../../api/readClassID';
import readClassAttendant from '../../api/readClassAttendant';
import Dropdown from '../../components/dropDown';

export const ClassPage = () => {
    const navigate = useNavigate();

    const handleLogOut = (e) => {
        e.preventDefault();
        navigate("/");
    };

    const [options, setOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');
    const [classAttendants, setclassAttendants] = useState([]);

    useEffect(() => {
        // Gọi hàm getClasID() để lấy dữ liệu JSON
        const fetchData = async () => {
          try {
            const data = await readClassID();
            setOptions(data);
          } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
          }
        };
    
        fetchData();
      }, []);
    
    const handleChange = event => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);
    };

    const handleSubmit= async (e) => {
        e.preventDefault();
        const data = await readClassAttendant(selectedOption);
        setclassAttendants(data);
      };
    return (
        <div>
            <div className="btn">
                <button  onClick={handleLogOut} >Trang chủ</button>
            </div>
            <div className="container">
                <h1>Tra cứu lớp học</h1>
            </div>
            <div className="searchform">
                <form onSubmit={handleSubmit}>
                    <label>Lớp học:</label>
                    <Dropdown options={options} handleChange={handleChange} />
                    <button>Tìm kiếm</button>
                </form>
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
                        <td>{index+1}</td>
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
    )
}


