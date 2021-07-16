import React from 'react';
import heartUnliked from '../../img/heart-unliked.svg';
import btnPlus from '../../img/btn-plus.svg';

const Card = (props) => {

    const onClickButton = () => {
        alert(props.price)
    }

    return (
        <div className="card">

            <div className="favorite">
                <img src={heartUnliked} alt="unliked"/>
            </div>

            <img width={133} height={112} src={props.imgUrl} alt="sneakers"/>

            <h5>{props.title}</h5>

            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Price</span>
                    <b>{props.price}</b>
                </div>
                <button className="button" onClick={onClickButton}>
                    <img width={11} height={11} src={btnPlus} alt="plus" />
                </button>
            </div>

        </div>
    )
}

export default Card;