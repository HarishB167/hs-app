import React, { Component } from "react";
import { Link } from "react-router-dom";
import { deleteMindmap, getMindmaps } from "../services/fakeMindmapService";
import MindmapTable from "./mindmapTable";

class Mindmap extends Component {
  state = {
    mindmaps: [],
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    this.setState({ mindmaps: getMindmaps() });
  }

  handleDeleteMindmap = (mindmap) => {
    deleteMindmap(mindmap.id);
    this.setState({ mindmaps: getMindmaps() });
  };

  render() {
    return (
      <div style={{ margin: "10px" }}>
        <Link to="/mindmaps/create" className="btn btn-primary">
          Create
        </Link>
        <MindmapTable
          mindmaps={this.state.mindmaps}
          sortColumn={this.state.sortColumn}
          onSort={() => console.log("onSort clicked")}
          onDelete={this.handleDeleteMindmap}
        />
      </div>
    );
  }
}

export default Mindmap;
