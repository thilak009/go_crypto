import React from 'react';
import {ImArrowUp,ImArrowDown} from 'react-icons/im';
import { Link } from 'react-router-dom';

function MobileList({id,name,image,price,market_cap,price_change}) {
    return (
        <div className="coin-list">
            <img src={image} className="coin-image"></img>

            <Link to={`/coin/${id}`} className="coin-link"
            image={image}><h3>{name}</h3></Link>
            
            <p>Current Price : ${price}</p>
            {
                price_change < 0?(<p className="coin-percent">Price Change(1h) : <span className="red"><ImArrowDown/> {price_change.toFixed(2)}%</span></p>)
                :(<p className="coin-percent">Price Change(1h) :<span className="green"><ImArrowUp/> {price_change.toFixed(2)}%</span></p>)
            }
            <p>Market Cap : ${market_cap.toLocaleString()}</p>
        </div>
    )
}

export default MobileList
