import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const FooterMainBottom = () => {
  return (
    <div
      style={{
        backgroundColor: "#2F2F34",
        color: "gray",
        paddingTop: "30px",
        borderTop: "0.5px solid rgba(128, 128, 128, 0.801)",
        paddingBottom: "30px",
      }}
    >
      <Container>
        <Row>
          <Col md={4}>
            <div>
              <h6 className="text-white pb-3 pt-2">UPCOMING MOVIES</h6>
              <Row>
                <Col md={6}>
                  <div>
                    <ul>
                      <li>
                        <a href="/">
                          <small>Master</small>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <small>Indian 2</small>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <small>Dhtuva Natchathuram</small>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <small>Fas and Furious 9</small>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <small>Thalaivi</small>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <small>Vakeel Saab</small>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <small>AnnAAtthe</small>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <small>Easwaran</small>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <small>Radhe Shyam</small>
                        </a>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col md={6}>
                  <div>
                    <ul>
                      <li>
                        <a href="/">
                          <small>KGF Chapter2</small>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <small>Avatar2</small>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <small>Black Widow</small>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <small>Vikram</small>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <small>Pushpa</small>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <small>Doctor</small>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <small>Pei Mama</small>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <small>Bell Bottom</small>
                        </a>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col md={4}>
            <div>
              <h6 className="text-white pb-3 pt-2">NOW PLAYING</h6>
              <Row>
                <Col md={6}>
                  <div>
                    <ul>
                      <li>
                        <a href="/">
                          <small>Kannum Kannum Kollaiyadithall</small>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <small>Oh My Kadavule</small>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <small>Dharala Prabhu</small>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <small>Break The Silence</small>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <small>Baahubali</small>
                        </a>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col md={6}>
                  <div>
                    <ul>
                      <li>
                        <a href="/">
                          <small>Bigil</small>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <small>Rawkto Rawhoshyo</small>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <small>Bheeshma </small>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <small>KGF</small>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <small>Satyameva Jayate</small>
                        </a>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col md={4}>
            <div>
              <h6 className="text-white pb-3 pt-2">NEXT CHANGE</h6>
              <Row>
                <Col md={6}>
                  <div>
                    <ul>
                      <li>
                        <a href="/">
                          <small>Kannirssi</small>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <small>Kotigobba 3</small>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <small>Robert</small>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <small>Babloo Bachelor</small>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <small>Cocktail</small>
                        </a>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col md={6}>
                  <div>
                    <ul>
                      <li>
                        <a href="/">
                          <small>Ombattane Dikku</small>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <small>Pallu Padama Paathuka</small>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <small>Sandeep Aur Pinky Faraar</small>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <small>Vajvuya Band Baja</small>
                        </a>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterMainBottom;
