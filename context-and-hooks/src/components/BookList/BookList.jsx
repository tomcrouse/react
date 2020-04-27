import React from 'react';
import { ThemeContext } from '../../contexts/ContextTheme'
import { AuthContext } from '../../contexts/Auth'

const BookList = () => {
    return (
        <AuthContext.Consumer>{authContext => (
            <ThemeContext.Consumer>
                {themeContext => {
                    const { isAuth, toggleAuth } = authContext
                    let { isLightTheme, light, dark } = themeContext
                    let theme = isLightTheme ? light : dark
                    return (
                        <nav className='book-list' style={{ backgroundColor: theme.bg, color: theme.syntax }}>
                            <ul className="book-list--menu">
                                <li className="book-list--item">Home</li>
                                <li className="book-list--item">About</li>
                                <li className="book-list--item">Contacts</li>
                            </ul>
                            <h1 className='toggler'>{isAuth ? 'Logged In' : ' Logged out'}</h1>
                            <button className='toggler--button' onClick={toggleAuth}>Log in</button>
                        </nav>
                    );
                }}
            </ThemeContext.Consumer>
        )}
        </AuthContext.Consumer>
    )

}

export default BookList;
