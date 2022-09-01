import React from "react";

function AddBranchForm(props) {
  return (
    <div class="container container_center">
      <div className="container container_min-width_300px">
        <form className="mindmap-form">
          <h1>Add Branch</h1>
          <p>
            Mindmap Title <span>(Category Name)</span>
          </p>
          <input
            className="form-control bem-input"
            type="text"
            placeholder="Branch"
          />
          <button className="btn btn-primary bem-button">Add</button>
        </form>
        <ul className="list-group branch-content">
          <li className="list-group-item">Branch 1</li>
          <li className="list-group-item">Branch 2</li>
          <li className="list-group-item">Branch 3</li>
          <li className="list-group-item">Branch 4</li>
          <li className="list-group-item">Branch 5</li>
          <li className="list-group-item">Branch 6</li>
          <li className="list-group-item">Branch 7</li>
          <li className="list-group-item">Branch 8</li>
          <li className="list-group-item">Branch 9</li>
          <li className="list-group-item">Branch 10</li>
          <li className="list-group-item">Branch 11</li>
          <li className="list-group-item">Branch 12</li>
          <li className="list-group-item">Branch 13</li>
          <li className="list-group-item">Branch 14</li>
          <li className="list-group-item">Branch 15</li>
          <li className="list-group-item">Branch 16</li>
          <li className="list-group-item">Branch 17</li>
          <li className="list-group-item">Branch 18</li>
          <li className="list-group-item">Branch 19</li>
          <li className="list-group-item">Branch 20</li>
        </ul>
      </div>
    </div>
  );
}

export default AddBranchForm;
