import React,{useEffect,useState} from 'react';
import List from '.././components/List';
import axios from 'axios';
import './home.css';

function Home() {
    const [coins,setCoins] = useState([]);
    const [search,setSearch]= useState('');
    const [currency,setCurrency]=useState('usd');
  
    useEffect(() =>{
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        .then(res => {
          setCoins(res.data);
        }).catch(error => console.log(error));
        
    },[]);
  
    const handleChange = e =>{
      setSearch(e.target.value);
    }
  
    const filteredCoins = coins.filter(coin =>
      coin.name.toLowerCase().includes(search.toLowerCase()));
    
    return (
        <div className="app">
          <div className="coin-search">
            <menu className="dropdown-menu">
                <ul>
                    <li>usd</li>
                    <li>inr</li>
                </ul>
            </menu>
            <form>
            <input type="text" placeholder="Search"
              onChange={handleChange} className="search-input"></input>
            </form>
          
          </div>
          <div className="coin-container">
            <div className="coin-list coin-list-header">
              <h3>Logo</h3>
              <h3>Name</h3>
              <h3>Current Price</h3>
              <h3>Price Change(1H)</h3>
              <h3>Market Cap</h3>
            </div>
            {
              filteredCoins.map((coin,id) => {
              return(
              <List key={id}
              id={coin.id}
              name={coin.name}
              image={coin.image}
              price={coin.current_price}
              market_cap={coin.market_cap}
              price_change={coin.price_change_percentage_24h}/>
              )
              })
            }
          </div>
        </div>
    )
}

export default Home;
