import React from "react";

const Badge = ({ label, value, onClick }) => {
  return (
    <button onClick={onClick} type="button" className="btn btn-info">
      {label} <span className="badge badge-light">{value}</span>
    </button>
  );
};

export default Badge;
