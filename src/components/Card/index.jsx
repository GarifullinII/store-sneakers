import React from 'react';
import ContentLoader from 'react-content-loader';

import AppContext from '../../context';

import styles from './Card.module.scss';

import heartUnliked from '../../img/heart-unliked.svg';
import heartLiked from '../../img/heart-liked.svg';
import btnPlus from '../../img/btn-plus.svg';
import btnUnchecked from '../../img/btn-unchecked.svg';


const Card = ({
                  id,
                  title,
                  imageUrl,
                  price,
                  onFavorite,
                  onPlus,
                  favorited = false,
                  loading = false
              }) => {

    const { isItemAdded } = React.useContext(AppContext);

    const [isFavorite, setIsFavorite] = React.useState(favorited);

    const obj = {id, parentId: id, title, imageUrl, price};

    const onClickPlus = () => {
        onPlus(obj);
    };

    const onClickFavorite = () => {
        onFavorite(obj);
        setIsFavorite(!isFavorite);
    };

    return (
        <div className={styles.card}>
            {
                loading ?  (<ContentLoader
                    speed={2}
                    width={165}
                    height={250}
                    viewBox="0 0 155 265"
                    backgroundColor="#058aff"
                    foregroundColor="#ecebeb"
                >
                    <rect x="0" y="0" rx="10" ry="10" width="155" height="155" />
                    <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
                    <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
                    <rect x="0" y="234" rx="5" ry="5" width="80" height="25" />
                    <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
                </ContentLoader>) : (
                    <>
                        {
                            onFavorite && (
                                <div className={styles.favorite} onClick={onClickFavorite}>
                                    <img src={isFavorite ? heartLiked : heartUnliked} alt="unliked"/>
                                </div>
                            )
                        }
                    <img width="100%" height={135} src={imageUrl} alt="sneakers"/>
                    <h5>{title}</h5>
                    <div className="d-flex justify-between align-center">
                        <div className="d-flex flex-column">
                            <span>Price</span>
                            <b>{price} euro</b>
                        </div>
                        {onPlus && (
                            <img
                                className={styles.plus}
                                onClick={onClickPlus}
                                src={isItemAdded(id) ? btnUnchecked : btnPlus}
                                alt="plus"
                            />)}
                    </div>
                </>)}
        </div>
    )
}

export default Card;