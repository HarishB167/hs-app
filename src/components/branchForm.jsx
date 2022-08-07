import React from "react";
import AddButton from "./common/addButton";
import ListGroup from "./common/listGroup";

const BranchForm = ({
  onAddContentLine,
  onAddBranch,
  renderInput,
  contentList,
  onContentLineEdit,
}) => {
  return (
    <React.Fragment>
      <label>Branches</label>
      <div className="row">
        <div className="col-6">
          {renderInput("branchTitle", "Title")}
          {renderInput("contentInput", "Content")}
          <AddButton onClick={onAddContentLine} />
        </div>
        <div className="col">
          <ListGroup items={contentList} onClick={onContentLineEdit} />
        </div>
      </div>
      <AddButton onClick={onAddBranch} />
    </React.Fragment>
  );
};

export default BranchForm;
