import React from 'react';
import remove from '../../img/btn-remove.svg';
import arrow from '../../img/arrow.svg';
import emptyCart from '../../img/empty-cart.jpg'

const Drawer = ({ onClose, onRemove, items = [] }) => {
    return (
        <div className="overlay">
            <div className="drawer">
                <h2 className="d-flex justify-between mb-30">
                    Basket
                    <img
                        onClick={onClose}
                        className="removeBtn cu-p"
                        src={remove}
                        alt="remove"/>
                </h2>
                {
                    items.length > 0 ? (
                        <div>
                            <div className="items">

                                {items.map((obj) => (
                                    <div>

                                        <div key={obj.id} className="cartItem d-flex align-center mb-20">
                                            <div
                                                style={{backgroundImage:`url(${obj.imageUrl})`}}
                                                className="cartItemImg"
                                            >
                                            </div>
                                            <div className="mr-20 flex">
                                                <p className="mb-5">
                                                    {obj.title}
                                                </p>
                                                <b>
                                                    {obj.price}
                                                </b>
                                            </div>
                                            <img
                                                onClick={() => onRemove(obj.id)}
                                                className="removeBtn"
                                                src={remove}
                                                alt="remove"
                                            />
                                        </div>

                                    </div>
                                ))}
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
                    ) : (
                        <div className="cartEmpty d-flex align-center justify-center flex-column flex">
                        <img className="mb-20" width="120px" height="120px" src={emptyCart} alt="basket is empty"/>
                        <h2>Basket is empty</h2>
                        <p className="opacity-6">
                            Add at least one pair of sneakers to order
                        </p>
                        <button onClick={onClose} className="greenButton">
                            <img src={arrow} alt="arrow"/>
                            Come back
                        </button>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default Drawer;