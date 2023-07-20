import React from 'react';
import logo from '../img/logo.png';
import './Logo.css'

const Logo = () => (
    <div className='logo-container'>
        <img 
            className='logo'
            src={logo}
            alt='Logo de freeCodeCamp'
        />
    </div>
);

export default Logo;