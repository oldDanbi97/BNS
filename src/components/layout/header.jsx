import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = (props) => {
    const navigate = useNavigate()
    const goHome = () => {
        navigate("/");
    }

    return <div className="tmp-header">
        <button className="header-logo" onClick={goHome}><i className="fas fa-money-bill-wave icon"></i></button>
    </div>
};

export default Header;