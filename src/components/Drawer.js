import React from 'react';

function Drawer({onClose,items = []}) {
    return (
            <div  className="overlay">
                <div className="drawer">
                    <h2 className="mb-30 d-flex justify-between">Корзина<img src="/img/btn-remove.svg" alt="Remove" className="btn-remove  cu-p" onClick={onClose}/></h2>

                    <div className="items">
                        {
                            items.map((obj, index) => (
                                <div className="cart-item d-flex align-center mb-20" key={obj.id}>
                                    <div style={{ backgroundImage: `url(${obj.imgUrl})` }} className="cart-item-img">
                                    </div>
                                    <div className="mr-20 flex">
                                        <p className="mb-5">{obj.title}</p>
                                        <b>{obj.price} руб.</b>
                                    </div>
                                    <img src="/img/btn-remove.svg" alt="Remove" className="btn-remove"/>
                                </div>
                            ))
                        }
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