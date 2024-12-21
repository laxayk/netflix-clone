import React, {useEffect, useState} from 'react';
import axios from './axios';
import "./Row.css";
import "./Banner.css"
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const baseUrlImg = "https://image.tmdb.org/t/p/original/"

function Row({title, fetchUrl, isLargeRow}) {
    const [movies, SetMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    const [movieOverview, SetMovieOverview] = useState("");
    const [movieName, setMovieName] = useState("");

    useEffect(()=> {
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            SetMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    const opts = {
        height: "400",
        width: "100%",
        playerVars: {
            autoplay: 1,
        }
    };
    const handleClick = (movie) => {
        
        if(trailerUrl){
            setTrailerUrl('');
        }else{
            movieTrailer(movie?.name || movie?.title)
            .then(url => {
                const Urlparms = new URLSearchParams(new URL(url).search); 
                setTrailerUrl(Urlparms.get('v')) ;
            }).catch(error => console.log(error));
            setMovieName(movie.title || movie.name || movie.original_name);
            SetMovieOverview(movie.overview);
        }
    };
    return (
        <div className = "row">
            <h2>{title}</h2>
            <div className="row_posters">
                {movies.map(movie =>(
                    <img className={`row_poster ${isLargeRow && "row_poster_large"}`} 
                    key={movie.id}
                    src={`${baseUrlImg}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.name}
                    onClick={()=>handleClick(movie)}
                    />                    
                ))}
            </div>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
            {trailerUrl && <h1 className="banner_title"> {movieName} </h1>}
            {trailerUrl && <h2 className="banner_overview">{movieOverview}</h2>}       
        </div>
    )
}

export default Row
