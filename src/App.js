import logo from './img/logo.svg';
import cart from './img/cart.svg';
import heart from './img/heart.svg';
import user from './img/user.svg';
import btnPlus from './img/btn-plus.svg';
import sneakers1 from './img/sneakers/sneakers1.jpg';
import sneakers2 from './img/sneakers/sneakers2.jpg';
import sneakers3 from './img/sneakers/sneakers3.jpg';
import sneakers4 from './img/sneakers/sneakers4.jpg';
import search from './img/search.svg';
import heartUnliked from './img/heart-unliked.svg';
import remove from './img/btn-remove.svg'

const App = () => {
  return (
    <div className="wrapper clear">

        <div className="overlay">
            <div className="drawer">
                <h2 className="mb-30">Basket</h2>

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
        </div>

      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
            <img width={40} height={40} src={logo} alt="logo" />
            <div>
                <h3 className="text-uppercase">The Best Sneakers</h3>
                <p className="opacity-5">shop of the best sneakers</p>
            </div>
        </div>
        <ul className="d-flex">
            <li className="mr-30">
                <img width={18} height={18} src={cart} alt="cart" />
                <span>230 $</span>
            </li>
            <li className="mr-30">
                <img width={18} height={18} src={heart} alt="like" />
            </li>
            <li>
                <img width={18} height={18} src={user} alt="user" />
            </li>
        </ul>
      </header>
        <div className="content p-40">

            <div className="d-flex align-center justify-between mb-40">
                <h1>All sneakers</h1>
                <div className="search-block d-flex">
                    <img src={search} alt="search"/>
                    <input placeholder="search ..."/>
                </div>
            </div>

            <div className="d-flex">
                <div className="card">

                    <div className="favorite">
                        <img src={heartUnliked} alt="unliked"/>
                    </div>

                    <img width={133} height={112} src={sneakers1} alt="sneakers"/>
                    <h5>Nike Blazer Mid Suede Mens Trainers</h5>
                    <div className="d-flex justify-between align-center">
                        <div className="d-flex flex-column">
                            <span>Price</span>
                            <b>300 $</b>
                        </div>
                        <button className="button">
                            <img width={11} height={11} src={btnPlus} alt="plus" />
                        </button>
                    </div>
                </div>

                <div className="card">
                    <img width={133} height={112} src={sneakers2} alt="sneakers"/>
                    <h5>Nike Air Max 270 Mens Trainers</h5>
                    <div className="d-flex justify-between align-center">
                        <div className="d-flex flex-column">
                            <span>Price</span>
                            <b>300 $</b>
                        </div>
                        <button className="button">
                            <img width={11} height={11} src={btnPlus} alt="plus" />
                        </button>
                    </div>
                </div>

                <div className="card">
                    <img width={133} height={112} src={sneakers3} alt="sneakers"/>
                    <h5>Nike Blazer Mid Suede Mens Trainers</h5>
                    <div className="d-flex justify-between align-center">
                        <div className="d-flex flex-column">
                            <span>Price</span>
                            <b>300 $</b>
                        </div>
                        <button className="button">
                            <img width={11} height={11} src={btnPlus} alt="plus" />
                        </button>
                    </div>
                </div>

                <div className="card">
                    <img width={133} height={112} src={sneakers4} alt="sneakers"/>
                    <h5>Puma X Aka Boku Future Rider Mens Trainers</h5>
                    <div className="d-flex justify-between align-center">
                        <div className="d-flex flex-column">
                            <span>Price</span>
                            <b>350 $</b>
                        </div>
                        <button className="button">
                            <img width={11} height={11} src={btnPlus} alt="plus" />
                        </button>
                    </div>
                </div>
            </div>

        </div>
    </div>
  );
}

export default App;
