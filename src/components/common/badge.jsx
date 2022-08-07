import React from "react";

const Badge = ({ label, value, onClick }) => {
  return (
    <button onClick={onClick} type="button" class="btn btn-info">
      {label} <span class="badge badge-light">{value}</span>
    </button>
  );
};

export default Badge;
