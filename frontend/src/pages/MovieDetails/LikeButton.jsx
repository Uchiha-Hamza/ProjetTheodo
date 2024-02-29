// LikeButton.jsx
import React, { useState, useEffect } from "react";
import "./LikeButton.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import axios from 'axios';

const LikeButton = ({ movieId }) => {
  const [liked, setLiked] = useState(false);
  const [pulsing, setPulsing] = useState(false);

  useEffect(() => {
    // Vérifier si le film est déjà liké en consultant le stockage local
    const isMovieLiked = localStorage.getItem(`liked_${movieId}`);
    if (isMovieLiked === "true") {
      setLiked(true);
    }
  }, []);

  const handleLike = () => {
    setLiked(!liked);
    saveLikeToDatabase(movieId); // Appeler la fonction pour enregistrer le like dans la base de données
    // Ajouter la classe 'pulse' temporairement pour l'effet de pulsation
    setPulsing(true);
    setTimeout(() => {
      setPulsing(false);
    }, 500); // Durée de la pulsation en millisecondes (ici, 500ms)

    // Mettre à jour le stockage local avec l'état du like
    localStorage.setItem(`liked_${movieId}`, !liked);
  };

  const saveLikeToDatabase = (movieId) => {
    if (liked === false) {
      axios.post(`http://localhost:8000/movies/liked/${movieId}`)
        .then(response => {
          console.log('Like saved to database');
        })
        .catch(error => {
          console.error('Error saving like to database:', error);
        });
    }
    else {
      axios.post(`http://localhost:8000/movies/unliked/${movieId}`)
        .then(response => {
          console.log('Like saved to database');
        })
        .catch(error => {
          console.error('Error saving like to database:', error);
        });
    }

  };

  return (
    <span className={`like-button ${liked ? "liked" : ""} ${pulsing ? "pulse" : ""}`} onClick={handleLike}>
      <i className="fas fa-heart" />
    </span>
  );
};

export default LikeButton;