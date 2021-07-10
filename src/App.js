import logo from './img/logo.svg';
import cart from './img/cart.svg';
import like from './img/like.svg';
import user from './img/user.svg';
import plus from './img/plus.svg';
import sneakers1 from './img/sneakers/sneakers1.jpg';
import sneakers2 from './img/sneakers/sneakers2.jpg';
import sneakers3 from './img/sneakers/sneakers3.jpg';
import sneakers4 from './img/sneakers/sneakers4.jpg';

const App = () => {
  return (
    <div className="wrapper clear">
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
                <img width={18} height={18} src={like} alt="like" />
            </li>
            <li>
                <img width={18} height={18} src={user} alt="user" />
            </li>
        </ul>
      </header>
        <div className="content p-40">
            <h1 className="mb-40">All sneakers</h1>

            <div className="d-flex">
                <div className="card">
                    <img width={133} height={112} src={sneakers1} alt="sneakers"/>
                    <h5>Nike Blazer Mid Suede Mens Trainers</h5>
                    <div className="d-flex justify-between align-center">
                        <div className="d-flex flex-column">
                            <span>Price</span>
                            <b>300 $</b>
                        </div>
                        <button className="button">
                            <img width={11} height={11} src={plus} alt="plus" />
                        </button>
                    </div>
                </div>

                <div className="card">
                    <img width={133} height={112} src={sneakers2} alt="sneakers"/>
                    <h5>Nike Blazer Mid Suede Mens Trainers</h5>
                    <div className="d-flex justify-between align-center">
                        <div className="d-flex flex-column">
                            <span>Price</span>
                            <b>300 $</b>
                        </div>
                        <button className="button">
                            <img width={11} height={11} src={plus} alt="plus" />
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
                            <img width={11} height={11} src={plus} alt="plus" />
                        </button>
                    </div>
                </div>

                <div className="card">
                    <img width={133} height={112} src={sneakers4} alt="sneakers"/>
                    <h5>Nike Blazer Mid Suede Mens Trainers</h5>
                    <div className="d-flex justify-between align-center">
                        <div className="d-flex flex-column">
                            <span>Price</span>
                            <b>300 $</b>
                        </div>
                        <button className="button">
                            <img width={11} height={11} src={plus} alt="plus" />
                        </button>
                    </div>
                </div>
            </div>

        </div>
    </div>
  );
}

export default App;
