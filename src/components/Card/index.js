import React from 'react';
import styles from './Card.module.scss';

function Card({onFavorite, onPlus, price, title, imgUrl})  {

        const [isAdded, setIsAdded] = React.useState(false);

        const onClickPlus = () => {
            setIsAdded(!isAdded);
            onPlus({title, imgUrl, price});
        }

        return (
            <div className={styles.card}>
                <div className={styles.favorite}>
                    <img src="/img/heart-unliked.svg" alt="unliked" onClick={onFavorite}/>
                </div>
                <img src={imgUrl} width={133} height={112} alt='' />
                <h5>{title}</h5>
                <div className="d-flex justify-between align-center">
                    <div className="d-flex flex-column">
                        <span>Цена:</span>
                        <b>{price} руб</b>
                    </div>
                    <img src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} className={styles.plus}  alt='' onClick={onClickPlus} />
                </div>
            </div>
        );
}
export default Card;