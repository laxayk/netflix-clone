import React from 'react';
import './App.css';
import Row from './Row';
import Banner from './Banner';
import Navbar from './Navbar';
import requests from './request';

function App() {
  return (
    <div className="App">

      <Navbar/>
      <Banner/>

      
      <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} isLargeRow />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romantic Movies" fetchUrl={requests.fetchRomanticMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />

    </div>
  );
}

export default App;
