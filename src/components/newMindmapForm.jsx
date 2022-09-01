import React from "react";

function MindmapForm(props) {
  return (
    <div className="container container_center">
      <form className="mindmap-form">
        <h1>New Mindmap</h1>
        <input
          class="form-control mindmap-form__input"
          type="text"
          placeholder="Title"
          autoFocus
        />
        <input
          class="form-control mindmap-form__input"
          type="text"
          placeholder="Category"
        />
        <div>
          <button class="btn btn-primary bem-button">
            Save and Add branch
          </button>
          <button class="btn btn-primary bem-button">Save</button>
        </div>
      </form>
    </div>
  );
}

export default MindmapForm;
