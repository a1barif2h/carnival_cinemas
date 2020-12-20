import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./MovieList.css";

const MovieList = (props) => {
  const { id, name, img, category } = props.movie;
  return (
    <div className="pt-3">
      <Card id="card_container" style={{ width: "18rem", cursor: "pointer" }}>
        <Card.Img style={{ height: "50%" }} variant="top" src={img} />
        <Card.Body className="text-center">
          <Card.Title>
            <small>{name}</small>
          </Card.Title>
          <Card.Text>{category}</Card.Text>
        </Card.Body>

        <Link
          style={{ color: "#fff", fontWeight: "bold", width: "100%" }}
          to="/book"
        >
          <Button style={{ width: "100%" }} variant="warning">
            Book
          </Button>
        </Link>
      </Card>
    </div>
  );
};

export default MovieList;
