import { useState, useEffect } from 'react'
import './App.css'
import CoinInfo from './components/CoinInfo';
import SideNav from './components/SideNav';

const API_KEY = import.meta.env.VITE_APP_API_KEY;

function App() {
  const [list, setList] = useState(null);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const fetchAllCoinData = async () => {
      const response = await fetch("https://min-api.cryptocompare.com/data/all/coinlist?&api_key=" + API_KEY);
      const json = await response.json();
      setList(json)
    }
    fetchAllCoinData().catch(console.error);
  }, []);

  const searchItems = searchValue => {
    setSearchInput(searchValue);
    if (searchValue !== "") {
      const filteredData = Object.keys(list.Data).filter((item) =>
        Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      )
      setFilteredResults(filteredData);
      console.log(filteredData)
    } else {
      setFilteredResults(Object.keys(list.Data));
    }
  }

  return (
    <div className='whole-page'>
      <SideNav />
      <h1>My Crypto List</h1>
      <input
        type="text"
        placeholder='Search...'
        onChange={(inputString) => searchItems(inputString.target.value)}
      />
      {searchInput.length > 0
        ? // what happens if we have search input? what list do we use to display coins?  
        <ul>
          {filteredResults.map((coin) =>
            list.Data[coin].PlatformType === "blockchain" ? (
              <CoinInfo
                key={list.Data[coin].Symbol}
                image={list.Data[coin].ImageUrl}
                name={list.Data[coin].FullName}
                symbol={list.Data[coin].Symbol}
              />
            ) : null
          )}
        </ul>
        : // what happens if we don't have search input? what list do we use to display coins?  
        <ul>
          {list && Object.entries(list.Data).map(([coin]) =>
            list.Data[coin].PlatformType === "blockchain" ? (
              <CoinInfo
                key={list.Data[coin].Symbol}
                image={list.Data[coin].ImageUrl}
                name={list.Data[coin].FullName}
                symbol={list.Data[coin].Symbol}
              />
            ) : null
          )}
        </ul>
      }
    </div>
  )
}

export default App
