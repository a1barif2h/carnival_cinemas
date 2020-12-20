import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
const FooterBottom = () => {
  return (
    <div
      style={{
        backgroundColor: "#2F2F34",
        paddingTop: "30px",
        paddingBottom: "30px",
        textAlign: "center",
        color: "gray",
        borderTop: "0.5px solid rgba(128, 128, 128, 0.801)",
      }}
    >
      <FontAwesomeIcon
        style={{ cursor: "pointer", fontSize: "35px" }}
        className="mr-2"
        icon={faFacebook}
      />
      <FontAwesomeIcon
        style={{ cursor: "pointer", fontSize: "35px" }}
        className="ml-2"
        icon={faTwitterSquare}
      />
      <p className="pt-3">
        <small>
          Copyright &copy; {new Date().getFullYear()} Arif Hossain. All rights
          reserved. Terms of Use Privacy Policy
        </small>
      </p>
    </div>
  );
};

export default FooterBottom;
