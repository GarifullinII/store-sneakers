import React from 'react';
import heartUnliked from '../../img/heart-unliked.svg';
import btnPlus from '../../img/btn-plus.svg';
import btnUnchecked from '../../img/btn-unchecked.svg';
import styles from './Card.module.scss';

const Card = (props) => {

    const [isAdded, setIsAdded] = React.useState(false);

    const handleClick = () => {
        setIsAdded(!isAdded);
    };

    return (
        <div className={styles.card}>

            <div className={styles.favorite}>
                <img src={heartUnliked} alt="unliked" onClick={props.onFavorite}/>
            </div>

            <img width={133} height={112} src={props.imgUrl} alt="sneakers"/>

            <h5>{props.title}</h5>

            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Price</span>
                    <b>{props.price}</b>
                </div>
                    <img className={styles.plus} onClick={handleClick} src={isAdded ? btnUnchecked : btnPlus } alt="plus" />
            </div>

        </div>
    )
}

export default Card;