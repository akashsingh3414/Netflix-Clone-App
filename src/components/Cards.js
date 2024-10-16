import React, { useEffect, useState } from 'react';
import instance from '../hooks/axios.js'
import "./Cards.css";

const languageMap = {
  en: "English",
  es: "Spanish",
  fr: "French",
  de: "German",
  ja: "Japanese",
  ko: "Korean",
  zh: "Chinese",
  hi: "Hindi",
  af: "Afrikaans"
};

const apiKey = process.env.REACT_APP_BEARER_API_KEY;

const Cards = ({ title, type, category, searchURL }) => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const url = searchURL ? searchURL : `${instance.defaults.baseURL}/${type}/${category}?language=en-US`;
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: apiKey
        }
      };

      fetch(url, options)
        .then(res => res.json())
        .then(json => {
          console.log(json.results);
          setShows(json.results || []);
        })
        .catch(err => console.error('error:' + err));
    };

    fetchData();
  }, [type, category, searchURL]);

  const formatRating = (rating) => {
    return rating ? rating.toFixed(1) : "N/A";
  };

  return (
    <div className='container'>
      <div className='category'>
        <h1 className='section-title'>{title}</h1>
        <div className='grid-container'>
          {
            shows.length > 0 ? (
              shows.map(show => (
                <div key={show.id} className='show-card'>
                  <img 
                    className="card-image" 
                    src={`https://image.tmdb.org/t/p/w500${show.backdrop_path || show.profile_path}`} 
                    alt={show.name || "Loading"} 
                  />
                  <div className="card-content">
                    <h2>{show?.name || show?.original_title}</h2>
                    <div className='card-info'>
                      {show.original_language && languageMap[show.original_language] && <p className={show.original_language?"":"hidden"}>{show.original_language?languageMap[show.original_language]:""}</p>}
                      {show.media_type!=="person" && <p className={show.original_language?"":"hidden"}>Rating: {formatRating(show.vote_average)}</p>}
                      {show.media_type!=="person" && <p className={show.original_language?"":"hidden"}>Votes: {show.vote_count || "N/A"}</p>}
                      {show.media_type!=="person" && <p className={show.original_language?"":"hidden"}>Year: {show.first_air_date ? show.first_air_date.substr(0, 4) : show.release_date ? show.release_date.substr(0,4) : "N/A"}</p>}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No data found</p>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Cards;
