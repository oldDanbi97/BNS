import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = (props) => {
    const navigate = useNavigate()
    const goHome = () => {
        navigate("/");
    };
    const hideNav = () =>{
        
    };
    return <div className="tmp-header">
        <button className="header-menu" onClick={goHome}><i class="fas fa-bars"></i></button>
        <button className="header-logo" onClick={hideNav}><i className="fas fa-money-bill-wave"></i></button>
    </div>
};

export default Header;