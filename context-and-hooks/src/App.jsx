import React from 'react'
import './styles/App.scss'

import Navbar from './components/Navbar/Navbar'
import ToggleTheme from './components/ToggleTheme/ToggleTheme'
import AuthContextProvider from './contexts/Auth'
import BookList from './components/BookList/BookList'
import ContextThemeProvider from './contexts/ContextTheme'

const App = () => {
    return (
        <div className='app'>
            <ContextThemeProvider>
                <AuthContextProvider>
                    <Navbar />
                    <BookList />
                    <ToggleTheme />
                </AuthContextProvider>
            </ContextThemeProvider>
        </div>
    );
}

export default App
