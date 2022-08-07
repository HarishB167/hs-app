import React from "react";
import { Link } from "react-router-dom";
import Table from "./common/table";

const MindmapTable = (props) => {
  const { mindmaps, onSort, sortColumn } = props;
  const columns = [
    {
      path: "title",
      label: "Title",
      content: (mindmap) => (
        <Link to={"/mindmaps/" + mindmap._id}>{mindmap.title}</Link>
      ),
    },
    { path: "category", label: "Category" },
    {
      key: "edit",
      content: (mindmap) => (
        <Link
          to={"/mindmaps/" + mindmap._id + "/edit"}
          type="button"
          className="btn btn-sm btn-warning"
        >
          Edit
        </Link>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      data={mindmaps}
      sortColumn={sortColumn}
      onSort={onSort}
    />
  );
};

export default MindmapTable;
