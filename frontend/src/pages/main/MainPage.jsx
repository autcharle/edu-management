import React from 'react'
import { useNavigate } from 'react-router-dom';
<<<<<<< HEAD
=======
import "./MainPage.css";

import icon1 from '../../assets/1.png'
import icon2 from '../../assets/2.png'
import icon3 from '../../assets/3.png'
import icon4 from '../../assets/4.png'
import icon5 from '../../assets/5.png'
import icon6 from '../../assets/6.png'
>>>>>>> develop

export const MainPage = () => {
    const navigate = useNavigate();

<<<<<<< HEAD
    const handleLogin = (e) => {
        e.preventDefault();
        navigate('/update');
    };

    return (
    <div>
      <h1>Main Page</h1>
        <button onClick={handleLogin}>Update</button>
    </div>
=======
    const handleClick = (e,nav) => {
        e.preventDefault();
        navigate(nav);
    };

    const handleLogOut = (e) => {
        e.preventDefault();
        navigate("/login");
    };

    function MyComponent(txt, link,nav) {
        return (
            <div className="col" >
                <div className='box logo' onClick={event => handleClick(event, nav)}>
                    <img src={link} className="" />
                </div>
                <h3>{txt}</h3>
            </div>
        )
    }
    return (
        <div>
            <div className="btn">
                <button  onClick={handleLogOut} >Đăng xuất</button>
            </div>
            <div className="container">
            <h1>Xin chào</h1>
            <div className="row">
                {MyComponent("Cập nhật thông tin",icon1,'/management')}
                {MyComponent("Tra cứu học sinh",icon2,'/student')}
                {MyComponent("Tra cứu lớp",icon3,'/class')}
            </div>
            <div className="row">
                {MyComponent("Tra cứu thành tích",icon4,'/subject')}
                {MyComponent("Tra cứu báo cáo",icon5,'/report')}
                {MyComponent("Tra cứu quy định",icon6,'/rule')}
            </div>
        </div>
        </div>
>>>>>>> develop
    )
}


