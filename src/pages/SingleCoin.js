import axios from 'axios';
import React,{useState,useEffect} from 'react';
import {useParams,Link} from 'react-router-dom';
import './singlecoin.css';

function SingleCoin() {
    const {id} =useParams();
    const [coin,setCoin]=useState({});


    useEffect(() =>{
        axios.get(`https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`)
        .then(res =>{
            setCoin(res.data);
            console.log(res.data.name);
        }).catch(error => console.log(error));
    },[id]);

    if(coin.name){
       const {image,name,hashing_algorithm,links,market_cap_rank,market_data,genesis_date,description}=coin;
        //console.log(image,name,hashing_algorithm,links,market_cap_rank,market_data);
    return (
        <div className="coin">
            <Link to="/" className="back-link">Back home</Link>

            <div className="coin-card">
                <img src={image.large} alt={`${name} logo`}></img>
                <div className="coin-data">

                    <h3>{name}</h3>
                    <p>Date Created : {genesis_date}</p>
                    <p>Current Price : ${market_data.current_price.usd.toLocaleString()}</p>
                    <p>Market Cap : ${market_data.market_cap.usd.toLocaleString()}</p>
                    <p>Hashing Algorithm : {hashing_algorithm?hashing_algorithm:"Unavailable"}</p>
                    <a href={links.homepage[0]} target="_blank" rel="noopener noreferrer">Website</a>
                    <p>Market Cap Rank : {market_cap_rank}</p>
                    <p>Subreddit URL : <a href={links.subreddit_url} target="_blank" rel="noopener noreferrer">{links.subreddit_url}</a></p>
                </div>
            </div>
        </div>
    )
    }
    else{
        return(
            <></>
        )
    }
}

export default SingleCoin;
