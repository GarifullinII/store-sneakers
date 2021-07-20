import React from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Home from './pages/Home';


const App = () => {

    const [items, setItems] = React.useState([]);

    const [cartItems, setCartItems] = React.useState([]);

    const [favorites, setFavorites] = React.useState([]);

    const [searchValue, setSearchValue] = React.useState('');

    const [cartOpened, setCartOpened] = React.useState(false);

    React.useEffect(() => {
        axios.get('https://60f30ad66d44f30017788896.mockapi.io/items').then((res) => {
            setItems(res.data)
        });
        axios.get('https://60f30ad66d44f30017788896.mockapi.io/cart').then((res) => {
            setCartItems(res.data)
        });
    }, []);

    const onAddToCart = (obj) => {
        axios.post('https://60f30ad66d44f30017788896.mockapi.io/cart', obj);
        setCartItems((prev) => [...prev, obj]);
    };

    const onAddToFavorite = (obj) => {
        axios.post('https://60f30ad66d44f30017788896.mockapi.io/favorites', obj);
        setFavorites((prev) => [...prev, obj]);
    };

    const onRemoveItem = (id) => {
        axios.delete(`https://60f30ad66d44f30017788896.mockapi.io/cart/${id}`);
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    }

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    };

  return (
    <div className="wrapper clear">
        <Header
            onClickCart={() => {setCartOpened(true)}}
        />

        {cartOpened && <Drawer items={cartItems} onClose={() => {setCartOpened(false)}} onRemove={onRemoveItem}/>}

        <Route path="/" exact>
            <Home
                items={items}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onChangeSearchInput={onChangeSearchInput}
                onAddToFavorite={onAddToFavorite}
                onAddToCart={onAddToCart}
            />
        </Route>

    </div>
  );
}

export default App;
