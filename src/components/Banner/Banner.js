import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

export default function Banner() {
  return (
    <Link to="/about">
    <div className="banner-section">
      <h1 className="banner-about">About</h1>
    </div>
    </Link>
  );
}
