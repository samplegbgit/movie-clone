import React from 'react';
import { Card } from 'react-bootstrap';

const MovieCard = ({ title, rating, thumbnail }) => (
  <Card style={{ width: '18rem', margin: '10px' }}>
    <Card.Img variant="top" src={thumbnail} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>Rating: {rating}</Card.Text>
    </Card.Body>
  </Card>
);

export default MovieCard;
