import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Cards from "../Card/Card"

const SearchResults = () => {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('q');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/search/movie',
      params: {
        query: searchQuery,
        include_adult: 'false',
        language: 'en-US',
        page: '1',
      },
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjlmNjAwMzY4MzMzODNkNGIwYjNhNzJiODA3MzdjNCIsInN1YiI6IjY0NzA5YmE4YzVhZGE1MDBkZWU2ZTMxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Em7Y9fSW94J91rbuKFjDWxmpWaQzTitxRKNdQ5Lh2Eo',
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setSearchResults(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [searchQuery]);

  return (
    <div className="movie__list">
        <h2>Search Results for : "{searchQuery}"</h2>
        <div className="list__cards">
            {
                searchResults.map(movie => (
                    <Cards movie={movie} />
                ))
            }
        </div>
    </div>
)
};

export default SearchResults;