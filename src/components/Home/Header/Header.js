import React, { useContext } from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
import logo from "../../../images/carnival-cinemas-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../../App";

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/home">
            <img src={logo} alt="carnival-logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link href="/home">HOME</Nav.Link>
              <Nav.Link href="/movies">MOVIES</Nav.Link>
              <Nav.Link href="/theaters">THEATERS</Nav.Link>
              <Nav.Link href="/events">EVENTS</Nav.Link>
              <Nav.Link href="/orders">ORDERS</Nav.Link>
            </Nav>
            <Nav>
              {loggedInUser.user ? (
                <Nav.Link href="/Profile">
                  <img
                    style={{ width: "35px", borderRadius: "50%" }}
                    src={loggedInUser.user.img}
                    alt=""
                  />
                  <span style={{ fontSize: "small" }}>
                    {" "}
                    {loggedInUser.user.name}{" "}
                  </span>
                </Nav.Link>
              ) : (
                <Nav.Link href="/login">
                  <FontAwesomeIcon className="mr-1" icon={faUserAlt} />
                  <span style={{ fontSize: "small" }}>Log In/Sign Up</span>
                </Nav.Link>
              )}

              <Nav.Link
                style={{
                  borderLeft: "1px solid rgb(242, 255, 204,0.2)",
                  borderRight: "1px solid rgb(242, 255, 204,0.2)",
                }}
                href="/offers"
              >
                OFFERS
              </Nav.Link>
              <Nav.Link href="/mobile_app">
                <FontAwesomeIcon className="mr-1" icon={faMobileAlt} />
                <span style={{ fontSize: "small" }}>APP</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
