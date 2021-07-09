const App = () => {
  return (
    <div className="wrapper">
      <header className="d-flex justify-between">
        <div className="headerLeft">
            <img width={40} height={40} src={"/img/logo.svg"} />
            <div className="headerInfo">
                <h3>The Best Sneakers</h3>
                <p>shop of the best sneakers</p>
            </div>
        </div>
        <ul className="headerRight">
            <li>
                <img width={18} height={18} src={"/img/cart.svg"} />
                <span>230 $</span>
            </li>
            <li>
                <img width={18} height={18} src={"/img/user.svg"} />
            </li>
        </ul>
      </header>
        <div className="content">
            <h1>All sneakers</h1>
            ...
        </div>
    </div>
  );
}

export default App;
