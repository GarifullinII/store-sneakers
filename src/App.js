import search from './img/search.svg';
import Card from './components/card/Card';
import Header from './components/header/Header';
import Drawer from './components/drawer/Drawer';
import sneakers1 from './img/sneakers/sneakers1.jpg';
import sneakers2 from './img/sneakers/sneakers2.jpg';
import sneakers3 from './img/sneakers/sneakers3.jpg';
import sneakers4 from './img/sneakers/sneakers4.jpg';

const arr = [
    {name: 'Nike Blazer Mid Suede Mens Trainers', price: 300},
    {name: 'Nike Air Max 270 Mens Trainers', price: 300},
    {name: 'Nike Blazer Mid Suede Mens Trainers', price: 250},
    {name: 'Puma X Aka Boku Future Rider Mens Trainers', price: 250}
]

const App = () => {
  return (
    <div className="wrapper clear">

        <Drawer />

        <Header />

        <div className="content p-40">

            <div className="d-flex align-center justify-between mb-40">
                <h1>All sneakers</h1>
                <div className="search-block d-flex">
                    <img src={search} alt="search"/>
                    <input placeholder="search ..."/>
                </div>
            </div>

            <div className="d-flex">

                <Card
                    title="Nike Blazer Mid Suede Mens Trainers"
                    price="300 $"
                    imgUrl={sneakers1}
                />

                <Card
                    title="Nike Air Max 270 Mens Trainers"
                    price="300 $"
                    imgUrl={sneakers2}
                />

                <Card
                    title="Nike Blazer Mid Suede Mens Trainers"
                    price="250 $"
                    imgUrl={sneakers3}
                />

                <Card
                    title="Puma X Aka Boku Future Rider Mens Trainers"
                    price="250 $"
                    imgUrl={sneakers4}
                />

                {/*{
                    arr.map((obj) => (
                        <Card/>
                    ))
                }*/}

            </div>

        </div>

    </div>
  );
}

export default App;
