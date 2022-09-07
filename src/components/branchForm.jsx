import React, { useEffect, useState } from "react";
import $ from "jquery/dist/jquery";
import { toast } from "react-toastify";
import {
  getMindmap,
  createBranch,
  editBranch,
  deleteBranch,
} from "../services/mindmapService";
import Modal from "./common/modal";
import SpinnerWhileLoading from "./common/spinnerWhileLoading";

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

  const [branchToDelete, setBranchToDelete] = useState();
  const [showSpinner, setShowSpinner] = useState(true);

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
      setShowSpinner(false);
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
      toast.success("Branch edited successfully");
    } else {
      branch.mindmap = mindmapId;
      branch.sort_number = data.branches.length + 1;
      await createBranch(mindmapId, branch);
      toast.success("Branch created successfully");
    }
    loadMindmap();
    setBranch({ title: "", mindmap: "", sort_number: "" });
  };

  const showDeleteBranchModal = (branch) => {
    $("#modalPopup").modal("toggle");
    setBranchToDelete(branch);
  };

  const handleBranchDelete = async () => {
    console.log("Deleting branch :>> ");
    await deleteBranch(mindmapId, branchToDelete);
    loadMindmap();
    setBranch({ title: "", mindmap: "", sort_number: "" });
  };

  return (
    <div className="container container_center">
      <SpinnerWhileLoading showSpinnerWhen={showSpinner}>
        <div className="container container_min-width_300px">
          <Modal
            id="modalPopup"
            title="Delete"
            body="Are you sure you want to delete this item?"
            action={handleBranchDelete}
            actionMessage="Delete"
          />
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
            <button
              onClick={() =>
                props.history.push(`/mindmaps/${mindmapId}/branch-content`)
              }
              className="btn btn-primary bem-button"
            >
              Edit branch contents
            </button>
          </form>
          <ul className="list-group branch-content">
            {data.branches.map((branch) => (
              <li key={branch.sort_number} className="list-group-item d-flex">
                <span className="flex-grow-1">{branch.title}</span>
                <i
                  className="fa fa-pencil m-2 c-pointer"
                  aria-hidden="true"
                  onClick={() => handleBranchEdit(branch)}
                ></i>
                <i
                  className="fa fa-trash-o m-2 c-pointer"
                  aria-hidden="true"
                  role="button"
                  onClick={() => showDeleteBranchModal(branch)}
                ></i>
              </li>
            ))}
          </ul>
        </div>
      </SpinnerWhileLoading>
    </div>
  );
}

export default BranchForm;
