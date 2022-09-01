import React from "react";

function NewMindmapForm(props) {
  return (
    <div>
      <form>
        <div class="container">
          <h1>New Mindmap</h1>
          <input type="text" placeholder="Title" />
          <input type="text" placeholder="Category" />

          <div>
            <button>Save and Add branch</button>
            <button>Save</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default NewMindmapForm;
