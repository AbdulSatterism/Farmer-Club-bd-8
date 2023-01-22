import React, { useState } from 'react';
import './Cart.css'
import pic from '../../image/my.jpg'
import { addToDb } from '../../utilities/storage';

const Cart = ({ carts }) => {
    // console.log(carts)
    let time = 0;
    for (const cart of carts) {
        time = time + cart.time
    }

    const [breakTime, setBreakTime] = useState(0);
    const handleBreakTime = (event) => {
        // let newTime = 0;
        let newTime = event.target.innerText;
        // console.log('clicked', event.target.innerText)
        setBreakTime(newTime)
        addToDb(newTime)
    }


    return (
        <div>
            <div className="info">
                <div className='my-info'>
                    <img src={pic} alt="" />
                    <h3>Abdul Satter</h3>
                </div>
                <div className='bio'>
                    <p>54 <span>Weight</span></p>
                    <p>5.4 <span>Height</span></p>
                    <p>22<span>Age</span></p>
                </div>
            </div>
            <h2 className='break'>Add a break</h2>
            <hr />

            <div className='break-time'>
                <button onClick={(event) => handleBreakTime(event)}>10s</button>
                <button onClick={(event) => handleBreakTime(event)}>20s</button>
                <button onClick={(event) => handleBreakTime(event)}>30s</button>
                <button onClick={(event) => handleBreakTime(event)}>40s</button>
            </div>
            <div className="exercise">
                <h3>Exercise Details</h3>
                <hr />
                <h4 className='time-field'>Exercise time : <small>{time} second</small></h4>
                <h4 className='time-field'>Break time : <small>{breakTime}</small></h4>

            </div>
            <button className='btn'>Activity Completed</button>
        </div>
    );
};

export default Cart;