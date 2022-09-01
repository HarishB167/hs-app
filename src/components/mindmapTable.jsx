import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Table from "./common/table";

function getColumns(className, onDelete) {
  return [
    {
      path: "title",
      label: "Title",
      content: (mindmap) => (
        <Link to={"/mindmaps/" + mindmap.id}>{mindmap.title}</Link>
      ),
    },
    { path: "categoryAndRevisions", label: "Category / Revisions" },
    {
      key: "edit",
      content: (mindmap) => (
        <div className={`${className}__edit-delete`}>
          <Link
            to={"/mindmaps/" + mindmap.id + "/edit"}
            type="button"
            className={`btn btn-warning btn-sm ${className}__button`}
          >
            Edit
          </Link>
          <button
            onClick={() => onDelete(mindmap)}
            type="button"
            className={`btn btn-danger btn-sm ${className}__button`}
          >
            Delete
          </button>
        </div>
      ),
    },
  ];
}

const MindmapTable = (props) => {
  const { mindmaps, className, onSort, sortColumn, onDelete } = props;

  console.log("Mindmap data :", mindmaps);

  const data = mindmaps.map((mindmap) => {
    mindmap.categoryAndRevisions = (
      <div className={`${className}__brief-info_font-size_s`}>
        <div>
          <span className={`${className}__brief-info_font-weight_b`}>
            Category :{" "}
          </span>
          <span>{mindmap.category}</span>
        </div>
        <div>
          <span className={`${className}__brief-info_font-weight_b`}>
            Revisions :{" "}
          </span>
          <span>{mindmap.revisions}</span>
        </div>
      </div>
    );
    return mindmap;
  });
  console.log("After adding custom column :", data);

  return (
    <Table
      columns={getColumns(className, onDelete)}
      className={`${className}__table`}
      data={mindmaps}
      sortColumn={sortColumn}
      onSort={onSort}
    />
  );
};

export default MindmapTable;
