import React from "react";
import { Link } from "react-router-dom";

const MindmapTable = (props) => {
  const { mindmaps } = props;
  return (
    <table className="table" style={{ margin: "20px" }}>
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Category</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {mindmaps.map((mindmap) => (
          <tr key={mindmap.title}>
            <td>
              <Link to={"/mindmaps/" + mindmap._id}>{mindmap.title}</Link>
            </td>
            <td>{mindmap.category}</td>
            <td>
              <Link
                to={"/mindmaps/" + mindmap._id + "/edit"}
                type="button"
                className="btn btn-sm btn-warning"
              >
                Edit
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MindmapTable;
