import React, { useEffect, useState } from "react";
import { getMindmap, saveMindmap } from "../services/mindmapService";

function MindmapView(props) {
  const mindmapId = props.match.params.id;

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

  async function loadMindmap() {
    if (mindmapId) {
      const mindmap = await getMindmap(props.match.params.id);
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

  useEffect(() => {
    const branch = data.branches.find(
      (branch) => branch.sort_number == data.selected
    );
    if (branch) setSelectedBranch(branch);
  }, [data]);

  const incrementRevisions = async (e) => {
    e.preventDefault();
    const mindmap = {
      id: data.id,
      title: data.title,
      category: data.category,
      revisions: data.revisions + 1,
      branches: data.branches,
    };
    await saveMindmap(mindmap);
    loadMindmap();
  };

  return (
    <div className="container container_center">
      <div className="container container_min-width_300px container_padding_0">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h5 className="text-center">{data.title}</h5>
            <h6 className="text-center">({data.category})</h6>
          </div>
          <button
            type="button"
            class="btn btn-primary"
            onClick={incrementRevisions}
          >
            Revisions <span class="badge badge-light">{data.revisions}</span>
            <span class="sr-only">mindmap review count</span>
          </button>
        </div>
        <div className="pad">
          {data.branches.map((branch, idx) => (
            <span
              className={
                "pad__select c-pointer" +
                (branch.sort_number === data.selected
                  ? " pad__select_selected"
                  : "")
              }
              onClick={() => {
                setData({ ...data, selected: branch.sort_number });
              }}
            >
              {branch.title}
            </span>
          ))}
        </div>
        <ul className="list-group branch-content">
          {selectedBranch.content.map((line) => (
            <li className="list-group-item">{line.content}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MindmapView;
