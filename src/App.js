import { useEffect, useState } from 'react';
import './App.css';

function App() {

  var a = [];


  function GenerateKanjis(){

  const [data, setData] = useState([]);
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'dd58bb6da4msh51d1d4848d5ab66p140190jsnbd0fcf951588',
      'X-RapidAPI-Host': 'kanjialive-api.p.rapidapi.com'
    }
  }
  useEffect(() => {

  //fetch('https://kanjialive-api.p.rapidapi.com/api/public/kanji/all', options)
  fetch("https://kanjiapi.dev/v1/kanji/蛍")
    .then(response => response.json())
    .then(json => {
      a.push(json);
      console.log("json", json)
      setData(json)
    }).catch(err => console.error(err))
    .then(response => response?.forEach(b => console.log(b.kanji)))

    }, [])

    
  


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
            'X-RapidAPI-Key': 'api-key',
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
        {a.map ( d => <div>{d}</div>)}
        { GenerateKanjis()}
      </div>
  )
  }

 

export default App;
