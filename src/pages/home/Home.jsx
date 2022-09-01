import React from "react";
import Card from "../../components/card/Card";
import Navigation from "../../components/nvaigation/Navigation";
import "./home.css";
import { useSelector, useDispatch } from "react-redux";

export default function Home() {
  return (
    <div className="container">
      <Navigation />
      <h1>All Blogs</h1>
    </div>
  );
}
