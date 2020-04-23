import React, { useState } from 'react';
import Icon from '@mdi/react'
import { MdStarBorder } from 'react-icons/md';
import { MdStar } from 'react-icons/md';

const Stars = () => {

    let counter = 0;
    const [stars, setStars] = useState(counter)
    const [hover, setHover] = useState(counter)

    return (
        <div className="stars">
            {[...Array(5)].map((el, i) => {
                const rating = i
                return (
                    (rating <= (hover || stars)) ?
                        <MdStar key={i}
                            onMouseEnter={() => setHover(rating)}
                            onMouseLeave={() => setHover(0)}
                            onClick={() => setStars(i)} /> :
                        <MdStarBorder key={i}
                            className="star"
                            onMouseEnter={() => setHover(rating)}
                            onMouseLeave={() => setHover(0)}
                            onClick={() => setStars(i)} />
                )
            })}
        </div>
    );
}
export default Stars;
