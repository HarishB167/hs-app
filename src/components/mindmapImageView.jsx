import React, { useEffect, useState } from "react";
import { getMindmap } from "../services/mindmapService";
import SpinnerWhileLoading from "./common/spinnerWhileLoading";

function MindmapImageView(props) {
  const mindmapId = props.match.params.id;

  const [data, setData] = useState({
    title: "",
    category: "",
    revisions: 0,
    branches: [],
    selected: 1,
  });

  const [showSpinner, setShowSpinner] = useState(true);

  async function loadMindmap() {
    if (mindmapId) {
      const mindmap = await getMindmap(props.match.params.id);
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

  useEffect(() => {
    loadMindmap();
  }, []);

  return (
    <div className="container container_center">
      <SpinnerWhileLoading showSpinnerWhen={showSpinner}>
        <div>
          Mindmap Image view : {data.title} ({data.category})
        </div>
        <a
          href={data.image_link}
          data-lightbox="mindmap-image"
          data-title={`Mindmap image of ${data.title}`}
        >
          Open image
        </a>
      </SpinnerWhileLoading>
    </div>
  );
}

export default MindmapImageView;
