import React from "react";
import Header from "../Home/Header/Header";

const NoMatch = () => {
  return (
    <div>
      <Header />
      <div>
        <h1 style={{ color: "#DC363A" }} className="text-center">
          {`404! Page Not Found :(`}
        </h1>
      </div>
    </div>
  );
};

export default NoMatch;
