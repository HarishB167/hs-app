import React, { Component } from "react";
import { Link } from "react-router-dom";

class MindmapForm extends Component {
  state = {
    pageType: "",
    mindmap: { title: "", category: "", branches: [] },
  };

  componentDidMount() {
    let pageType = "";
    if (this.props.location.pathname === "/mindmaps/create")
      pageType = "Create";
    else pageType = "Edit";
    this.setState({ pageType });
  }
  render() {
    return (
      <div style={{ margin: "50px" }}>
        <h1>{this.state.pageType} page</h1>
        <Link
          to="/mindmaps"
          type="button"
          className="btn btn-outline-secondary"
        >
          <i className="fa fa-floppy-o fa-2x" aria-hidden="true"></i>
        </Link>
        <hr />
        <form>
          <div className="form-group">
            <label for="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              aria-describedby="titleHelp"
              placeholder="Enter title"
            />
            <small id="titleHelp" className="form-text text-muted">
              Title for mindmap
            </small>
          </div>
          <div className="form-group">
            <label for="category">Category</label>
            <input
              type="text"
              className="form-control"
              id="category"
              placeholder="Category"
            />
          </div>
          <div className="form-group">
            <button className="btn btn-outline-secondary">
              <i class="fa fa-plus" aria-hidden="true"></i>
            </button>
          </div>

          <Link
            to="/mindmaps"
            type="button"
            className="btn btn-outline-secondary"
          >
            <i className="fa fa-floppy-o fa-2x" aria-hidden="true"></i>
          </Link>
        </form>
      </div>
    );
  }
}

export default MindmapForm;
