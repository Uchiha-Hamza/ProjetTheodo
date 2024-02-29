import { useState } from 'react';
import axios from 'axios';
import './AddMovieForm.css';

const DEFAULT_FORM_VALUES = {
  title: '',
  releasedate: '',
};

function AddMovieForm({ onSuccessfulMovieCreation }) {
  const [formValues, setFormValues] = useState(DEFAULT_FORM_VALUES);

  const [movieCreationError, setMovieCreationError] = useState(null);
  const [movieCreationSuccess, setMovieCreationSuccess] = useState(null);

  const displayCreationSuccessMessage = () => {
    setMovieCreationSuccess('New movie added successfully');
    setTimeout(() => {
      setMovieCreationSuccess(null);
    }, 3000);
  };

  const saveMovie = (event) => {
    // This avoid default page reload behavior on form submit
    event.preventDefault();

    setMovieCreationError(null);

    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/movies/new`, formValues)
      .then(() => {
        displayCreationSuccessMessage();
        setFormValues(DEFAULT_FORM_VALUES);
        onSuccessfulMovieCreation();
      })
      .catch((error) => {
        setMovieCreationError('An error occured while creating new user.');
        console.error(error);
      });
  };

  return (
    <div>
      <form className="add-user-form" onSubmit={saveMovie}>
        <input
          className="add-movie-input"
          required
          type="title"
          placeholder="Title"
          value={formValues.title}
          onChange={(event) =>
            setFormValues({ ...formValues, title: event.target.value })
          }
        />
        <input
          className="add-movie-input"
          placeholder="releasedate"
          value={formValues.releasedate}
          onChange={(event) =>
            setFormValues({ ...formValues, releasedate: event.target.value })
          }
        />
        <button className="add-user-button" type="submit">
          Add user
        </button>
      </form>
      {movieCreationSuccess !== null && (
        <div className="movie-creation-success">{movieCreationSuccess}</div>
      )}
      {movieCreationError !== null && (
        <div className="movie-creation-error">{movieCreationError}</div>
      )}
    </div>
  );
}

export default AddMovieForm;
