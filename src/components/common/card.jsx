import { getColor } from "../../services/colors";
import React from "react";

const Card = ({ title, itemList, id, onEdit, onDelete }) => {
  return (
    <div style={{ margin: "5px" }}>
      <div
        className="card"
        style={{ width: "15em", background: getColor(title) }}
      >
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <ul className="card-text" style={{ fontSize: "12px" }}>
            {itemList.map((item) => (
              <li key={item.id}>{item.content}</li>
            ))}
          </ul>
          {onEdit && (
            <button
              className="btn btn-outline-secondary"
              onClick={(e) => {
                e.preventDefault();
                onEdit(id);
              }}
            >
              <i className="fa fa-pencil" aria-hidden="true"></i>
            </button>
          )}
          {onDelete && (
            <button
              className="btn btn-outline-secondary"
              onClick={(e) => {
                e.preventDefault();
                onDelete(id);
              }}
            >
              <i className="fa fa-trash" aria-hidden="true"></i>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
