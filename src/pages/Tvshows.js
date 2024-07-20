import React from 'react';
import Navbar from '../components/Navbar';
import "./Tvshows.css";
import Cards from '../components/Cards';

function Tvshows() {

  return (
    <div className='tvshows'>
      <Navbar currentPage={"tv-shows"} />
      <div className='container'>
        <Cards title="Airing Today" type="tv"  category="airing_today" />
        <Cards title="Popular" type="tv"  category="popular" />
        <Cards title="Top Rated" type="tv"  category="top_rated" />
        <Cards title="On the Air" type="tv"  category="on_the_air" />
      </div>
    </div>
  );
}

export default Tvshows;
