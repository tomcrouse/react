import React from 'react';
import Navbar from './Navbar/Navbar.conponent'
import Logo from './Logo/Logo.component'
import Button from '../buttons/Button.component'

const Header = () => {
    return (
        <div className='header'>
            <div className="header--wrapper">
                <Logo />
                <Navbar />
                <Button className='header--btn' text='Login' type='login' />
                <Button className='header--btn' text='Register' />
            </div>
        </div>
    );
}

export default Header;
