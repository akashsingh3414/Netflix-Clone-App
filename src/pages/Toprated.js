import React from 'react'
import Navbar from '../components/Navbar'
import Cards from '../components/Cards'
import "./Toprated.css"

function  Toprated() {
  return (
    <div className='toprated'>
      <Navbar currentPage="top-rated"/>
      <div className='container text-white'>
        <Cards title="All" type="trending" category="all/day" />
        <Cards title="Trending Movie" type="trending" category="movie/day"/>
        <Cards title="Trending TV Shows" type="trending" category="tv/day"/>
        <Cards title="Trending Person" type="trending" category="person/day"/>
      </div>
    </div>
  )
}

export default Toprated;