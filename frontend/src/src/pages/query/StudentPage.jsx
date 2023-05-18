import {React,useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import "./query.css";
import readStudentRequest from '../../api/readStudentRequest';


export const StudentPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleLogOut = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const [students, setstudents] = useState([]);
  useEffect(() => {
      // Gọi hàm getClasID() để lấy dữ liệu JSON
      const fetchData = async () => {
        try {
          const data = await readStudentRequest(searchTerm);
          setstudents(data);
        } catch (error) {
          console.error('Lỗi khi lấy dữ liệu:', error);
        }
      };
  
      fetchData();
    }, []);

  const fortmatDate = (isoDate)=>{
    const date = new Date(isoDate);
    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    return formattedDate;
  };
  const handleSubmit= async (e) => {
    e.preventDefault();
    const data = await readStudentRequest(searchTerm);
    setstudents(data);
  };

  return (
    <div>
      <div className="btn">
        <button  onClick={handleLogOut} >Trang chủ</button>
      </div>
      <div className="container">
        <h1>Tra cứu học sinh</h1>
      </div>
      <div className="searchform">
        <form onSubmit={handleSubmit}>
          <label>Tên học sinh:</label>
          <input type="text" id="search-input" name="search-input"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}/>
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
              <th>Giới tính</th>
              <th>Ngày sinh</th>
              <th>Địa chỉ</th>
              <th>Email</th>
              <th>Lớp</th>
            </tr>
          </thead>
          <tbody>
            {students.map((item, index) => (
              <tr key={index}>
                <td>{index+1}</td>
                <td>{item.studentID}</td>
                <td>{item.name}</td>
                <td>{item.gender}</td>
                <td>{fortmatDate(item.birth)}</td>
                <td>{item.address}</td>
                <td>{item.email}</td>
                <td>{item.classID}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}


