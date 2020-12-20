import React from "react";
import { Button, Col, Row } from "react-bootstrap";

const Cart = () => {
  return (
    <div className="pt-5">
      <Row>
        <Col>
          <h6>Tenet - English</h6>
          <p>English | 2D | U/A</p>
        </Col>
      </Row>
      <Row className="pt-3 pb-2">
        <Col>
          <p>THEATRES</p>
          <h6>Carnival Cinemas</h6>
          <small>SCREEN 4</small>
        </Col>
      </Row>
      <Row className="pt-3 pb-2">
        <Col>
          <p>SHOWTIME</p>
          <small>Mon, 21 Dec 12:00 PM </small>
        </Col>
      </Row>
      <Row className="pt-3 pb-2">
        <Col>
          <small>0 Seat(s)</small>
        </Col>
        <Col>
          <small>$0.00</small>
        </Col>
      </Row>
      <Row className="pt-3 pb-2">
        <Button
          style={{ width: "100%", color: "white", fontWeight: "bold" }}
          variant="warning"
        >
          Continue
        </Button>
      </Row>
      <Row className="pt-3">
        <Button
          style={{ width: "100%", color: "white", fontWeight: "bold" }}
          variant="warning"
        >
          Cancel
        </Button>
      </Row>
    </div>
  );
};

export default Cart;
