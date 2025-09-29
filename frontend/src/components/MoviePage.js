import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/movies`)
      .then(res => {
        const selected = res.data.find(m => m.id === parseInt(id));
        setMovie(selected);
      });
  }, [id]);

  if(!movie) return <h2>Loading...</h2>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>{movie.title}</h2>
      <p>Rating: {movie.rating}</p>
      <img src={movie.thumbnail} alt={movie.title} />
    </div>
  );
};

export default MoviePage;
