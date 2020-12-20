import React from "react";
import FooterBottom from "./FooterBottom/FooterBottom";
import FooterMain from "./FooterMain/FooterMain";
import FooterTop from "./FooterTop/FooterTop";

const Footer = () => {
  return (
    <div className="pt-5">
      <FooterTop />
      <FooterMain />
      <FooterBottom />
    </div>
  );
};

export default Footer;
