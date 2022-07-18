import React from "react";

export default function Card({ img, alt, title, time }) {
  return (
    <div className="wrapper">
      <div>
        <img src={img} alt={alt} />
      </div>
      <div>
        <h2>{title}</h2>
        <span>{time} hours</span>
        <button>Read more</button>
      </div>
    </div>
  );
}
