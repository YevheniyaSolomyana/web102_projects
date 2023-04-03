import { useState, useEffect } from 'react'
import './App.css'
import List from './components/List';
import Cards from './components/Cards';

function App() {
  const [list, setList] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.openbrewerydb.org/breweries");
      const json = await response.json();
      if (json && json.length > 0) {
        setList(json);
        // console.log(json);
      } else {
        alert("Something went wrong!");
      }
    };
    fetchData().catch(console.error);
  }, []);

  const searchItems = searchValue => {
    setSearchInput(searchValue);
    if (searchValue !== "") {
      const filteredData = list.filter((item) =>
        Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      )
      setFilteredResults(filteredData);
      // console.log(filteredData)
    } else {
      setFilteredResults(list);
    }
  }

  const handleSelect = (e) => {
    let value = e.target.value;
    if(value === "all") {
      const newList = [...list];
      setFilteredResults(newList);
    } else {
      const newList = [...list];
      let selectItems = newList.filter((item)=>{
        return item.brewery_type === value
      })
      setFilteredResults(selectItems);
    }
  }

  return (
    <div className='whole-page'>
      <Cards list={list} />
      <input
        type="text"
        placeholder='Search...'
        onChange={(inputString) => searchItems(inputString.target.value)}
      />
      <select onChange={handleSelect} >
          <option value="all">all</option>
          <option value="contract">contract</option>
          <option value="proprietor">proprietor</option>
          <option value="brewpub">brewpub</option>
          <option value="large">large</option>
          <option value="micro">micro</option>
          <option value="closed">closed</option>

        </select>
      {searchInput.length > 0 || filteredResults.length > 0
        ? // what happens if we have search input? what list do we use to display coins?  
        <ul>
          {filteredResults && filteredResults.map((item) => (
            <List
              key={item.id}
              id={item.id}
              name={item.name}
              street={item.street}
              city={item.city}
              state={item.state}
              type={item.brewery_type}
            />
          ))}
        </ul>
        : // what happens if we don't have search input? what list do we use to display coins?  
        <ul>
          {list && list.map((item) => (
            <List
              key={item.id}
              id={item.id}
              name={item.name}
              street={item.street}
              city={item.city}
              state={item.state}
              type={item.brewery_type}
            />
          ))}
        </ul>
      }
    </div>
  )
}

export default App