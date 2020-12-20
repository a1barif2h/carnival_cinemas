import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeadset,
  faQuestion,
  faInfoCircle,
  faCommentDots,
  faTv,
} from "@fortawesome/free-solid-svg-icons";
import "./FooterTop.css";

const FooterTop = () => {
  return (
    <div
      style={{
        backgroundColor: "#39393F",
        padding: "50px",
        textAlign: "center",
        color: "gray",
      }}
    >
      <Container>
        <Row>
          <Col md={1}></Col>
          <Col className="hover_style" sm={6} md={2}>
            <div
              style={{
                width: "130px",
                height: "130px",
                cursor: "pointer",
                border: "3px solid gray",
                borderRadius: "50%",
              }}
            >
              <FontAwesomeIcon className="display-3 pt-3" icon={faHeadset} />
              <p style={{ fontSize: "14px" }}>CUSTOMER CARE</p>
            </div>
          </Col>
          <Col className="hover_style" sm={6} md={2}>
            <div
              style={{
                width: "130px",
                height: "130px",
                cursor: "pointer",
                border: "3px solid gray",
                borderRadius: "50%",
              }}
            >
              <FontAwesomeIcon className="display-3 pt-3" icon={faQuestion} />
              <p style={{ fontSize: "14px" }}>FAQ </p>
            </div>
          </Col>
          <Col className="hover_style" sm={6} md={2}>
            <div
              style={{
                width: "130px",
                height: "130px",
                cursor: "pointer",
                border: "3px solid gray",
                borderRadius: "50%",
              }}
            >
              <FontAwesomeIcon className="display-3 pt-3" icon={faInfoCircle} />
              <p style={{ fontSize: "14px" }}>ABOUT US</p>
            </div>
          </Col>
          <Col className="hover_style" sm={6} md={2}>
            <div
              style={{
                width: "130px",
                height: "130px",
                cursor: "pointer",
                border: "3px solid gray",
                borderRadius: "50%",
              }}
            >
              <FontAwesomeIcon
                className="display-3 pt-3"
                icon={faCommentDots}
              />
              <p style={{ fontSize: "14px" }}>FEEDBACK</p>
            </div>
          </Col>
          <Col className="hover_style" sm={6} md={2}>
            <div
              style={{
                width: "130px",
                height: "130px",
                cursor: "pointer",
                border: "3px solid gray",
                borderRadius: "50%",
              }}
            >
              <FontAwesomeIcon className="display-3 pt-3" icon={faTv} />
              <p style={{ fontSize: "14px" }}>BOXOFFICE</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterTop;
