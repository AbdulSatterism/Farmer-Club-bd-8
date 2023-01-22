import React from 'react';
import './FarmerCart.css'

const FarmerCart = ({ farmer, handleAddToCart }) => {
    const { img, name, age, time } = farmer;
    return (
        <div className='cart'>
            <img src={img} alt="" />
            <div className='cart-info'>
                <h4>{name}</h4>
                <p>Age: {age}</p>
                <p>Time: {time}</p>
            </div>
            <button onClick={() => handleAddToCart(farmer)} className='cart-btn'>Add to list</button>
        </div>
    );
};

export default FarmerCart;