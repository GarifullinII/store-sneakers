import React from 'react';
import ContentLoader from 'react-content-loader';
import heartUnliked from '../../img/heart-unliked.svg';
import heartLiked from '../../img/heart-liked.svg';
import btnPlus from '../../img/btn-plus.svg';
import btnUnchecked from '../../img/btn-unchecked.svg';
import styles from './Card.module.scss';


const Card = ({id, title, imageUrl, price, onFavorite, onPlus, favorited = false, added = false}) => {

    const [isAdded, setIsAdded] = React.useState(added);

    const [isFavorite, setIsFavorite] = React.useState(favorited);

    const handleClick = () => {
        onPlus({id, title, imageUrl, price});
        setIsAdded(!isAdded);
    };

    const onClickFavorite = () => {
        onFavorite({id, title, imageUrl, price});
        setIsFavorite(!isFavorite);
    };

    return (
        <div className={styles.card}>

            <ContentLoader
                speed={2}
                width={150}
                height={180}
                viewBox="0 0 150 180"
                backgroundColor="#a0e797"
                foregroundColor="#ecebeb"
            >
                <rect x="0" y="0" rx="10" ry="10" width="150" height="91" />
                <rect x="0" y="120" rx="4" ry="4" width="93" height="15" />
                <rect x="0" y="98" rx="4" ry="4" width="150" height="15" />
                <rect x="0" y="150" rx="5" ry="5" width="80" height="24" />
                <rect x="119" y="142" rx="10" ry="10" width="32" height="32" />
            </ContentLoader>

            {/*<div className={styles.favorite} onClick={onClickFavorite}>
                <img src={isFavorite ? heartLiked : heartUnliked} alt="unliked"/>
            </div>

            <img width={133} height={112} src={imageUrl} alt="sneakers"/>

            <h5>{title}</h5>

            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Price</span>
                    <b>{price}</b>
                </div>
                    <img className={styles.plus} onClick={handleClick} src={isAdded ? btnUnchecked : btnPlus} alt="plus" />
            </div>*/}

        </div>
    )
}

export default Card;