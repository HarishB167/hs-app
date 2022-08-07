import React, { useState } from "react";
import {
  getMindmapWithId,
  incrementRevisions,
} from "../services/fakeMindmapService";
import Badge from "./common/badge";
import Card from "./common/card";

const MindmapView = (props) => {
  const [mindmap, setMindmap] = useState(
    getMindmapWithId(props.match.params.id)
  );
  console.log(mindmap);

  const rows = [];
  let row = [];
  for (let i = 0; i < mindmap.branches.length; i++) {
    row.push(mindmap.branches[i]);
    if (row.length >= 4) {
      rows.push(row);
      row = [];
    }
  }
  if (row.length !== 0) rows.push(row);
  console.log("array is ", rows);
  return (
    <div className="container">
      <div className="row">
        <Badge
          label="Revisions"
          value={mindmap.revisions}
          onClick={() => setMindmap({ ...incrementRevisions(mindmap._id) })}
        />
      </div>
      <div className="row justify-content-center">
        <div className="col-4">
          <div className="tile orange">
            <h3 className="title">{mindmap.title}</h3>
          </div>
        </div>
      </div>
      {rows.map((row) => (
        <div className="row justify-content-center">
          {row.map((branch) => (
            <Card title={branch.title} itemList={branch.content} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default MindmapView;
