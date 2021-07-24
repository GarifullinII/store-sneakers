import React from 'react';
import Card from "../components/Card";
import axios from 'axios';


const Orders = () => {

    const [orders, setOrders] = React.useState([]);

    React.useEffect(() => {
        (async () => {
            const { data } = await axios.get('https://60f30ad66d44f30017788896.mockapi.io/orders');

        })();
    }, []);

    return (
        <div className="content  p-40">
            <div className="d-flex align-center justify-between mb-40">
                <h1>My orders</h1>
            </div>
            <div className="d-flex flex-wrap">
                {[].map((item, index) => (
                    <Card/>
                ))}
            </div>
        </div>
    )
}

export default Orders;