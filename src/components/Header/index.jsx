import React from 'react';

import { Link } from 'react-router-dom';
import {useCart} from '../../hooks/useCart';

import logo from '../../img/logo.svg';
import cart from '../../img/cart.svg';
import heart from '../../img/heart.svg';
import user from '../../img/user.svg';


const Header = (props) => {

    const {totalPrice} = useCart();

    return (
        <header className="d-flex justify-between align-center p-40">
            <Link to="/">
                <div className="d-flex align-center">
                    <img width={40} height={40} src={logo} alt="logo" />
                    <div>
                        <h3 className="text-uppercase">The Best Sneakers</h3>
                        <p className="opacity-5">shop of the best sneakers</p>
                    </div>
                </div>
            </Link>
            <ul className="d-flex">
                <li className="mr-30 cu-p">
                    <img onClick={props.onClickCart} width={18} height={18} src={cart} alt="cart" />
                    <span>{totalPrice} euro</span>
                </li>
                <li className="mr-20 cu-p">
                    <Link to="/favorites">
                        <img width={18} height={18} src={heart} alt="like" />
                    </Link>
                </li>
                <li className="cu-p">
                    <Link to="/orders">
                        <img width={18} height={18} src={user} alt="user" />
                    </Link>
                </li>
            </ul>
        </header>
    );
};

export default Header;