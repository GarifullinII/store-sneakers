import React from 'react';

import axios from 'axios';

import Info from '../Info/Info';
import {useCart} from '../../hooks/useCart';

import styles from './Drawer.module.scss';

import remove from '../../img/btn-remove.svg';
import arrow from '../../img/arrow.svg';
import emptyCart from '../../img/empty-cart.jpg';
import completeOrder from '../../img/complete-order.jpg';


const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Drawer = ({ onClose, onRemove, items = [], opened }) => {

    const {cartItems, setCartItems, totalPrice} = useCart();

    const [orderId, setOrderId] = React.useState(null);

    const [isOrderComplete, setIsOrderComplete] = React.useState(false);

    const [isLoading, setIsLoading] = React.useState(false);

    const onClickOrder = async () => {
        try {
            setIsLoading(true)
            const { data } = await axios.post('https://60f30ad66d44f30017788896.mockapi.io/orders', {
               items: cartItems
            });
            setOrderId(data.id);
            setIsOrderComplete(true);
            setCartItems([]);
            for (let i = 0; i < cartItems.length; i++) {
                const item = cartItems[i];
                await axios.delete('https://60f30ad66d44f30017788896.mockapi.io/cart/' + item.id);
                await delay(1000);
            }
        } catch (error) {
            alert('Failed to create order :(')
        }
        setIsLoading(false)
    };

    return (
        <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`}>
            <div className={styles.drawer}>
                <h2 className="d-flex justify-between mb-30">
                    Basket
                    <img
                        onClick={onClose}
                        className="removeBtn cu-p"
                        src={remove}
                        alt="remove"/>
                </h2>
                {items.length > 0 ? (
                        <div className="d-flex flex-column flex">
                            <div className="items flex">

                                {items.map((obj) => (
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
                                ))}
                            </div>
                            <div className="cartTotalBlock">
                                <ul>
                                    <li>
                                        <span>Total:</span>
                                        <div></div>
                                        <b>{totalPrice} euro</b>
                                    </li>
                                    <li>
                                        <span>Tax 5%:</span>
                                        <div></div>
                                        <b>{(totalPrice / 100) * 5} euro</b>
                                    </li>
                                </ul>
                                <button disabled={isLoading} onClick={onClickOrder} className="greenButton">
                                    Checkout
                                    <img src={arrow} alt="arrow"/>
                                </button>
                            </div>
                        </div>
                    ) : (
                        <Info
                            title={isOrderComplete ? "Order is processed" : "Basket is empty"}
                            description={isOrderComplete ? `Your order #${orderId} will be delivered by courier soon` : "Add at least one pair of sneakers to order"}
                            image={isOrderComplete ? completeOrder : emptyCart}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default Drawer;