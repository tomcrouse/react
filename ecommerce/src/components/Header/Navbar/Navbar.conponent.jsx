import React from 'react';

const Navbar = () => {

    const navItems = [
        { name: 'Home' },
        { name: 'About Us' },
        { name: 'Services' },
        { name: 'Careers' },
        { name: 'News' },
        { name: 'Documentation' },
    ]

    return (
        <nav className='navbar'>
            <ul className="navbar--menu">
                {navItems.map((item, index) => (
                    <li className='navbar--item' key={index}>
                        <a className={index === 0 ? 'navbar--link navbar--link-active' : 'navbar--link'}
                            href='#'>{item.name}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;
