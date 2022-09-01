import React from "react";

function AddBranchContentForm(props) {
  return (
    <div className="container">
      <h1>Add Branch Content</h1>
      <p className="subtitle">
        Mindmap Title <span>(Category Name)</span>
      </p>
      <div className="branch-pad">
        <span className="branch-select">Branch 1</span>
        <span className="branch-select branch-selected">Branch 2</span>
        <span className="branch-select">Branch 3</span>
      </div>
      <form>
        <textarea placeholder="Branch content line"></textarea>
        <button>Save</button>
      </form>
      <div className="branch-content">
        <ul>
          <li className="branch-content-item">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            illum?
          </li>
          <li className="branch-content-item">Lorem ipsum dolor sit amet.</li>
          <li className="branch-content-item">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </li>
          <li className="branch-content-item">Lorem ipsum dolor sit amet.</li>
          <li className="branch-content-item">
            Lorem ipsum dolor sit amet consectetur.
          </li>
          <li className="branch-content-item">Lorem, ipsum.</li>
          <li className="branch-content-item">Lorem.</li>
          <li className="branch-content-item">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, ex
            eveniet. Incidunt sequi perferendis voluptatum quibusdam! Eligendi,
            ea? Maiores, ratione.
          </li>
          <li className="branch-content-item">Lorem, ipsum.</li>
          <li className="branch-content-item">Lorem.</li>
          <li className="branch-content-item">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, ex
            eveniet. Incidunt sequi perferendis voluptatum quibusdam! Eligendi,
            ea? Maiores, ratione.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AddBranchContentForm;
