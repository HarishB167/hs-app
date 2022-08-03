import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getMindmaps } from "../services/fakeMindmapService";
import MindmapTable from "./mindmapTable";

class Mindmap extends Component {
  render() {
    const mindmaps = getMindmaps();
    console.log(mindmaps);
    const mindmap = mindmaps[0];

    const rows = [];
    let row = [];
    for (let i = 0; i < mindmap.branches.length; i++) {
      row.push(mindmap.branches[i]);
      if (row.length >= 4) {
        rows.push(row);
        row = [];
      }
    }
    if (row.length !== 0) rows.push(row);
    console.log("array is ", rows);
    return (
      <div style={{ margin: "10px" }}>
        <Link to={"/mindmaps/create"} type="button" className="btn btn-primary">
          Create
        </Link>
        <MindmapTable mindmaps={mindmaps} />
      </div>
    );
  }
}

export default Mindmap;
