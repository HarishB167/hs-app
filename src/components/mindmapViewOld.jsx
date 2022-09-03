import React, { useState, useEffect } from "react";
import mindmapService, { saveMindmap } from "../services/mindmapService";
import Badge from "./common/badge";
import Card from "./common/card";

async function getMindmap(id, setMindmap, setPageRows) {
  const mindmap = await mindmapService.getMindmap(id);
  console.log(mindmap);
  setMindmap(mindmap);

  let rows = [];
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
  setPageRows(rows);
}

const MindmapView = (props) => {
  const [mindmap, setMindmap] = useState();
  const [pageRows, setPageRows] = useState([]);

  useEffect(() => {
    getMindmap(props.match.params.id, setMindmap, setPageRows);
  }, []);

  return (
    <div className="container">
      <div className="row">
        {mindmap && (
          <Badge
            label="Revisions"
            value={mindmap.revisions}
            onClick={() => {
              mindmap.revisions += 1;
              saveMindmap(mindmap);
              getMindmap(props.match.params.id, setMindmap, setPageRows);
            }}
          />
        )}
      </div>
      <div className="row justify-content-center">
        {mindmap && (
          <div className="col-4">
            <div className="tile orange">
              <h3 className="title">{mindmap.title}</h3>
            </div>
          </div>
        )}
      </div>
      {pageRows.map((row, idx) => (
        <div key={idx} className="row justify-content-center">
          {row.map((branch) => (
            <Card
              key={branch.id}
              title={branch.title}
              itemList={branch.content}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default MindmapView;
