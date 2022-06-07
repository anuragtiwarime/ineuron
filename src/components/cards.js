import React from "react";
import Card1 from "../mainpic.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
function cards(props) {
  return (
    <div className="card mx-2">
      <img className="card-img-top" src={Card1} />
      <div className="card-body text-center">
        <h5 className="card-title ">{props.title}</h5>
        <p className="card-text">{props.desc}</p>
        <a href="/" className="btn btn-primary">
          {props.btn}
        </a>
      </div>
    </div>
  );
}

export default cards;
