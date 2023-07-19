import React from "react";
import logo from '../img/logo.png';
import './Logo.css'

const Logo = () => {
    return (
        <div className='logo-container'>
            <img 
            src={logo}
            alt='Logo de freeCodeCamp'
            className='logo'
            />
        </div>
    );
}

export default Logo;