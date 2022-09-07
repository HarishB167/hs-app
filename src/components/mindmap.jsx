import React, { Component } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import $ from "jquery/dist/jquery";
import mindmapService from "../services/mindmapService";
import MindmapTable from "./mindmapTable";
import Modal from "./common/modal";
import SpinnerWhileLoading from "./common/spinnerWhileLoading";

class Mindmap extends Component {
  state = {
    sortColumn: { path: "title", order: "asc" },
    mindmapToDelete: {},
    showSpinner: true,
  };

  async loadMindmaps() {
    const mindmaps = await mindmapService.getMindmaps();
    this.props.setState("mindmaps", mindmaps);
  }

  async componentDidMount() {
    const { appState } = this.props;
    if (appState.mindmaps && appState.mindmaps.length !== 0) {
      this.loadMindmaps();
    } else {
      await this.loadMindmaps();
    }
    this.setState({ showSpinner: false });
  }

  selectMindmapToDelete = async (mindmap) => {
    this.setState({ mindmapToDelete: mindmap });
    $("#modalPopup").modal("toggle");
  };

  handleDeleteMindmap = async () => {
    const originalMindmaps = this.props.appState.mindmaps;
    const mindmapToDelete = this.state.mindmapToDelete;
    const mindmaps = originalMindmaps.filter(
      (m) => m.id !== mindmapToDelete.id
    );
    this.props.setState("mindmaps", mindmaps);
    try {
      await mindmapService.deleteMindmap(mindmapToDelete.id);
      this.loadMindmaps();
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        toast.error("This mindmap has already been deleted.");
      this.props.setState("mindmaps", originalMindmaps);
    }
  };

  render() {
    return (
      <div className="container">
        <SpinnerWhileLoading
          className="container container_center"
          showSpinnerWhen={this.state.showSpinner}
        >
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
              mindmaps={this.props.appState.mindmaps}
              className={"mindmap-table"}
              sortColumn={this.state.sortColumn}
              onSort={() => console.log("onSort clicked")}
              onDelete={this.selectMindmapToDelete}
            />
          </div>
        </SpinnerWhileLoading>
      </div>
    );
  }
}

export default Mindmap;
