import React from 'react';
import remove from '../../img/btn-remove.svg';
import sneakers2 from '../../img/sneakers/sneakers2.jpg';
import sneakers4 from '../../img/sneakers/sneakers4.jpg';
import arrow from '../../img/arrow.svg';

const Drawer = () => {
    return (
        <div className="overlay">
            <div className="drawer">

                <h2 className="d-flex justify-between mb-30">Basket <img className="removeBtn cu-p" src={remove} alt="remove"/></h2>

                <div className="items">
                    <div className="cartItem d-flex align-center mb-20">
                        <div
                            style={{backgroundImage:`url(${sneakers2})`}}
                            className="cartItemImg"
                        >
                        </div>
                        <div className="mr-20 flex">
                            <p className="mb-5">
                                Nike Air Max 270 Mens Trainers
                            </p>
                            <b>300 $</b>
                        </div>
                        <img className="removeBtn" src={remove} alt="remove"/>
                    </div>

                    <div className="cartItem d-flex align-center">
                        <div
                            style={{backgroundImage:`url(${sneakers4})`}}
                            className="cartItemImg"
                        >
                        </div>
                        <div className="mr-20 flex">
                            <p className="mb-5">
                                Puma X Aka Boku Future Rider Mens Trainers
                            </p>
                            <b>350 $</b>
                        </div>
                        <img className="removeBtn" src={remove} alt="remove"/>
                    </div>
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