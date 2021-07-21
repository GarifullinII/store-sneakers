import React from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Home from './pages/Home';
import Favorites from './pages/Favorites';


const App = () => {

    const [items, setItems] = React.useState([]);

    const [cartItems, setCartItems] = React.useState([]);

    const [favorites, setFavorites] = React.useState([]);

    const [searchValue, setSearchValue] = React.useState('');

    const [cartOpened, setCartOpened] = React.useState(false);

    React.useEffect(() => {
        async function fetchData() {
            const cartResponse = await axios.get('https://60f30ad66d44f30017788896.mockapi.io/cart');
            const favoritesResponse = await axios.get('https://60f30ad66d44f30017788896.mockapi.io/favorites');
            const itemsResponse = await axios.get('https://60f30ad66d44f30017788896.mockapi.io/items');

            setCartItems(cartResponse.data);
            setFavorites(favoritesResponse.data);
            setItems(itemsResponse.data);
        }

        fetchData();
    }, []);

    const onAddToCart = (obj) => {
        try {
            if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
                axios.delete(`https://60f30ad66d44f30017788896.mockapi.io/cart/${obj.id}`);
                setCartItems(prev => prev.filter((item) => Number(item.id) !== Number(obj.id)));
            } else {
                axios.post('https://60f30ad66d44f30017788896.mockapi.io/cart', obj);
                setCartItems((prev) => [...prev, obj]);
            }
        } catch (error) {
            alert('Failed to add to basket')
        }
    };

    const onRemoveItem = (id) => {
        axios.delete(`https://60f30ad66d44f30017788896.mockapi.io/cart/${id}`);
        setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)));
    }

    const onAddToFavorite = async (obj) => {
            if(favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
                axios.delete(`https://60f30ad66d44f30017788896.mockapi.io/favorites/${obj.id}`);
                setFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
            } else {
                const {data} = await axios.post('https://60f30ad66d44f30017788896.mockapi.io/favorites', obj);
                setFavorites((prev) => [...prev, data]);
            }
    };

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
                cartItems={cartItems}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onChangeSearchInput={onChangeSearchInput}
                onAddToFavorite={onAddToFavorite}
                onAddToCart={onAddToCart}
            />
        </Route>
        <Route path="/favorites" exact>
            <Favorites items={favorites} onAddToFavorite={onAddToFavorite}/>
        </Route>
    </div>
  );
};

export default App;
