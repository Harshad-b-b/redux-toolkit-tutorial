import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";
export default function Navigation() {
  return (
    <nav className="nav">
      <div className="navigation">
        <Link to="/" className="home">
          Home
        </Link>
        <Link to="/fav-blog" className="liked-blogs">
          Favourite blogs
        </Link>
      </div>
    </nav>
  );
}
