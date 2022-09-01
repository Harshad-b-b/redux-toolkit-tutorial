import React from "react";
import { useSelector } from "react-redux";
import Card from "../../components/card/Card";
import { useDispatch } from "react-redux";
import Navigation from "../../components/nvaigation/Navigation";

export default function FavBlog() {
  return (
    <div className="container">
      <Navigation />
      <h1>Favourite Blogs</h1>
    </div>
  );
}
