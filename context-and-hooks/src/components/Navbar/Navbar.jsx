import React, { Component } from 'react';
import { ThemeContext } from '../../contexts/ContextTheme'

class Navbar extends Component {
    static contextType = ThemeContext
    render() {
        console.log(this.context)
        const { isLightTheme, light, dark } = this.context
        const theme = isLightTheme ? light : dark
        return (
            <nav className='nav' style={{ backgroundColor: theme.bg, color: theme.syntax }}>
                <h1 className='nav--title'>Context API</h1>
                <ul className="nav--menu">
                    <li className="nav--item">Home</li>
                    <li className="nav--item">About</li>
                    <li className="nav--item">Contacts</li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;
