import React from 'react';
import logo from '../imgs/logo.png';
import './PageBody.css';

const PageHeader = () => {
    return (
        <div className="page-header">
            <div className="page-title">
                <img src={logo} className="logo" alt="logo" />
                <div className="page-title-text">Image Gallery</div>
            </div>
            <input type="text" className="search-bar" placeholder="Search..." />
            <button id="toggle-btn">Add New</button>
        </div>
    );
};

export default PageHeader;