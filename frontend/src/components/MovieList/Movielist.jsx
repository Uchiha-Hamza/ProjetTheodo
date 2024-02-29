import React, { useEffect, useState } from "react"
import "./MovieList.css"
import { useParams } from "react-router-dom"
import Cards from "../Card/Card"

const MovieList = () => {

  const [movieList, setMovieList] = useState([])
  const { type } = useParams()
  const i = 1
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYjNlNzg0ODkzMDUxMjRjYmQ3YjNiMmViZjMyZjNjNCIsInN1YiI6IjY0NzBhYjRhNzcwNzAwMDExOTI0OGZlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-XX-u9jsBzlN_VSkOYDNyk11_AGkIqX1b3H1XK0_1YE',
    },
  };

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    getData()
  }, [type])

  const getData = () => {
    const fetchedMovieList = [];
    for (let i = 1; i <= 5; i++) {
      fetch(
        `https://api.themoviedb.org/3/movie/${type ? type : "popular"
        }?language=en-US&page=${i}`,
        options
      )
        .then((response) => response.json())
        .then((response) => {
          fetchedMovieList.push(...response.results);
          if (i === 5) {
            setMovieList(fetchedMovieList);
          }
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <div className="movie__list">
      <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
      <div className="list__cards">
        {
          movieList.map(movie => (
            <Cards movie={movie} />
          ))
        }
      </div>
    </div>
  )
}

export default MovieList
