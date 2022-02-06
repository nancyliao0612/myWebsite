import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="article-section">
      <div className="article-container-2">
        <Link to={props.link}>
          <img
            src={props.coverImg}
            alt="galata-tower"
            className="istanbul-pic"
          />
        </Link>
        <h3 className="istanbul-title">{props.title}</h3>
        <p className="istanbul-intro">{props.discription}</p>
        <Link to={props.link}>
          <img className="read-more" src="https://i.imgur.com/zRVuAej.jpg" />
        </Link>
      </div>
    </div>
  );
};

export default Card;
