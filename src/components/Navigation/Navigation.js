import React from 'react';
import {NavLink} from "react-router-dom";

const Navigation = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/pages/about">About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/pages/contacts">Contacts</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/pages/history">History</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/pages/news">News</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/pages/partners">Partners</NavLink>
                </li>
            </ul>
        </div>
    </nav>
);

export default Navigation;