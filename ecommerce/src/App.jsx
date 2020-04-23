import React from 'react'
import './styles/App.styles.scss'

import Header from './components/Header/Header.component'
import Star from './components/FormElements/Stars'
import Comment from './components/FormElements/comment'

const App = () => {
    return (
        <div>
            <Header />
            <Star />
            <Comment />
        </div>
    )
}

export default App
