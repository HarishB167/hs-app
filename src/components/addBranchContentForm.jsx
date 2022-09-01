import React from "react";

function AddBranchContentForm(props) {
  return (
    <div className="container container_center">
      <div className="container container_min-width_300px container_padding_0">
        <h1>Add Branch Content</h1>
        <p className="subtitle">
          Mindmap Title <span>(Category Name)</span>
        </p>
        <div className="pad">
          <span className="pad__select">Branch 1</span>
          <span className="pad__select pad__select_selected">Branch 2</span>
          <span className="pad__select">Branch 3</span>
        </div>
        <form>
          <textarea
            className="form-control bem-input"
            placeholder="Branch content line"
            rows="3"
          ></textarea>
          <button className="btn btn-primary bem-button">Save</button>
        </form>
        <ul className="list-group branch-content">
          <li className="list-group-item">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            illum?
          </li>
          <li className="list-group-item">Lorem ipsum dolor sit amet.</li>
          <li className="list-group-item">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </li>
          <li className="list-group-item">Lorem ipsum dolor sit amet.</li>
          <li className="list-group-item">
            Lorem ipsum dolor sit amet consectetur.
          </li>
          <li className="list-group-item">Lorem, ipsum.</li>
          <li className="list-group-item">Lorem.</li>
          <li className="list-group-item">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, ex
            eveniet. Incidunt sequi perferendis voluptatum quibusdam! Eligendi,
            ea? Maiores, ratione.
          </li>
          <li className="list-group-item">Lorem, ipsum.</li>
          <li className="list-group-item">Lorem.</li>
          <li className="list-group-item">
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
