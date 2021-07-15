import search from './img/search.svg';
import Card from './components/card/Card';
import Header from './components/header/Header';
import Drawer from './components/drawer/Drawer';

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

                <Card />

            </div>

        </div>
    </div>
  );
}

export default App;
