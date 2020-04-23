import React from 'react';
import image from './image.png';

const comment = () => {
    return (
        <div className="comment">
            <div className="comment__head">
                <div className="comment__photo">
                    <img src={image} alt="User Photo" />
                </div>
                <div className="comment__info">
                    <h4 className="comment__user-name">Мурад Сарафанов</h4>
                    <div className="comment__date">5 дней назад</div>
                </div>
            </div>
            <div className="comment__main">
                <div className="comment__likes"></div>
                <div className="comment__text">Великолепный матрас на кровати в основной спальне!
                 А пуфик вообще потрясающий. И стены, действительно, шумоподавляющие. Выкрикивал комплименты повару — никто не жаловался из соседей.</div>
            </div>
        </div>
    );
}

export default comment;
