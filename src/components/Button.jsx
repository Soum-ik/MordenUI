import React from "react";

const Button = ({ style }) => (
  <div
    className={`bg-blue-gradient cursor-pointer text-black p-3 rounded-xl font-poppins font-medium ${style}`}
  >
    Get Started
  </div>
);
export default Button;
