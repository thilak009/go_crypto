import React from 'react';
import {ImArrowUp,ImArrowDown} from 'react-icons/im';
import { Link } from 'react-router-dom';

function List({id,name,image,price,market_cap,price_change}) {

    return (
        <div className="coin-list">
            <img src={image} className="coin-image"></img>

            <Link to={`/coin/${id}`} className="coin-link"
            image={image}><h3>{name}</h3></Link>
            
            <p>${price}</p>
            {
                price_change < 0?(<p className="coin-percent red"><ImArrowDown/> {price_change.toFixed(2)}%</p>)
                :(<p className="coin-percent green"><ImArrowUp/> {price_change.toFixed(2)}%</p>)
            }
            <p>${market_cap.toLocaleString()}</p>
        </div>
    )
}

export default List;