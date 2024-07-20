import React from 'react';
import Navbar from '../components/Navbar';
import Cards from '../components/Cards';
import "./Movies.css"

function Movies() {
  return (
    <div className='movies'>
      <Navbar currentPage={"movies"} />
      <div className='container'>
        <Cards title="Now Playing" type="movie" category="now_playing" />
        <Cards title="Popular" type="movie" category="popular" />
        <Cards title="Top Rated" type="movie" category="top_rated" />
        <Cards title="Upcoming" type="movie" category="upcoming" />
      </div>
    </div>
  );
}

export default Movies;
