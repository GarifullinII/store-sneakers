import React from 'react';

import Card from '../components/Card';

import search from '../img/search.svg';
import remove from '../img/btn-remove.svg';


const Home = ( {
                   items,
                   searchValue,
                   setSearchValue,
                   onChangeSearchInput,
                   onAddToFavorite,
                   onAddToCart,
                   isLoading
} ) => {

    const renderItems = () => {
        const filtredItems = items.filter((item) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase()),
            );
        return (isLoading ? [...Array(8)] : filtredItems).map((item, index) => (
                <Card
                    key={index}
                    onFavorite={(obj) => onAddToFavorite(obj)}
                    onPlus={(obj) => onAddToCart(obj)}
                    loading={isLoading}
                    {...item}
                />
            ));
    };

    return (
        <div className="content  p-40">
            <div className="d-flex align-center justify-between mb-40">
                <h1>{searchValue ? `Search by request: "${searchValue}"` : 'All sneakers'}</h1>
                <div className="search-block d-flex">
                    <img src={search} alt="search"/>
                    {searchValue && (
                        <img
                            onClick={() => setSearchValue('')}
                            className="clear cu-p"
                            src={remove}
                            alt="clear"
                        />
                    )}
                    <input onChange={onChangeSearchInput} value={searchValue} placeholder="search ..."/>
                </div>
            </div>
            <div className="d-flex flex-wrap">
                {renderItems()}
            </div>
        </div>
    );
};

export default Home;