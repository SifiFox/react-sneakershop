import React, {Component} from 'react';

function Drawer() {
        return (
            <div style={{display: 'none'}} className="overlay">
                <div className="drawer">
                    <h2 className="mb-30 d-flex justify-between">Корзина<img src="/img/btn-remove.svg" alt="Remove" className="btn-remove  cu-p"/></h2>

                    <div className="items">

                        <div className="cart-item d-flex align-center mb-20">
                            <div style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }} className="cart-item-img">
                            </div>
                            <div className="mr-20 flex">
                                <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
                                <b>10000 руб.</b>
                            </div>
                            <img src="/img/btn-remove.svg" alt="Remove" className="btn-remove"/>
                        </div>


                        <div className="cart-item d-flex align-center mb-20">
                            <div style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }} className="cart-item-img">
                            </div>
                            <div className="mr-20 flex">
                                <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
                                <b>10000 руб.</b>
                            </div>
                            <img src="/img/btn-remove.svg" alt="Remove" className="btn-remove"/>
                        </div>

                        <div className="cart-item d-flex align-center mb-20">
                            <div style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }} className="cart-item-img">
                            </div>
                            <div className="mr-20 flex">
                                <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
                                <b>10000 руб.</b>
                            </div>
                            <img src="/img/btn-remove.svg" alt="Remove" className="btn-remove"/>
                        </div>
                    </div>
                    <div className="cartTotalBlock">
                        <ul className="mb-40">
                            <li >
                                <span>Итого</span>
                                <div></div>
                                <b>22000 руб</b>
                            </li>
                            <li >
                                <span>Налог</span>
                                <div></div>
                                <b>5%</b>
                            </li>
                        </ul>
                        <button className="greenButton">Оформить заказ <img src="/img/arrow.svg" alt="Arrow"/></button>
                    </div>
                </div>
            </div>
        );
}

export default Drawer;