import React from 'react';

function Card()  {
        return (
            <div className="card">
                <div className={"favorite"}>
                    <img src="/img/heart-unliked.svg" alt="unliked"/>
                </div>
                <img src='/img/sneakers/1.jpg' width={133} height={112} alt='' />
                <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                <div className="d-flex justify-between align-center">
                    <div className="d-flex flex-column">
                        <span>Цена:</span>
                        <b>10000 руб</b>
                    </div>
                    <button className="button">
                        <img src="/img/plus.svg" width={11} height={11} alt='' />
                    </button>
                </div>
            </div>
        );
}
export default Card;