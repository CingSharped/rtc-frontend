import React from "react";
import { Link, useLocation } from "react-router-dom";
import './style.css'

const NotFound = () => {
  const location = useLocation();

  return (
    <div>
      <h1>
        Page <span style={{ color: "firebrick" }}>{location.pathname}</span> not
        found
      </h1>
      <img className="technicalDifficultiesImage" src="/src/Images/Technical Difficultees.png" alt="Technical Difficulties Image"/>
      <Link to="/" style={{ color: "firebrick", fontWeight: "bold" }}>
        Home Page &rarr;
      </Link>
    </div>
  );
};

export default NotFound;
