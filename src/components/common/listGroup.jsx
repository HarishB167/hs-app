import React from "react";

const ListGroup = ({ items, onEdit, onDelete, onMoveUp, onMoveDown }) => {
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
              <button
                className="btn btn-sm btn-outline-secondary"
                onClick={(e) => {
                  e.preventDefault();
                  onMoveUp(index);
                }}
              >
                <i className="fa fa-angle-up" aria-hidden="true"></i>
              </button>
            )}
            {index !== items.length - 1 && (
              <button
                className="btn btn-sm btn-outline-secondary"
                onClick={(e) => {
                  e.preventDefault();
                  onMoveDown(index);
                }}
              >
                <i className="fa fa-angle-down" aria-hidden="true"></i>
              </button>
            )}
            <button
              className="btn btn-sm btn-outline-secondary"
              onClick={(e) => {
                e.preventDefault();
                onEdit(index);
              }}
            >
              <i className="fa fa-pencil" aria-hidden="true"></i>
            </button>
            <button
              className="btn btn-sm btn-outline-secondary"
              onClick={(e) => {
                e.preventDefault();
                onDelete(index);
              }}
            >
              <i className="fa fa-trash" aria-hidden="true"></i>
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
