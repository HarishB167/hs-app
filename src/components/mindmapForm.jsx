import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import Card from "./common/card";
import BranchForm from "./branchForm";
import { getMindmap, saveMindmap } from "../services/mindmapService";

class MindmapForm extends Form {
  state = {
    data: {
      title: "",
      category: "",
      revisions: "",
      branches: [],
      branchTitleInput: "",
      contentLineInput: "",
      contentLineId: "",
      branchId: "",
      content: [],
    },
    errors: {},
    pageType: "",
  };

  schema = {
    id: Joi.optional(),
    title: Joi.string().required().label("Title"),
    category: Joi.string().required().label("Category"),
    revisions: Joi.number().min(0).label("Revisions"),
    branches: Joi.array().items(
      Joi.object({
        sort_number: Joi.optional(),
        id: Joi.optional(),
        title: Joi.string().required(),
        mindmap: Joi.optional(),
        content: Joi.array().items(
          Joi.object({
            sort_number: Joi.optional(),
            id: Joi.optional(),
            content: Joi.string(),
            branch: Joi.optional(),
          })
        ),
      })
    ),
    branchTitleInput: Joi.optional(),
    contentLineInput: Joi.optional(),
    contentLineId: Joi.optional(),
    branchId: Joi.optional(),
    content: Joi.optional(),
  };

  async componentDidMount() {
    const { data } = this.state;
    let pageType = "";
    if (this.props.location.pathname === "/mindmaps/create")
      pageType = "Create";
    else {
      pageType = "Edit";
      const mindmap = await getMindmap(this.props.match.params.id);
      console.log("Edit", mindmap);
      data.id = mindmap.id;
      data.title = mindmap.title;
      data.category = mindmap.category;
      data.branches = [...mindmap.branches];
      data.revisions = mindmap.revisions;
    }
    this.setState({
      pageType,
      data,
    });

    const some = Joi.validate(this.state.data, this.schema, {
      abortEarly: false,
    });
    console.log("Validation result ", some);
  }

  doSubmit = () => {
    console.log("Submitted");
    const mindmap = {
      id: this.state.data.id,
      title: this.state.data.title,
      category: this.state.data.category,
      branches: this.state.data.branches,
      revisions: this.state.data.revisions,
    };
    console.log("Mindmap : ", mindmap);
    saveMindmap(mindmap);
    this.props.history.replace("/mindmaps");
  };

  handleAddBranch = (e) => {
    e.preventDefault();
    const { branchTitleInput, content, branchId } = this.state.data;
    const { data } = { ...this.state };
    if (branchId === "")
      data.branches.push({
        title: branchTitleInput,
        content: [...content],
      });
    else {
      const branch = data.branches.find((b) => b.id === branchId);
      branch.title = branchTitleInput;
      branch.content = [...content];
    }

    data.branchId = "";
    data.branchTitleInput = "";
    data.contentLineInput = "";
    data.content = [];
    console.log("Adding branch", branchTitleInput, content);
    this.setState({ data });
  };

  handleAddContentLine = (e) => {
    e.preventDefault();
    console.log("Add content line", this.state.data.contentLineInput);
    const { data } = { ...this.state };
    if (data.contentLineId)
      data.content.push({
        content: data.contentLineInput,
        id: data.contentLineId,
      });
    else data.content.push({ content: data.contentLineInput });
    data.contentLineInput = "";
    this.setState({ data });
  };

  handleEditBranch = (id) => {
    const { data } = { ...this.state };
    const branch = data.branches.find((b) => b.id === id);
    data.branchId = id;
    data.branchTitleInput = branch.title;
    data.content = [...branch.content];
    this.setState({ data });
  };

  handleDeleteBranch = (id) => {
    const { data } = { ...this.state };
    const branch = data.branches.find((b) => b.id === id);
    const index = data.branches.indexOf(branch);
    if (index > -1) {
      data.branches.splice(index, 1);
    }
    this.setState({ data });
  };

  handleContentLineEdit = (index) => {
    console.log("Content line edit", index);
    const { data } = { ...this.state };
    data.contentLineInput = data.content[index].content;
    data.contentLineId = data.content[index].id;
    if (index > -1) {
      data.content.splice(index, 1);
    }
    this.setState({ data });
  };

  handleContentLineDelete = (index) => {
    const { data } = { ...this.state };
    if (index > -1) {
      data.content.splice(index, 1);
    }
    this.setState({ data });
  };

  handleContentLineMoveUp = (index) => {
    const { data } = { ...this.state };
    if (index > 0) {
      let temp = data.content[index];
      data.content[index] = data.content[index - 1];
      data.content[index - 1] = temp;
    }
    this.setState({ data });
  };

  handleContentLineMoveDown = (index) => {
    const { data } = { ...this.state };
    if (index < data.content.length) {
      let temp = data.content[index];
      data.content[index] = data.content[index + 1];
      data.content[index + 1] = temp;
    }
    this.setState({ data });
  };

  render() {
    const { branches } = this.state.data;
    return (
      <div style={{ margin: "50px" }}>
        <h1>{this.state.pageType} page</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-2">
              {this.renderSubmit("Save")}
              {this.renderInput("title", "Title")}
              {this.renderInput("category", "Category")}
              {this.renderInput("revisions", "Revisions", "number")}
            </div>
            <div className="col">
              <BranchForm
                onAddContentLine={this.handleAddContentLine}
                onAddBranch={this.handleAddBranch}
                renderInput={this.renderInput}
                contentList={this.state.data.content.map(
                  (item) => item.content
                )}
                onContentLineEdit={this.handleContentLineEdit}
                onContentLineDelete={this.handleContentLineDelete}
                onMoveUp={this.handleContentLineMoveUp}
                onMoveDown={this.handleContentLineMoveDown}
              />

              <div className="d-flex flex-wrap">
                {branches.map((branch) => (
                  <div key={branch.title}>
                    <Card
                      title={branch.title}
                      itemList={branch.content}
                      id={branch.id}
                      onEdit={this.handleEditBranch}
                      onDelete={this.handleDeleteBranch}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {this.renderSubmit("Save")}
        </form>
      </div>
    );
  }
}

export default MindmapForm;
