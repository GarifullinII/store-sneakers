import React from 'react';
import search from './img/search.svg';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';
import remove from "./img/btn-remove.svg";

const App = () => {

    const [items, setItems] = React.useState([]);

    const [cartItems, setCartItems] = React.useState([]);

    const [drawerItems, setDrawerItems] = React.useState([]);

    const [searchValue, setSearchValue] = React.useState('');

    const [cartOpened, setCartOpened] = React.useState(false);

    React.useEffect(() => {
        fetch('https://60f30ad66d44f30017788896.mockapi.io/items')
            .then((res) => {return res.json()})
            .then((json) => {setItems(json)});
    }, []);

    const onAddToCart = (obj) => {
        setCartItems(prev => [...prev, obj]);

    };

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    };

  return (
    <div className="wrapper clear">
        <Header
            onClickCart={() => {setCartOpened(true)}}
        />

        {cartOpened &&
            <Drawer
                items={cartItems}
                onClose={() => {setCartOpened(false)}}
            />
        }

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

                {
                    items
                        .filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
                        .map((item, index) => (
                            <Card
                                key={index}
                                title={item.title}
                                price={item.price}
                                imgUrl={item.imgUrl}
                                onFavorite={() => console.log("bookmarked")}
                                onPlus={(obj) => onAddToCart(obj)}
                            />
                    ))
                }

            </div>

        </div>

    </div>
  );
}

export default App;
