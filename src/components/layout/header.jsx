import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SearchForm from '../template/searchForm';

const Header = props => {
    const navigate = useNavigate();
    const goHome = () => {
        navigate("/");
    };
    return <div className="header">
        <div className="tmp-header">
            <div>
                <button className="header-logo" onClick={goHome}>Boritgoge</button>
                <Link className="header-menu" to="/">home</Link>
                <Link className="header-menu" to="/test">test</Link>
            </div>
            <SearchForm />
        </div>
    </div>
};

export default Header;