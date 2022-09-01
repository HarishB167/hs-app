import React from "react";

function MindmapForm(props) {
  return (
    <div className="container container_center">
      <form className="mindmap-form">
        <h1>New Mindmap</h1>
        <input
          className="form-control bem-input"
          type="text"
          placeholder="Title"
          autoFocus
        />
        <input
          className="form-control bem-input"
          type="text"
          placeholder="Category"
        />
        <div>
          <button className="btn btn-primary bem-button">
            Save and Add branch
          </button>
          <button className="btn btn-primary bem-button">Save</button>
        </div>
      </form>
    </div>
  );
}

export default MindmapForm;
