import React, {useState, useEffect} from 'react';
import axios from './axios';
import requests from './request';
import "./Banner.css";

const baseUrlImg = "https://image.tmdb.org/t/p/original/"


function Banner() {

    const [movie, SetMovie] = useState([]);
    useEffect(()=> {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            SetMovie(request.data.results[Math.floor(Math.random()* request.data.results.length-1)]);
            return request;
        }
        fetchData();
    }, []);
    console.log(movie);

    function truncate(str,n) {
        return str?.length > n ? str.substr(0,n-1) + "..." : str;
    }

    return (
        <header className="banner"
            style = {{
                backgroundSize: "cover",
                backgroundImage: `url(${baseUrlImg}${movie.backdrop_path})`,
                backgroundPosition: "center center",
            }}
        >
        <div className="banner_contents">
            <h1 className="banner_title"> {movie.title || movie.name || movie.original_name} </h1>
            <div className="banner_buttons">
            <button className="banner_button">Play</button>
            <button className="banner_button">Add To My List</button>
            </div>
            <h2 className="banner_overview">{truncate(movie.overview, 150)} </h2>
        </div>
        <div className="banner--fadebottom"/>
        </header>
    )
}

export default Banner
