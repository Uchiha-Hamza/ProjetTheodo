import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Cards from "../../components/Card/Card";

const Recommended = () => {
    const [recommendedList, setRecommendedList] = useState([]);

    useEffect(() => {
        // Fonction pour récupérer les films recommandés
        const fetchRecommendedMovies = async () => {
            axios.get(`http://localhost:8000/movies/recommended`)
                .then(response => {
                    console.log('Recommended movies imported');
                })
                .catch(error => {
                    console.error('Error getting movies from DB:', error);
                });
        };

        fetchRecommendedMovies();
    }, []);

    return (
        <div className="movie__list">
            <h2>Recommended for you</h2>
            <div className="list__cards">
                {recommendedList.map(movie => (
                    <Cards key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export default Recommended;