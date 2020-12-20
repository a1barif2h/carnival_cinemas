import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import comingSoonMovies from "../../../FakeData/comingSoonMovies";
import nowWatchingMovies from "../../../FakeData/nowWatchingMovies";
import MovieList from "./MovieList/MovieList";

const Movies = () => {
  let [nowWatching, setNowWatching] = useState(true);
  let [comingSoon, setComingSoon] = useState(false);
  const buttonHandler = () => {
    if (nowWatching && !comingSoon) {
      setNowWatching(false);
      setComingSoon(true);
    } else if (comingSoon && !nowWatching) {
      setComingSoon(false);
      setNowWatching(true);
    }
  };
  return (
    <div className="mt-5">
      <h2 className="text-center display-5">MOVIES</h2>
      <hr
        style={{
          borderBottom: "3px solid orange",
          width: "120px",
          marginTop: "-10px",
        }}
      />
      <div className="text-center mt-5">
        {nowWatching && !comingSoon ? (
          <Button onClick={() => buttonHandler()} variant="secondary">
            NOW SHOWING
          </Button>
        ) : (
          <Button onClick={() => buttonHandler()} variant="outline">
            NOW SHOWING
          </Button>
        )}
        {comingSoon && !nowWatching ? (
          <Button onClick={() => buttonHandler()} variant="secondary">
            COMING SOON
          </Button>
        ) : (
          <Button onClick={() => buttonHandler()} variant="outline">
            COMING SOON
          </Button>
        )}
      </div>
      <Container className="mt-4">
        <Row>
          {nowWatching &&
            !comingSoon &&
            nowWatchingMovies.map((movie) => (
              <Col key={movie.id} md={4}>
                <MovieList movie={movie} />
              </Col>
            ))}
          {comingSoon &&
            !nowWatching &&
            comingSoonMovies.map((movie) => (
              <Col key={movie.id} md={4}>
                <MovieList movie={movie} />
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
};

export default Movies;
