import { useState, useEffect } from 'react'
import './App.css'
import DiscoverCat from './components/DiscoverCat';

const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;

function App() {
  const [breed, setBreed] = useState('');
  const [origin, setOrigin] = useState('');
  const [lifeSpan, setLifeSpan] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [banList, setBanList] = useState([]);

  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/breeds')
      .then(response => response.json())
      .then(data => {
        const filteredData = data.filter(item => !banList.includes(item.name) && !banList.includes(item.origin) && !banList.includes(item.lifeSpan));
        const randomIndex = Math.floor(Math.random() * filteredData.length);
        setBreed(filteredData[randomIndex].name);
        setOrigin(filteredData[randomIndex].origin);
        setLifeSpan(filteredData[randomIndex].life_span);
        fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${filteredData[randomIndex].id}&api_key=${ACCESS_KEY}`)
          .then(response => response.json())
          .then(data => {
            setImageUrl(data[0].url);
          });
      });
  }, [banList]);

  const handleNewCat = () => {
    fetch('https://api.thecatapi.com/v1/breeds')
      .then(response => response.json())
      .then(data => {
        const filteredData = data.filter(item => !banList.includes(item.name) && !banList.includes(item.origin) && !banList.includes(item.lifeSpan));
        const randomIndex = Math.floor(Math.random() * filteredData.length);
        setBreed(filteredData[randomIndex].name);
        setOrigin(filteredData[randomIndex].origin);
        setLifeSpan(filteredData[randomIndex].life_span);
        fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${filteredData[randomIndex].id}&api_key=${ACCESS_KEY}`)
          .then(response => response.json())
          .then(data => {
            setImageUrl(data[0].url);
          });
      });
  };

  const handleBanAttribute = attribute => {
    setBanList([...banList, attribute]);
  };

  return (
    <div>
      <button onClick={handleNewCat}>New Cat</button>
      <DiscoverCat
        breed={breed}
        origin={origin}
        lifeSpan={lifeSpan}
        imageUrl={imageUrl}
        banList={banList}
        onBanAttribute={handleBanAttribute}
      />
    </div>
  );
}

export default App
