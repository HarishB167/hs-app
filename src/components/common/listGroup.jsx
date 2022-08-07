import React from "react";

const ListGroup = ({ items, onClick }) => {
  return (
    <ul className="list-group">
      {items.map((item, index) => (
        <li
          key={index}
          className="list-group-item"
          style={{ cursor: "pointer" }}
        >
          <div className="d-flex flex-wrap">
            <span className="mr-auto">{item}</span>
            {index !== 0 && (
              <button className="btn btn-sm btn-outline-secondary">
                <i className="fa fa-angle-up" aria-hidden="true"></i>
              </button>
            )}
            {index !== items.length - 1 && (
              <button className="btn btn-sm btn-outline-secondary">
                <i className="fa fa-angle-down" aria-hidden="true"></i>
              </button>
            )}
            <button
              className="btn btn-sm btn-outline-secondary"
              onClick={(e) => {
                e.preventDefault();
                onClick(index);
              }}
            >
              <i className="fa fa-pencil" aria-hidden="true"></i>
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
