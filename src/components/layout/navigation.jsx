import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navigation = props => {
    useEffect(()=>{
        console.log(`show updated: ${props.show}`);
    }, [props.show]);
    return props.show ? <>
        <ul className="navigation">
            <li>
                <Link className="menu-item" to="/">
                    <i className="fas fa-home"></i>
                </Link>
            </li>
            <li>
                <Link className="menu-item" to="/test">
                    <i className="fas fa-smile"></i>
                </Link>
            </li>
        </ul>
    </> : <></>
}; 

export default Navigation;