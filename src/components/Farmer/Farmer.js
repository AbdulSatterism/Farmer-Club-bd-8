import React, { useEffect, useState } from 'react';
import { addToDb, getDataFromDb } from '../../utilities/storage';
import Cart from '../Cart/Cart';
import FarmerCart from '../FarmerCart/FarmerCart';
import './Farmer.css'

const Farmer = () => {
    const [farmers, setFarmers] = useState([]);
    const [carts, setCarts] = useState([])
    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setFarmers(data))
    }, [])

    useEffect(() => {
        const storedCart = getDataFromDb();
        let savedTime = []
        for (const time in storedCart) {
            const addedTime = farmers.find(farmer => farmer.time == time);
            if (addedTime) {
                savedTime.push(addedTime)
            }

        }
        setCarts(savedTime)
    }, [farmers])

    const handleAddToCart = (farmers) => {
        const newCart = [...carts, farmers]
        setCarts(newCart)
        addToDb(farmers.time)
    }
    return (
        <div className='main-container'>
            <div className="farmer-container">
                {
                    farmers.map(farmer => <FarmerCart
                        farmer={farmer}
                        key={farmer.id}
                        handleAddToCart={handleAddToCart}
                    ></FarmerCart>)
                }
            </div>
            <div className="cart-container">
                {
                    <Cart carts={carts}></Cart>
                }

            </div>
        </div>
    );
};

export default Farmer;