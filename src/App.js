import React from 'react';
import search from './img/search.svg';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';
/*
import sneakers1 from './img/sneakers/sneakers1.jpg';
import sneakers2 from './img/sneakers/sneakers2.jpg';
import sneakers3 from './img/sneakers/sneakers3.jpg';
import sneakers4 from './img/sneakers/sneakers4.jpg';
*/

/*
const ArraySneakers = [
    {
        title: "Nike Blazer Mid Suede Mens Trainers",
        price: "300 $",
        imgUrl: "https://archakov06.github.io/react-sneakers/img/sneakers/1.jpg"
    },
    {
        title: "Nike Air Max 270 Mens Trainers",
        price: "300 $",
        imgUrl: "https://archakov06.github.io/react-sneakers/img/sneakers/2.jpg"
    },
    {
        title: "Nike Blazer Mid Suede Mens Trainers",
        price: "250 $",
        imgUrl: "https://archakov06.github.io/react-sneakers/img/sneakers/3.jpg"
    },
    {
        title: "Puma X Aka Boku Future Rider Mens Trainers",
        price: "250 $",
        imgUrl: "https://archakov06.github.io/react-sneakers/img/sneakers/4.jpg"
    }
]
*/

const App = () => {

    const [items, setItems] = React.useState([]);

    const [cartOpened, setCartOpened] = React.useState(false);

    fetch('https://60f30ad66d44f30017788896.mockapi.io/items')
        .then((res) => {return res.json()})
        .then((json) => {setItems(json)});

  return (
    <div className="wrapper clear">
        <Header
            onClickCart={() => {setCartOpened(true)}}
        />

        {cartOpened && <Drawer onClose={() => {setCartOpened(false)}}/>}

        <div className="content  p-40">

            <div className="d-flex align-center justify-between mb-40">
                <h1>All sneakers</h1>
                <div className="search-block d-flex">
                    <img src={search} alt="search"/>
                    <input placeholder="search ..."/>
                </div>
            </div>

            <div className="d-flex flex-wrap">

                {
                    items.map((obj) => (
                        <Card
                            title={obj.title}
                            price={obj.price}
                            imgUrl={obj.imgUrl}
                            onFavorite={() => console.log("bookmarked")}
                            onPlus={() => console.log("clicked on the plus")}
                        />
                    ))
                }

            </div>

        </div>

    </div>
  );
}

export default App;
