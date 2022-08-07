import React from "react";

const AddButton = ({ onClick }) => {
  return (
    <div className="form-group">
      <button className="btn btn-outline-secondary" onClick={onClick}>
        <i className="fa fa-plus" aria-hidden="true"></i>
      </button>
    </div>
  );
};

export default AddButton;
