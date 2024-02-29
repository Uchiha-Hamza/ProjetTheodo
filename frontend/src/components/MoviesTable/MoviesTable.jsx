import axios from 'axios';
import './MoviesTable.css';

function moviesTable({ movies, onSuccessfulmovieDeletion }) {
  const deletemovie = (movieId) => {
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/movies/${movieId}`)
      .then(() => onSuccessfulmovieDeletion());
  };

  return (
    <div>
      <table className="movies-table">
        <thead>
          <tr>
            <th>Email</th>
            <th>First name</th>
            <th>Last name</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.email}>
              <td>{movie.email}</td>
              <td>{movie.firstname}</td>
              <td>{movie.lastname}</td>
              <td>
                <button onClick={() => deletemovie(movie.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default moviesTable;
