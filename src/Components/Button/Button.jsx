import React from "react";
import "../Button/Button.css";
const Button = (props) => {
  const { outlinebtn, icon, text, ...rest } = props;

  return (
    <button {...rest} className={outlinebtn ? "outline-btn" : "primary-btn"}>
      {icon}
      {text}
    </button>
  );
};

export default Button;
