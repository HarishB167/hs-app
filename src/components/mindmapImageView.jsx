import React, { useEffect, useState } from "react";
import { getMindmap } from "../services/mindmapService";
import SpinnerWhileLoading from "./common/spinnerWhileLoading";
import OpenSeadragon from "openseadragon/build/openseadragon/openseadragon";

function MindmapImageView(props) {
  const mindmapId = props.match.params.id;
  const [viewer, setViewer] = useState(null);

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
    if (viewer && data.image_link) {
      viewer.open({ type: "image", url: data.image_link });
    } else if (!viewer && data.image_link) {
      setViewer(
        OpenSeadragon({
          id: "openseadragon1",
          prefixUrl:
            "https://cdn.jsdelivr.net/npm/openseadragon@3.1/build/openseadragon/images/",
          tileSources: { type: "image", url: data.image_link },
        })
      );
    }
  }, [data]);

  useEffect(() => {
    loadMindmap();
  }, []);

  return (
    <div className="container container_center">
      <SpinnerWhileLoading showSpinnerWhen={showSpinner}>
        <div>
          Mindmap Image view : {data.title} ({data.category})
        </div>
        <div className="h-75 w-100">
          <div id="openseadragon1" className="w-100 h-100"></div>
        </div>
      </SpinnerWhileLoading>
    </div>
  );
}

export default MindmapImageView;
