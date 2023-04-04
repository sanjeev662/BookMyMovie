import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import MovieCard from "./MovieCard";

const getMovies = async () => {
  try {
    const response = await axios.get(
      "https://api.tvmaze.com/search/shows?q=all"
    );
    return response.data;
  } catch (error) {
    console.log("error : ", error);
  }
};

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getMovies().then((data) => {
      setMovies(data);
    });
  }, []);

  return (
    <Container style={{ marginBottom: "2rem" }}>
      <Row>
        {movies.map((movie) => {
          return (
            <Col className="mt-4">
              <MovieCard key={movie.show.id} movie={movie} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default MoviesPage;
