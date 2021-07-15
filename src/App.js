import sneakers2 from './img/sneakers/sneakers2.jpg';
import sneakers4 from './img/sneakers/sneakers4.jpg';
import search from './img/search.svg';
import remove from './img/btn-remove.svg';
import arrow from './img/arrow.svg';
import Card from './components/card/Card';
import Header from "./components/header/Header";

const App = () => {
  return (
    <div className="wrapper clear">

        <div style={{display: "none"}} className="overlay">
            <div className="drawer">

                <h2 className="d-flex justify-between mb-30">Basket <img className="removeBtn cu-p" src={remove} alt="remove"/></h2>

                <div className="items flex">
                    <div className="cartItem d-flex align-center mb-20">
                        <div
                            style={{backgroundImage:`url(${sneakers2})`}}
                            className="cartItemImg"
                        >
                        </div>
                        <div className="mr-20 flex">
                            <p className="mb-5">
                                Nike Air Max 270 Mens Trainers
                            </p>
                            <b>300 $</b>
                        </div>
                        <img className="removeBtn" src={remove} alt="remove"/>
                    </div>

                    <div className="cartItem d-flex align-center">
                        <div
                            style={{backgroundImage:`url(${sneakers4})`}}
                            className="cartItemImg"
                        >
                        </div>
                        <div className="mr-20 flex">
                            <p className="mb-5">
                                Puma X Aka Boku Future Rider Mens Trainers
                            </p>
                            <b>350 $</b>
                        </div>
                        <img className="removeBtn" src={remove} alt="remove"/>
                    </div>
                </div>

                <div className="cartTotalBlock">

                    <ul>
                        <li>
                            <span>Total:</span>
                            <div></div>
                            <b>650 $</b>
                        </li>
                        <li>
                            <span>Tax 5%:</span>
                            <div></div>
                            <b>32 $</b>
                        </li>
                    </ul>

                    <button className="greenButton">Checkout <img src={arrow} alt="arrow"/></button>

                </div>

            </div>
        </div>

        <Header/>

        <div className="content p-40">

            <div className="d-flex align-center justify-between mb-40">
                <h1>All sneakers</h1>
                <div className="search-block d-flex">
                    <img src={search} alt="search"/>
                    <input placeholder="search ..."/>
                </div>
            </div>

            <div className="d-flex">

                <Card />

            </div>

        </div>
    </div>
  );
}

export default App;
