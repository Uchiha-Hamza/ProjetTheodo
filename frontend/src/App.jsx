import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import MovieList from './components/MovieList/Movielist';
import Movie from './pages/MovieDetails/MovieDetails';
import About from './pages/About/About';
import Users from './pages/Users/Users';
import SearchResults from './components/SearchResults/SearchResults';
import GenreList from './pages/Genre/Genre';
import Recommended from './pages/Recommended/Recommended';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/about" element={<About />} />
        <Route path="/movies/recommended" element={<Recommended />} />
        <Route path="/genre/:GenreId" element={<GenreList />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/movies/:type" element={<MovieList />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/*" element={<h1>Error Page</h1>} />
      </Routes>
    </div>
  );
}

export default App;