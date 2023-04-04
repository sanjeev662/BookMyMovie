import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Col, Row, Container, Button } from "react-bootstrap";

function MovieDeatails() {
  const { state } = useLocation();
  console.log("Movie data fom useLocation", state);
  const { movie } = state;

  const navigate = useNavigate();

  function handleClick() {
    let movieId = movie.show.id;
    let name = movie.show.name;
    navigate(`/bookmymovie/${movieId}`, { state: { name } });
  }

  return (
    <div
      style={{ minHeight: "80vh", paddingTop: "2rem", paddingBottom: "1rem" }}
    >
      <Container>
        <Row>
          <Col style={{ textAlign: "right", paddingRight: "2rem" }}>
            <img alt="movie" width={"40%"} src={!movie.show.image ? "https://static.tvmaze.com/uploads/images/medium_portrait/425/1064746.jpg" : movie.show.image.medium} />
          </Col>
          <Col style={{ textAlign: "left", paddingLeft: "2rem" }}>
            <h3>{movie.show.name}</h3>
            <ul>
              <li>language : {movie.show.language}</li>
            </ul>
            <ul>
              <li>Genres : {movie.show.genres[0]}</li>
            </ul>
            <ul>
              <li>Status : {movie.show.status}</li>
            </ul>
            <div
              dangerouslySetInnerHTML={{ __html: movie.show.summary }}
              className="mt-4"
            ></div>
            <Button variant="primary" onClick={handleClick}>
              BookMyMovie
            </Button>

            <Button
              style={{ marginLeft: "1rem" }}
              variant="primary"
              onClick={() => navigate(-1)}
            >
              Back
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MovieDeatails;
