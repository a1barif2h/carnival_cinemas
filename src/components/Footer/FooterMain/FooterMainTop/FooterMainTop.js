import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const FooterMainTop = () => {
  return (
    <div
      style={{
        backgroundColor: "#2F2F34",
        color: "gray",
        paddingTop: "20px",
        paddingBottom: "40px",
      }}
    >
      <Container>
        <Row>
          <Col md={3}>
            <div>
              <h6 className="text-white pb-3 pt-2">BROWSE ALL</h6>
              <ul>
                <li>
                  <a href="/">
                    <small>Blog</small>{" "}
                  </a>
                </li>
                <li>
                  <a href="/">
                    <small>Now Showing</small>{" "}
                  </a>
                </li>
                <li>
                  <a href="/">
                    <small>Coming Soon</small>{" "}
                  </a>
                </li>
                <li>
                  <a href="/">
                    <small>All Movies</small>{" "}
                  </a>
                </li>
                <li>
                  <a href="/">
                    <small>Cinemas</small>{" "}
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={3}>
            <div>
              <h6 className="text-white pb-3 pt-2">LINKS</h6>
              <ul>
                <li>
                  <a href="/">
                    <small>Register</small>{" "}
                  </a>
                </li>
                <li>
                  <a href="/">
                    <small>Login</small>{" "}
                  </a>
                </li>
                <li>
                  <a href="/">
                    <small>Order</small>{" "}
                  </a>
                </li>
                <li>
                  <a href="/">
                    <small>Help</small>{" "}
                  </a>
                </li>
                <li>
                  <a href="/">
                    <small>How to use coupons</small>{" "}
                  </a>
                </li>
                <li>
                  <a href="/">
                    <small>Boxoffice Software</small>{" "}
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={3}>
            <div>
              <h6 className="text-white pb-3 pt-2">CINEMAS</h6>
              <ul>
                <li>
                  <a href="/">
                    <small>Sri Vishnu Cinemas</small>{" "}
                  </a>
                </li>
                <li>
                  <a href="/">
                    <small>Lakshme Cinemas</small>{" "}
                  </a>
                </li>
                <li>
                  <a href="/">
                    <small>Srinivasa Theatre</small>{" "}
                  </a>
                </li>
                <li>
                  <a href="/">
                    <small>Baba Cinemas</small>{" "}
                  </a>
                </li>
                <li>
                  <a href="/">
                    <small>Grande Muthuram cinemas</small>{" "}
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={3}>
            <div>
              <h6 className="text-white pb-3 pt-2">ENQUIRIES</h6>
              <ul>
                <li>
                  <a href="/">
                    <small>Events</small>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <small>Dealers</small>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <small>Advertising</small>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <small>Theatre Owners</small>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <small>Support </small>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <small>Technical Support</small>
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterMainTop;
