import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "399150df6cmsh35f5184d12a3c5dp112fc8jsn0d41cd98cdc1",
    "X-RapidAPI-Host": "kanjialive-api.p.rapidapi.com",
  },
};

const restEndpoint =
  "https://kanjialive-api.p.rapidapi.com/api/public/kanji/all";

const callRestApi = async () => {
  const response = await fetch(restEndpoint, options);
  const jsonResponse = await response.json();
  console.log(jsonResponse);
  return JSON.stringify(jsonResponse);
};



function RenderResult() {
  const [apiResponse, setApiResponse] = useState("* now loading *");

  useEffect(() => {
    callRestApi().then((response) => setApiResponse(response));
  }, []);

  if (!apiResponse || apiResponse.length === 0) {
    return <div>Loading...</div>;
  }

  const kanjiresult = apiResponse.kanji[0];

  if (!kanjiresult) {
    console.log('Data is null or undefined')
    return <div>No kanji found.</div>;
  }

  return (
    <div>
      <h1>Kanji information</h1>
      <p>{kanjiresult.kanji.meaning.english}</p>
    </div>
  );
}

//ReactDOM.render(<RenderResult />, document.querySelector("#root"));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RenderResult />
  </React.StrictMode>
);


