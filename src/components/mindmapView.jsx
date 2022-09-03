import React from "react";

function MindmapView(props) {
  return (
    <div className="container container_center">
      <div className="container container_min-width_300px container_padding_0">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h5 className="text-center">Mindmap Title</h5>
            <h6 className="text-center">(Category Name)</h6>
          </div>
          <button type="button" class="btn btn-primary">
            Reviews <span class="badge badge-light">9</span>
            <span class="sr-only">mindmap review count</span>
          </button>
        </div>
        <div className="pad">
          <span className="pad__select">Branch 1</span>
          <span className="pad__select pad__select_selected">Branch 2</span>
          <span className="pad__select">Branch 3</span>
        </div>
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

export default MindmapView;
