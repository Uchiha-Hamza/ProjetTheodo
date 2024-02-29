import React, { useEffect, useState } from "react"
import "./Genre.css"
import { useParams } from "react-router-dom"
import Cards from "../../components/Card/Card"

function GenreList() {
    const [Genre, setGenre] = useState([])
    const [movieGenre, setMovieGenre] = useState([])
    const { GenreId } = useParams()
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYjNlNzg0ODkzMDUxMjRjYmQ3YjNiMmViZjMyZjNjNCIsInN1YiI6IjY0NzBhYjRhNzcwNzAwMDExOTI0OGZlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-XX-u9jsBzlN_VSkOYDNyk11_AGkIqX1b3H1XK0_1YE',
        },
    };

    useEffect(() => {
        getGenre()
        getData()
    }, [])

    useEffect(() => {
        getGenre()
        getData()
    }, [GenreId])

    const getGenre = () => {
        fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
            .then(response => response.json())
            .then(response => setGenre(response.results))
            .catch((err) => console.error(err));
    }

    const getData = () => {
        const fetchedGenreList = [];
        for (let i = 1; i <= 5; i++) {
            fetch(
                `https://api.themoviedb.org/3/discover/movie?language=en-US&page=${i}&with_genres=${GenreId}&without_genres=0'`,
                options
            )
                .then((response) => response.json())
                .then((response) => {
                    fetchedGenreList.push(...response.results);
                    if (i === 5) {
                        setMovieGenre(fetchedGenreList);
                    }
                })
                .catch((err) => console.error(err));
        }
    };
    /*const genre = Genre.find((genre) => genre.id === parseInt(GenreId));
    const genreName = genre ? genre.name : "";*/

    return (
        <div className="genre__list">
            <h2 className="genre__title"></h2>
            <div className="genre__cards">
                {
                    movieGenre.map(movie => (
                        <Cards movie={movie} />
                    ))
                }
            </div>
        </div>
    )
}
export default GenreList;
