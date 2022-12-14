import React, { useEffect, useState } from "react";
import { getMindmap, saveMindmap } from "../services/mindmapService";
import SpinnerWhileLoading from "./common/spinnerWhileLoading";

function MindmapForm(props) {
  const pageType =
    props.location.pathname === "/mindmaps/create" ? "Create" : "Edit";

  const [data, setData] = useState({
    title: "",
    category: "",
    revisions: 0,
    image_link: "",
    branches: [],
  });

  const [showSpinner, setShowSpinner] = useState(pageType === "Edit");

  useEffect(() => {
    async function loadMindmap() {
      if (props.location.pathname !== "/mindmaps/create") {
        const mindmap = await getMindmap(props.match.params.id);
        console.log("Edit", mindmap);
        const newData = { ...data };
        newData.id = mindmap.id;
        newData.title = mindmap.title;
        newData.category = mindmap.category;
        newData.branches = [...mindmap.branches];
        newData.revisions = mindmap.revisions;
        newData.image_link = mindmap.image_link;
        setData(newData);
        setShowSpinner(false);
      }
    }
    loadMindmap();
  }, []);

  const handleChange = (e, field) => {
    const newData = { ...data };
    newData[field] = e.currentTarget.value;
    setData(newData);
  };

  const save = (e) => {
    e.preventDefault();
    console.log("Submitted");
    const mindmap = {
      id: data.id,
      title: data.title,
      category: data.category,
      revisions: data.revisions,
      image_link: data.image_link,
      branches: data.branches,
    };
    console.log("Mindmap : ", mindmap);
    saveMindmap(mindmap);
    props.history.replace("/mindmaps");
  };

  return (
    <div className="container container_center">
      <SpinnerWhileLoading showSpinnerWhen={showSpinner}>
        <form className="mindmap-form">
          <h1>{pageType} Mindmap</h1>
          <input
            className="form-control bem-input"
            type="text"
            placeholder="Title"
            value={data.title}
            onChange={(e) => handleChange(e, "title")}
            autoFocus
            required
          />
          <input
            className="form-control bem-input"
            type="text"
            placeholder="Category"
            value={data.category}
            onChange={(e) => handleChange(e, "category")}
            required
          />
          <input
            className="form-control bem-input"
            type="text"
            placeholder="Image Link"
            value={data.image_link}
            onChange={(e) => handleChange(e, "image_link")}
            required
          />
          <div>
            <button onClick={save} className="btn btn-primary bem-button">
              Save
            </button>
            {pageType === "Edit" && (
              <React.Fragment>
                <button
                  onClick={() =>
                    props.history.push(`/mindmaps/${data.id}/branch`)
                  }
                  className="btn btn-primary bem-button"
                >
                  Edit branches
                </button>
                <button
                  onClick={() =>
                    props.history.push(`/mindmaps/${data.id}/branch-content`)
                  }
                  className="btn btn-primary bem-button"
                >
                  Edit branch contents
                </button>
              </React.Fragment>
            )}
          </div>
        </form>
      </SpinnerWhileLoading>
    </div>
  );
}

export default MindmapForm;
