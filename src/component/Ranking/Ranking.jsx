import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RankingItem from './RankingItem';
import Logo from "../image/Logo.png";
import search from "../image/search.png";
import "../Ranking/Ranking"

const Ranking = () => {
    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState(items);

    const rankUrl = 'http://218.53.53.163:8080/api/v1/contest/rank'
    useEffect(() => {
        const fetchData = async () => {
          try {
            const rankresponse = await axios.get(rankUrl);
            const port = rankresponse.data;
            console.log(rankresponse.data);
            console.log('Fetched Data:', port);
    
    
            setItems(port);
            setFilteredItems(port);
    
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
        fetchData();
        
    })
    return (      
    <div className ="test1">
        <div className='header'>
        <img src={Logo} alt='Logo'/>
        <input id='textSearch' type='text' placeholder='일본 오사카 IoT 솔루션...'></input>
        <img id='searchImg' src={search} alt='search'/>
      </div>
      <br/>
        {filteredItems.map(item => (
        <RankingItem contest={item} />
        ))}
    </div>
    );
}

export default Ranking;