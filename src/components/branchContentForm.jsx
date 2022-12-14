import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import $ from "jquery/dist/jquery";
import {
  getMindmap,
  createBranchContent,
  editBranchContent,
  deleteBranchContent,
} from "../services/mindmapService";
import Modal from "./common/modal";
import SpinnerWhileLoading from "./common/spinnerWhileLoading";

function BranchContentForm(props) {
  const mindmapId = props.match.params.id;

  const padSelectedRef = useRef(null);

  const [data, setData] = useState({
    title: "",
    category: "",
    revisions: 0,
    branches: [],
    selected: 1,
  });

  const [selectedBranch, setSelectedBranch] = useState({
    title: "",
    mindmap: "",
    sort_number: "",
    content: [],
  });

  const [content, setContent] = useState({
    content: "",
    branch: "",
    sort_number: "",
  });

  const [contentLineToDelete, setContentLineToDelete] = useState();
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

  useEffect(() => {
    const branch = data.branches.find(
      (branch) => branch.sort_number == data.selected
    );
    if (branch) setSelectedBranch(branch);
    if (padSelectedRef.current)
      padSelectedRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
  }, [data]);

  const clearTextAreaContent = () => {
    setContent({ content: "", branch: "", sort_number: "" });
  };

  const handleBranchContentEdit = (contentLine) => {
    setContent({
      content: contentLine.content,
      branch: contentLine.branch,
      sort_number: contentLine.sort_number,
    });
  };

  const handleContentSave = async (e) => {
    e.preventDefault();
    console.log("Saving content line");
    if (content.sort_number) {
      await editBranchContent(mindmapId, selectedBranch.sort_number, content);
      toast.success("Branch content line edited successfully.");
    } else {
      content.branch = selectedBranch.id;
      content.sort_number = selectedBranch.content.length + 1;
      await createBranchContent(mindmapId, selectedBranch.sort_number, content);
      toast.success("Branch content line created successfully.");
    }
    loadMindmap();
    clearTextAreaContent();
  };

  const showDeleteLineModal = (line) => {
    $("#modalPopup").modal("toggle");
    setContentLineToDelete(line);
  };

  const handleContentLineDelete = async () => {
    console.log("Deleting model - line :>> ");
    await deleteBranchContent(
      mindmapId,
      selectedBranch.sort_number,
      contentLineToDelete
    );
    loadMindmap();
    clearTextAreaContent();
  };

  console.log("data.branches :>> ", data.branches);
  console.log("selectedBranch :>> ", selectedBranch);

  return (
    <div className="container container_center">
      <SpinnerWhileLoading showSpinnerWhen={showSpinner}>
        <div className="container container_min-width_300px container_padding_0">
          <Modal
            id="modalPopup"
            title="Delete"
            body="Are you sure you want to delete this item?"
            action={handleContentLineDelete}
            actionMessage="Delete"
          />
          <h1>Add Branch Content</h1>
          <p className="subtitle">
            {data.title}{" "}
            <span>
              (<strong>Category: </strong> {data.category})
            </span>
          </p>
          <div className="pad">
            {data.branches.map((branch, idx) => (
              <span
                className={
                  "pad__select c-pointer" +
                  (branch.sort_number === data.selected
                    ? " pad__select_selected"
                    : "")
                }
                ref={
                  branch.sort_number === data.selected ? padSelectedRef : null
                }
                onClick={() => {
                  setData({ ...data, selected: branch.sort_number });
                  clearTextAreaContent();
                }}
              >
                {branch.title}
              </span>
            ))}
          </div>
          <form>
            <textarea
              className="form-control bem-input"
              placeholder="Branch content line"
              rows="3"
              value={content.content}
              onChange={(e) =>
                setContent({ ...content, content: e.currentTarget.value })
              }
            ></textarea>
            <button
              onClick={(e) => handleContentSave(e)}
              className="btn btn-primary bem-button"
            >
              Save
            </button>
          </form>
          <ul className="list-group branch-content">
            {selectedBranch.content.map((line) => (
              <li className="list-group-item d-flex">
                <span className="flex-grow-1">{line.content}</span>
                <i
                  className="fa fa-pencil m-2 c-pointer"
                  onClick={() => handleBranchContentEdit(line)}
                  aria-hidden="true"
                ></i>
                <i
                  className="fa fa-trash-o m-2 c-pointer"
                  aria-hidden="true"
                  onClick={() => showDeleteLineModal(line)}
                ></i>
              </li>
            ))}
          </ul>
        </div>
      </SpinnerWhileLoading>
    </div>
  );
}

export default BranchContentForm;
