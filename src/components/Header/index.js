import React from 'react';
import logo from '../../img/logo.svg';
import cart from '../../img/cart.svg';
import heart from '../../img/heart.svg';
import user from '../../img/user.svg';


const Header = (props) => {
    return (
        <header className="d-flex justify-between align-center p-40">
            <div className="d-flex align-center">
                <img width={40} height={40} src={logo} alt="logo" />
                <div>
                    <h3 className="text-uppercase">The Best Sneakers</h3>
                    <p className="opacity-5">shop of the best sneakers</p>
                </div>
            </div>
            <ul className="d-flex">
                <li className="mr-30 cu-p">
                    <img onClick={props.onClickCart} width={18} height={18} src={cart} alt="cart" />
                    <span>230 $</span>
                </li>
                <li className="mr-30 cu-p">
                    <img width={18} height={18} src={heart} alt="like" />
                </li>
                <li className="cu-p">
                    <img width={18} height={18} src={user} alt="user" />
                </li>
            </ul>
        </header>
    )
}

export default Header;