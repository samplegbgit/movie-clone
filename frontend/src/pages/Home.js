import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/movies')
      .then(res => setMovies(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {movies.map(movie => <MovieCard key={movie.id} {...movie} />)}
    </div>
  );
};

export default Home;
