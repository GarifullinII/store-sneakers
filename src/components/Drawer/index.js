import React from 'react';
import remove from '../../img/btn-remove.svg';
import arrow from '../../img/arrow.svg';

const Drawer = ({ onClose, items = [] }) => {
    return (
        <div className="overlay">
            <div className="drawer">

                <h2 className="d-flex justify-between mb-30">Basket <img onClick={onClose} className="removeBtn cu-p" src={remove} alt="remove"/></h2>

                <div className="items">

                    {
                        items.map((obj) => (
                            <div className="cartItem d-flex align-center mb-20">
                                <div
                                    style={{backgroundImage:`url(${obj.imgUrl})`}}
                                    className="cartItemImg"
                                >
                                </div>
                                <div className="mr-20 flex">
                                    <p className="mb-5">
                                        {obj.title}
                                    </p>
                                    <b>{obj.price}</b>
                                </div>
                                <img className="removeBtn" src={remove} alt="remove"/>
                            </div>
                        ))
                    }

                </div>

                <div className="cartTotalBlock">

                    <ul>
                        <li>
                            <span>Total:</span>
                            <div></div>
                            <b>650 $</b>
                        </li>
                        <li>
                            <span>Tax 5%:</span>
                            <div></div>
                            <b>32 $</b>
                        </li>
                    </ul>

                    <button className="greenButton">Checkout <img src={arrow} alt="arrow"/></button>

                </div>

            </div>
        </div>
    )
}

export default Drawer;