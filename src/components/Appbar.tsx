import React from 'react';
import {NavLink} from "react-router-dom";

const Appbar:React.FC  = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <h2 className="navbar-brand">Amazon</h2>
                    <ul className="navbar-nav mr-auto">
                        <li className='nav-item'>
                            <NavLink to="/" className="nav-link">Home</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to="/about-us" className="nav-link">About us</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to="/gif-card" className="nav-link">gif-cards</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Appbar;