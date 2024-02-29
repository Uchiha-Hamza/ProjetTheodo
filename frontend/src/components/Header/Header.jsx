import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isGenreOpen, setGenreOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/search?q=${searchValue}`);
  };

  const handleGenreClick = () => {
    setGenreOpen(!isGenreOpen);
  };

  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/">
          <img className="header__icon" src="../csshows.png" alt="Logo" />
        </Link>
        <Link to="/movies/popular" style={{ textDecoration: 'none' }}>
          <span>Popular</span>
        </Link>
        <Link to="/movies/top_rated" style={{ textDecoration: 'none' }}>
          <span>Top Rated</span>
        </Link>
        <Link to="/movies/upcoming" style={{ textDecoration: 'none' }}>
          <span>Upcoming</span>
        </Link>
        <div className="dropdown">
          <span className={`dropdown__trigger ${isGenreOpen ? 'active' : ''}`} onClick={handleGenreClick}>
            Genre {isGenreOpen && <i className="fas fa-chevron-down"></i>}
          </span>
          {isGenreOpen && (
            <div className="dropdown__content">
              <Link to="/genre/28" style={{ textDecoration: 'none' }}>
                <span>Action</span>
              </Link>
              <Link to="/genre/12" style={{ textDecoration: 'none' }}>
                <span>Adventure</span>
              </Link>
              <Link to="/genre/16" style={{ textDecoration: 'none' }}>
                <span>Animation</span>
              </Link>
              <Link to="/genre/35" style={{ textDecoration: 'none' }}>
                <span>Comedy</span>
              </Link>
              <Link to="/genre/80" style={{ textDecoration: 'none' }}>
                <span>Crime</span>
              </Link>
              <Link to="/genre/99" style={{ textDecoration: 'none' }}>
                <span>Documentary</span>
              </Link>
              <Link to="/genre/18" style={{ textDecoration: 'none' }}>
                <span>Drama</span>
              </Link>
              <Link to="/genre/10751" style={{ textDecoration: 'none' }}>
                <span>Family</span>
              </Link>
              <Link to="/genre/14" style={{ textDecoration: 'none' }}>
                <span>Fantasy</span>
              </Link>
              <Link to="/genre/36" style={{ textDecoration: 'none' }}>
                <span>History</span>
              </Link>
              <Link to="/genre/27" style={{ textDecoration: 'none' }}>
                <span>Horror</span>
              </Link>
              <Link to="/genre/10402" style={{ textDecoration: 'none' }}>
                <span>Music</span>
              </Link>
              <Link to="/genre/9648" style={{ textDecoration: 'none' }}>
                <span>Mystery</span>
              </Link>
              <Link to="/genre/10749" style={{ textDecoration: 'none' }}>
                <span>Romance</span>
              </Link>
              <Link to="/genre/878" style={{ textDecoration: 'none' }}>
                <span>Science Fiction</span>
              </Link>
              <Link to="/genre/10770" style={{ textDecoration: 'none' }}>
                <span>TV Movie</span>
              </Link>
              <Link to="/genre/53" style={{ textDecoration: 'none' }}>
                <span>Thriller</span>
              </Link>
              <Link to="/genre/10752" style={{ textDecoration: 'none' }}>
                <span>War</span>
              </Link>
              <Link to="/genre/37" style={{ textDecoration: 'none' }}>
                <span>Western</span>
              </Link>
            </div>
          )}
        </div>
        <Link to="/movies/recommended" style={{ textDecoration: 'none' }}>
          <span>Recommended</span>
        </Link>
        <Link to="/users" style={{ textDecoration: 'none' }}>
          <span>Sign in</span>
        </Link>
        <Link to="/about" style={{ textDecoration: 'none' }}>
          <span>About</span>
        </Link>
      </div>
      <div className="headerRight">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search movies..."
            value={searchValue}
            onChange={handleSearchChange}
          />
        </form>
      </div>
    </div>
  );
};

export default Header;