import React from "react";
import "./card.css";
export default function Card({ title, onPressFav, body }) {
  return (
    <div className="card">
      <h1 className="title">{title}</h1>
      <div className="blod-body">{body}</div>
      <div className="button-holder">
        <button className="heart-btn" onClick={onPressFav}>
          💝
        </button>
      </div>
    </div>
  );
}
