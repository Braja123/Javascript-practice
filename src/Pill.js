import React from "react";

const Pill = ({ image, text, onClick }) => {
  return (
    <div>
      <span className="user_pill" onClick={onClick}>
        <img src={image} alt={text} />
        <span>{text} &times;</span>
      </span>
    </div>
  );
};

export default Pill;
