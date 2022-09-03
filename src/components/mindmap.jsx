import React, { Component } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import $ from "jquery/dist/jquery";
import mindmapService from "../services/mindmapService";
import MindmapTable from "./mindmapTable";
import Modal from "./common/modal";

class Mindmap extends Component {
  state = {
    mindmaps: [],
    sortColumn: { path: "title", order: "asc" },
    mindmapToDelete: {},
  };

  async componentDidMount() {
    const mindmaps = await mindmapService.getMindmaps();
    console.log(mindmaps);
    this.setState({ mindmaps });
  }

  selectMindmapToDelete = async (mindmap) => {
    this.setState({ mindmapToDelete: mindmap });
    $("#modalPopup").modal("toggle");
  };

  handleDeleteMindmap = async () => {
    const originalMindmaps = this.state.mindmaps;
    const mindmapToDelete = this.state.mindmapToDelete;
    const mindmaps = originalMindmaps.filter(
      (m) => m.id !== mindmapToDelete.id
    );
    this.setState({ mindmaps });
    try {
      await mindmapService.deleteMindmap(mindmapToDelete.id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        toast.error("This mindmap has already been deleted.");
      this.setState({ mindmaps: originalMindmaps });
    }
  };

  render() {
    return (
      <div className="container">
        <Modal
          id="modalPopup"
          title="Delete"
          body="Are you sure you want to delete this item?"
          action={this.handleDeleteMindmap}
          actionMessage="Delete"
        />
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
            onDelete={this.selectMindmapToDelete}
          />
        </div>
      </div>
    );
  }
}

export default Mindmap;
