import React from "react";

const Card = props => {

    console.log(props);
  return (
    <div className="card-whole">
      <h2>Picture Title: {props.data.title}</h2>
      <p>Explanation: {props.data.explanation}</p>
      <img src={props.data.hdurl} alt="image"/>
      <p>Author: {props.data.copyright}</p>
      <p>Date: {props.data.date}</p>
    </div>
  );
};
export default Card;