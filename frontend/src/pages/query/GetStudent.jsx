import {React,useState,useContext} from 'react'
import {useQuery} from 'react-query'
import ClipLoader from 'react-spinners/ClipLoader'

import { useNavigate } from 'react-router-dom';
import "./query.css";
import readStudentRequest from '../../api/readStudentRequest';


export const GetStudent = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleLogOut = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const {isLoading, data:students} = useQuery(['students',searchTerm], () => readStudentRequest(searchTerm), {
    manual: true,
  });

  const fortmatDate = (isoDate)=>{
    const date = new Date(isoDate);
    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    return formattedDate;
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
        <form>
          <label>Tên học sinh:</label>
          <input type="text" id="search-input" name="search-input"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}/>
        </form>
      </div>
      <div className="container">
        {isLoading ? (
        <ClipLoader size={150}/>
        ):(
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
          )}
      </div>
    </div>
  )
}


