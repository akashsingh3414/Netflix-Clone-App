import {React, useEffect, useState} from "react";
import "./Banner.css";
import axios from "../hooks/axios"
import requests from "../hooks/requests";

export default function Banner() {

    function truncateDescription(str, n){
        return (str?.length > n ? str.substring(0, n-1) + ' . . . ' : str)
    }

    const [movie, setMovie] = useState([]);

    useEffect(()=>{
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            console.log(request);
            return request;
        }
        fetchData();
    }, [])

    return (
        <header 
            style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundColor: "black",
                backgroundSize: "cover",
                backgroundPosition: "center center",
            }}
            className="relative text-white"
        >
            <div className="banner_contents">
                <h1 className="text-white-800 text-3xl font-bold px-4">{movie?.title || movie?.name || movie?.original_name || "Movie Loading ..."}</h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">More Info</button>
                </div>
                <h1 className="banner_description pl-4">{truncateDescription(movie?.overview ? movie.overview : "Movie description loading ...", 150)}</h1>
            </div>
            <div className="banner_fadeBottom"></div>

        </header>
    );
}
