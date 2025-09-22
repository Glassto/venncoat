import React from "react";
import starIcon from "../assets/star.svg";

const Badge = ({ content }) => {
  return (
    <div className="badge mx-auto">
      <img src={starIcon} alt="" />
      <p>{content}</p>
    </div>
  );
};

export default Badge;
