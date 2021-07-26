import React from 'react';

import AppContext from '../../context';

import arrow from '../../img/arrow.svg';


const Info = ( {title, description, image} ) => {

    const { setCartOpened } = React.useContext(AppContext);

    return (
        <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img className="mb-20" width="120px" src={image} alt="basket is empty" />
            <h2>
                {title}
            </h2>
            <p className="opacity-6">
                {description}
            </p>
            <button
                onClick={() => setCartOpened(false)}
                className="greenButton"
            >
                <img
                    src={arrow}
                    alt="arrow"
                />
                Come back
            </button>
        </div>
    )
}

export default Info;