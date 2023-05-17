import {React,useState,useContext} from 'react'
import {useQuery} from 'react-query'
import ClipLoader from 'react-spinners/ClipLoader'

import { useNavigate } from 'react-router-dom';
import "./query.css";
import readStudentRequest from '../../api/readRule';

import { TokenContext } from '../../App';

export const GetRule = () => {
    const [token] = useContext(TokenContext);
    const navigate = useNavigate();

    const handleLogOut = (e) => {
        e.preventDefault();
        navigate("/");
    };
    const {isLoading, data:rules} = useQuery('rules', () => readStudentRequest(token), {
        manual: true,
    });


    return (
        <div>
            <div className="btn">
                <button  onClick={handleLogOut} >Trang chủ</button>
            </div>
            <div className="container">
                <h1>Tra cứu quy định</h1>
            </div>
            
            <div className="container">
                {isLoading ? (
                <ClipLoader size={150}/>
                ):(
                    <div>
                        <h3 className="box">Tuổi tối đa: {rules.maxAge}</h3>
                        <h3 className="box">Tuổi tối thiểu: {rules.minAge}</h3>
                        <h3 className="box">Số học sinh tối đa trong lớp: {rules.maxClassAttendant}</h3>
                        <h3 className="box">Số môn học: {rules.subjectCount}</h3>
                        <h3 className="box">Điểm chuẩn đạt môn: {rules.stdScore}</h3>
                    </div>
                )
                }
            </div>
        </div>
    )
}


