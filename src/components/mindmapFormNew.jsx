import React, { useState } from "react";

function getPageType(props) {
  if (props.location.pathname === "/mindmaps/create") return "Create";
  return "Edit";
}

function MindmapForm(props) {
  const [pageType, setPageType] = useState("");

  const handleSubmit = () => {
    console.log("Submit called");
  };

  return (
    <div style={{ margin: "50px" }}>
      <h1>{getPageType(props)} page</h1>
      <form onSubmit={handleSubmit}></form>
    </div>
  );
}

export default MindmapForm;
