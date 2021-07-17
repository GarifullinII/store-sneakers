import React from 'react';
import search from './img/search.svg';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';
import sneakers1 from './img/sneakers/sneakers1.jpg';
import sneakers2 from './img/sneakers/sneakers2.jpg';
import sneakers3 from './img/sneakers/sneakers3.jpg';
import sneakers4 from './img/sneakers/sneakers4.jpg';

const ArraySneakers = [
    {
        title: 'Nike Blazer Mid Suede Mens Trainers',
        price: 300,
        imgUrl: sneakers1
    },
    {
        title: 'Nike Air Max 270 Mens Trainers',
        price: 300,
        imgUrl: sneakers2
    },
    {
        title: 'Nike Blazer Mid Suede Mens Trainers',
        price: 250,
        imgUrl: sneakers3
    },
    {
        title: 'Puma X Aka Boku Future Rider Mens Trainers',
        price: 250,
        imgUrl: sneakers4
    }
]

const App = () => {

    const [cartOpened, setCartOpened] = React.useState(false);

  return (
    <div className="wrapper clear">
        <Header
            onClickCart={() => {setCartOpened(true)}}
        />

        {cartOpened ? <Drawer onClose={() => {setCartOpened(false)}}/> : null}

        <div className="content p-40">

            <div className="d-flex align-center justify-between mb-40">
                <h1>All sneakers</h1>
                <div className="search-block d-flex">
                    <img src={search} alt="search"/>
                    <input placeholder="search ..."/>
                </div>
            </div>

            <div className="d-flex">

                {
                    ArraySneakers.map((obj) => (
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
