import React from 'react';
import { ThemeContext } from '../../contexts/ContextTheme'

const ToggleTheme = () => {
    return (
        <ThemeContext.Consumer>
            {context => {
                const { toggleTheme } = context
                return (<button className='button' onClick={toggleTheme}>Toggle Theme</button>)
            }}
        </ThemeContext.Consumer>
    )
}

export default ToggleTheme;
