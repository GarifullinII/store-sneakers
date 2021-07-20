import React from 'react';
import search from '../img/search.svg';
import remove from '../img/btn-remove.svg';
import Card from '../components/Card';


const Home = ( {items,
               searchValue,
               setSearchValue,
               onChangeSearchInput,
               onAddToFavorite,
               onAddToCart} ) => {
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

                {items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item, index) => (
                    <Card
                        key={index}
                        title={item.title}
                        price={item.price}
                        imgUrl={item.imgUrl}
                        onFavorite={(obj) => onAddToFavorite(obj)}
                        onPlus={(obj) => onAddToCart(obj)}
                    />
                ))}

            </div>

        </div>
    )
}

export default Home;