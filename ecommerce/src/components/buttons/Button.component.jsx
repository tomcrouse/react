import React from 'react';

const Button = ({ className, text, type }) => {
    return (
        <div className={"btn " + className}>
            <button className={type === 'login' ? 'btn btn--login' : 'btn btn--register'}>{text}</button>
        </div>
    );
}

export default Button;
