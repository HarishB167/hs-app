import React, { useEffect, useState } from "react";
import { getMindmap, saveMindmap } from "../services/mindmapService";

function MindmapForm(props) {
  const pageType =
    props.location.pathname === "/mindmaps/create" ? "Create" : "Edit";

  const [data, setData] = useState({
    title: "",
    category: "",
    revisions: 0,
    branches: [],
  });

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
        setData(newData);
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
      branches: data.branches,
    };
    console.log("Mindmap : ", mindmap);
    saveMindmap(mindmap);
    props.history.replace("/mindmaps");
  };

  return (
    <div className="container container_center">
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
        <div>
          {pageType === "Create" && (
            <React.Fragment>
              <button className="btn btn-primary bem-button">
                Save and Add branch
              </button>
              <button onClick={save} className="btn btn-primary bem-button">
                Save
              </button>
            </React.Fragment>
          )}
          {pageType === "Edit" && (
            <React.Fragment>
              <button
                onClick={() =>
                  props.history.replace(`/mindmaps/${data.id}/branch`)
                }
                className="btn btn-primary bem-button"
              >
                Edit branches
              </button>
              <button
                onClick={() =>
                  props.history.replace(`/mindmaps/${data.id}/branch-content`)
                }
                className="btn btn-primary bem-button"
              >
                Edit branch contents
              </button>
            </React.Fragment>
          )}
        </div>
      </form>
    </div>
  );
}

export default MindmapForm;
