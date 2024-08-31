import React from 'react';
import { useLocation } from 'react-router-dom';
import "./Searchpage.css";
import Navbar from './Navbar';
import Cards from './Cards';
import instance from '../hooks/axios';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function Searchpage() {
    const query = useQuery();
    const searchQuery = query.get("query");
    const url = `${instance.defaults.baseURL}/search/collection?query=${searchQuery}&include_adult=false&language=en-US&page=1`;

    return (
        <div className='searchpage'>
            <Navbar />
            <div className='container text-white'>
                <Cards title={`Search Results for ${searchQuery}`} searchURL={url} />
            </div>
        </div>
    );
}

export default Searchpage;
