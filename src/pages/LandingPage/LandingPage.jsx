import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      LandingPage
      <Link className="text-blue-800" to={"about"}>
        home
      </Link>
    </div>
  );
};

export default LandingPage;
