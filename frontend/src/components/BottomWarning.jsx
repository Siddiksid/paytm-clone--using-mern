import React from "react";
import { Link } from "react-router-dom";

const BottomWarning = ({ text, label, to }) => {
  return (
    <div className="text-center text-sm font-semibold flex justify-center">
      <div>{text}</div>
      <Link className="pointer cursor-pointer underline px-2" to={to}>
        {label}
      </Link>
    </div>
  );
};

export default BottomWarning;
