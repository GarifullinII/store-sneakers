import React from 'react';
import heartUnliked from "../../img/heart-unliked.svg";
import sneakers1 from "../../img/sneakers/sneakers1.jpg";
import btnPlus from "../../img/btn-plus.svg";

const Card = () => {
    return (
        <div className="card">

            <div className="favorite">
                <img src={heartUnliked} alt="unliked"/>
            </div>

            <img width={133} height={112} src={sneakers1} alt="sneakers"/>

            <h5>Nike Blazer Mid Suede Mens Trainers</h5>

            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Price</span>
                    <b>300 $</b>
                </div>
                <button className="button">
                    <img width={11} height={11} src={btnPlus} alt="plus" />
                </button>
            </div>

        </div>
    )
}

export default Card;