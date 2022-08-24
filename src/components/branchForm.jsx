import React from "react";
import AddButton from "./common/addButton";
import ListGroup from "./common/listGroup";

const BranchForm = ({
  onAddContentLine,
  onAddBranch,
  renderInput,
  contentList,
  onContentLineEdit,
  onContentLineDelete,
  onMoveUp,
  onMoveDown,
}) => {
  return (
    <React.Fragment>
      <label>Branches</label>
      <div className="row">
        <div className="col-6">
          {renderInput("branchTitleInput", "Title")}
          {renderInput("contentLineInput", "Content")}
          <AddButton onClick={onAddContentLine} />
        </div>
        <div className="col">
          <ListGroup
            items={contentList}
            onEdit={onContentLineEdit}
            onDelete={onContentLineDelete}
            onMoveUp={onMoveUp}
            onMoveDown={onMoveDown}
          />
        </div>
      </div>
      {/* <AddButton onClick={onAddBranch} /> */}
      <button className="btn btn-outline-secondary" onClick={onAddBranch}>
        Save Branch
      </button>
    </React.Fragment>
  );
};

export default BranchForm;
