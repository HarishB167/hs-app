import React, { Component } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteMindmap, getMindmaps } from "../services/fakeMindmapService";
import mindmapService from "../services/mindmapService";
import MindmapTable from "./mindmapTable";

class Mindmap extends Component {
  state = {
    mindmaps: [],
    sortColumn: { path: "title", order: "asc" },
  };

  async componentDidMount() {
    const mindmaps = await mindmapService.getMindmaps();
    console.log(mindmaps);
    this.setState({ mindmaps });
  }

  handleDeleteMindmap = async (mindmap) => {
    const originalMindmaps = this.state.mindmaps;
    const mindmaps = originalMindmaps.filter((m) => m.id !== mindmap.id);
    this.setState({ mindmaps });
    try {
      await mindmapService.deleteMindmap(mindmap.id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        toast.error("This mindmap has already been deleted.");
      this.setState({ mindmaps: originalMindmaps });
    }
  };

  render() {
    return (
      <div className="container">
        <div>
          <Link to="/mindmaps/create" className="btn btn-primary">
            Create
          </Link>
        </div>
        <div className="container container_center container_overflow_scroll">
          <MindmapTable
            mindmaps={this.state.mindmaps}
            className={"mindmap-table"}
            sortColumn={this.state.sortColumn}
            onSort={() => console.log("onSort clicked")}
            onDelete={this.handleDeleteMindmap}
          />
        </div>
      </div>
    );
  }
}

export default Mindmap;
