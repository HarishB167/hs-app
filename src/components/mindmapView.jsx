import React from "react";
import { getColor } from "../services/colors";
import { getMindmapWithId } from "../services/fakeMindmapService";

const MindmapView = (props) => {
  const mindmap = getMindmapWithId(props.match.params.id);
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
            <div
              className="col-3"
              style={{ marginBottom: "5px", marginTop: "5px" }}
            >
              <div
                className="card"
                style={{ minWidth: "10em", background: getColor(branch.title) }}
              >
                <div className="card-body">
                  <h5 className="card-title">{branch.title}</h5>
                  <p className="card-text" style={{ fontSize: "12px" }}>
                    <ul>
                      {branch.content.map((item) => (
                        <li>{item}</li>
                      ))}
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MindmapView;
