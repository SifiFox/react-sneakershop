import React from 'react';
import styles from './Card.module.scss';

function Card(props)  {

        const [isAdded, setIsAdded] = React.useState(false);

        const onClickPlus = () => {
            setIsAdded(!isAdded);
        }

        return (
            <div className={styles.card}>
                <div className={styles.favorite}>
                    <img src="/img/heart-unliked.svg" alt="unliked" onClick={props.onClickFavorite}/>
                </div>
                <img src={props.imgUrl} width={133} height={112} alt='' />
                <h5>{props.title}</h5>
                <div className="d-flex justify-between align-center">
                    <div className="d-flex flex-column">
                        <span>Цена:</span>
                        <b>{props.price} руб</b>
                    </div>
                        <img src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} className={styles.plus}  alt='' onClick={onClickPlus} />

                </div>
            </div>
        );
}
export default Card;