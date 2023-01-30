import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [data, setData] = useState([]);
  const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '399150df6cmsh35f5184d12a3c5dp112fc8jsn0d41cd98cdc1',
    'X-RapidAPI-Host': 'kanjialive-api.p.rapidapi.com'
  }
};

fetch('https://kanjialive-api.p.rapidapi.com/api/public/search/advanced/?on=シン', options)
  .then(response => response.json())
  .then(json => {
    console.log("json", json)
    setData(json)
  }).catch(err => console.error(err));

  /*const url = "https://kanjialive-api.p.rapidapi.com/api/public/kanji/訪";

    fetch(url)
    .then(response => response.json())
    .then(json => {
      console.log("json", json)
      setData(json)
    }).catch(e=>{
      console.log("e", e)
    })*/

  return (
    <div className="App">
      <h2>welcome</h2>
      {
        data.map(item => {
          return (
          <div>{item}</div>
          )
        })
      }
    </div>
    );
  
}

export default App;
