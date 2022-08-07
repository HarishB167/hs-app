import { getColor } from "../../services/colors";
import React from "react";

const Card = ({ title, itemList, id, onClick }) => {
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
              <li key={item}>{item}</li>
            ))}
          </ul>
          {onClick && (
            <button
              className="btn btn-outline-secondary"
              onClick={(e) => {
                e.preventDefault();
                onClick(id);
              }}
            >
              <i className="fa fa-pencil" aria-hidden="true"></i>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
