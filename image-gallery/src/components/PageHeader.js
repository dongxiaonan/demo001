import React, { useState } from 'react';
import logo from '../imgs/logo.png';
import './PageBody.css';
import ImageForm from './ImageForm';

const PageHeader = () => {
      const [showForm, setShowForm] = useState(false);
      const showImageForm = () => {
        setShowForm(true);
    };

    console.log('showForm:', showForm)
  
    return (
      <>
        <div className="page-header">
            <div className="page-title">
                <img src={logo} className="logo" alt="logo" />
                <div className="page-title-text">Image Gallery</div>
            </div>
            <input type="text" className="search-bar" placeholder="Search..." />
            <button id="toggle-btn" onClick={showImageForm}>Add New</button>
        </div>
        {showForm && <ImageForm onClose={() => setShowForm(false)}/>}
      </>
        
    );
};

export default PageHeader;