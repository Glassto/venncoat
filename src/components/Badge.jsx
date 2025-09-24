import React from "react";
import starIcon from "../assets/star.svg";

const Badge = ({ content, className }) => {
  return (
    <div className={`badge ${className}`}>
      <img src={starIcon} alt="" />
      <p>{content}</p>
    </div>
  );
};

export default Badge;
