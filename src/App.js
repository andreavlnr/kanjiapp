import { useEffect, useState } from 'react';
import './App.css';

function App() {

  function GenerateKanjis(){
  const [data, setData] = useState([]);
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '399150df6cmsh35f5184d12a3c5dp112fc8jsn0d41cd98cdc1',
      'X-RapidAPI-Host': 'kanjialive-api.p.rapidapi.com'
    }
  }
  useEffect(() => {

  fetch('https://kanjialive-api.p.rapidapi.com/api/public/kanji/all', options)
    .then(response => response.json())
    .then(json => {
      console.log("json", json)
      setData(json)
    }).catch(err => console.error(err));

    }, [])

    data?map(item => {
      return {item}
    })
  


};

  

    //kideployolni github pagesre
    //travisnek van doksija erre
    //PAL travis configját megnézni
    //localStoragebe / Reduxba menteni lekért adatokat (?) és akkor így cacheből fogja betölteni

  function GenerateData(){
    const [items,setItems]=useState([]) 

        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '399150df6cmsh35f5184d12a3c5dp112fc8jsn0d41cd98cdc1',
            'X-RapidAPI-Host': 'kanjialive-api.p.rapidapi.com'
          }
        };
  
    const url='https://kanjialive-api.p.rapidapi.com/api/public/kanji/all';

    useEffect(() => {

      fetch(url, options)
        .then(res => res.json())
        .then(data => {
            setItems(data)
          },
        )
     }, [])
    return items; 
  }


  function MapThroughAllKanji(data){
    data?.map(item => {
          return {item}
        })
    return "no data"
  }


    return (
      <div className="App">
        <h2>welcome</h2>
        { GenerateKanjis()}
      </div>
  )
  }

 

export default App;
