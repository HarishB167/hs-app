import React, { useEffect, useState } from "react";
import {
  getMindmap,
  createBranch,
  editBranch,
} from "../services/mindmapService";

function BranchForm(props) {
  const mindmapId = props.match.params.id;

  const [data, setData] = useState({
    title: "",
    category: "",
    revisions: 0,
    branches: [],
  });

  const [branch, setBranch] = useState({
    title: "",
    mindmap: "",
    sort_number: "",
  });

  async function loadMindmap() {
    if (mindmapId) {
      const mindmap = await getMindmap(props.match.params.id);
      console.log("Edit branch", mindmap);
      const newData = { ...data };
      newData.id = mindmap.id;
      newData.title = mindmap.title;
      newData.category = mindmap.category;
      newData.branches = [...mindmap.branches];
      newData.revisions = mindmap.revisions;
      setData(newData);
    }
  }

  useEffect(() => {
    loadMindmap();
  }, []);

  const handleBranchEdit = (branch) => {
    setBranch({
      title: branch.title,
      mindmap: branch.mindmap,
      sort_number: branch.sort_number,
    });
  };

  const handleBranchSave = async (e) => {
    e.preventDefault();
    if (branch.sort_number) {
      await editBranch(mindmapId, branch);
    } else {
      branch.mindmap = mindmapId;
      branch.sort_number = data.branches.length + 1;
      await createBranch(mindmapId, branch);
    }
    loadMindmap();
    setBranch({ title: "", mindmap: "", sort_number: "" });
  };

  return (
    <div className="container container_center">
      <div className="container container_min-width_300px">
        <form className="mindmap-form">
          <h1>Branch</h1>
          <p>
            {data.title}{" "}
            <span>
              (<strong>Category: </strong> {data.category})
            </span>
          </p>
          <input
            className="form-control bem-input"
            required
            type="text"
            placeholder="Branch"
            value={branch.title}
            onChange={(e) =>
              setBranch({ ...branch, title: e.currentTarget.value })
            }
          />
          <button
            onClick={(e) => handleBranchSave(e)}
            className="btn btn-primary bem-button"
          >
            Save
          </button>
        </form>
        <ul className="list-group branch-content">
          {data.branches.map((branch) => (
            <li key={branch.sort_number} className="list-group-item d-flex">
              <span className="flex-grow-1">{branch.title}</span>
              <i
                className="fa fa-pencil m-2"
                onClick={() => handleBranchEdit(branch)}
                aria-hidden="true"
              ></i>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BranchForm;
