import React from 'react';
import heartUnliked from '../../img/heart-unliked.svg';
import heartLiked from '../../img/heart-liked.svg';
import btnPlus from '../../img/btn-plus.svg';
import btnUnchecked from '../../img/btn-unchecked.svg';
import styles from './Card.module.scss';


const Card = ({id, title, imgUrl, price, onFavorite, onPlus, favorited = false}) => {

    const [isAdded, setIsAdded] = React.useState(false);

    const [isFavorite, setIsFavorite] = React.useState(favorited);

    const handleClick = () => {
        onPlus({title, imgUrl, price});
        setIsAdded(!isAdded);
    };

    const onClickFavorite = () => {
        onFavorite({id, title, imgUrl, price});
        setIsFavorite(!isFavorite);
    };

    return (
        <div className={styles.card}>

            <div className={styles.favorite} onClick={onClickFavorite}>
                <img src={isFavorite ? heartLiked : heartUnliked} alt="unliked"/>
            </div>

            <img width={133} height={112} src={imgUrl} alt="sneakers"/>

            <h5>{title}</h5>

            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Price</span>
                    <b>{price}</b>
                </div>
                    <img className={styles.plus} onClick={handleClick} src={isAdded ? btnUnchecked : btnPlus } alt="plus" />
            </div>

        </div>
    )
}

export default Card;