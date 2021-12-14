import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = props => {
    const navigate = useNavigate();
    const goHome = () => {
        navigate("/");
    };
    const handleMenu = () => {
        props.onMenuButton();
    };
    return <div className="tmp-header">
        <button className="header-menu" onClick={handleMenu}><i className="fas fa-bars"></i></button>
        <button className="header-logo" onClick={goHome}><i className="fas fa-money-bill-wave"></i></button>
    </div>
};

export default Header;