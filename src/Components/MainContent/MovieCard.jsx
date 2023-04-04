import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const MovieCard = (props) => {
  
  const { movie } = props;
  const navigate = useNavigate();

  function handleClick() {
    let movieId = movie.show.id;
    navigate(`/moviesummary/${movieId}`, { state: { movie } });
  }

  return (
    <>
      <Card style={{ width: "20rem" }} className="mx-auto">
      <Card.Img variant="top" src={!movie.show.image ? "https://static.tvmaze.com/uploads/images/medium_portrait/425/1064746.jpg" : movie.show.image.medium} />
        <Card.Body>
          <Card.Title>{movie.show.name}</Card.Title>
          <Card.Text>
            Language: {movie.show.language}
            <br />
            Status: {movie.show.status}
            <br />
            genres: {movie.show.genres[0]}
          </Card.Text>
          <Button variant="primary" onClick={handleClick}>
            Show More
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default MovieCard;
