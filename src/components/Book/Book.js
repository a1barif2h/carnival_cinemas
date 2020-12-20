import React from "react";
import { Col, Row } from "react-bootstrap";
import Header from "../Home/Header/Header";
import Cart from "./Cart/Cart";
import Seats from "./Seats/Seats";

const Book = () => {
  return (
    <div>
      <Header />
      <Row>
        <Col md={9}>
          <div>
            <Seats />
          </div>
        </Col>
        <Col md={3}>
          <div>
            <Cart />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Book;
