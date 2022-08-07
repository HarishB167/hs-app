import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getMindmapWithId } from "../services/fakeMindmapService";
import Card from "./common/card";
import BranchForm from "./branchForm";
import { saveMindmap } from "../services/fakeMindmapService";

class MindmapForm extends Form {
  state = {
    data: {
      title: "",
      category: "",
      branches: [],
      branchTitle: "",
      contentInput: "",
      branchId: "",
      content: [],
    },
    errors: {},
    pageType: "",
  };

  schema = {
    _id: Joi.optional(),
    title: Joi.string().required().label("Title"),
    category: Joi.string().required().label("Category"),
    branches: Joi.array().items(
      Joi.object({
        _id: Joi.optional(),
        title: Joi.string().required(),
        content: Joi.array().items(Joi.string()),
      })
    ),
    branchTitle: Joi.optional(),
    contentInput: Joi.optional(),
    branchId: Joi.optional(),
    content: Joi.optional(),
  };

  componentDidMount() {
    const { data } = this.state;
    let pageType = "";
    if (this.props.location.pathname === "/mindmaps/create")
      pageType = "Create";
    else {
      pageType = "Edit";
      const mindmap = getMindmapWithId(this.props.match.params.id);
      console.log("Edit", mindmap);
      data._id = mindmap._id;
      data.title = mindmap.title;
      data.category = mindmap.category;
      data.branches = [...mindmap.branches];
    }
    this.setState({
      pageType,
      data,
    });
  }

  doSubmit = () => {
    console.log("Submitted");
    const mindmap = {
      _id: this.state.data._id,
      title: this.state.data.title,
      category: this.state.data.category,
      branches: this.state.data.branches,
    };
    saveMindmap(mindmap);
    this.props.history.replace("/mindmaps");
  };

  handleAddBranch = (e) => {
    e.preventDefault();
    const { branchTitle, content, branchId } = this.state.data;
    const { data } = { ...this.state };
    if (branchId === "")
      data.branches.push({
        _id: Date.now().toString(),
        title: branchTitle,
        content: [...content],
      });
    else {
      const branch = data.branches.find((b) => b._id === branchId);
      branch.title = branchTitle;
      branch.content = [...content];
    }

    data.branchId = "";
    data.branchTitle = "";
    data.contentInput = "";
    data.content = [];
    console.log("Adding branch", branchTitle, content);
    this.setState({ data });
  };

  handleAddContentLine = (e) => {
    e.preventDefault();
    console.log("Add content line", this.state.data.contentInput);
    const { data } = { ...this.state };
    data.content.push(data.contentInput);
    data.contentInput = "";
    this.setState({ data });
  };

  handleEditBranch = (id) => {
    const { data } = { ...this.state };
    const branch = data.branches.find((b) => b._id === id);
    data.branchId = id;
    data.branchTitle = branch.title;
    data.content = [...branch.content];
    this.setState({ data });
  };

  handleDeleteBranch = (id) => {
    const { data } = { ...this.state };
    const branch = data.branches.find((b) => b._id === id);
    const index = data.branches.indexOf(branch);
    if (index > -1) {
      data.branches.splice(index, 1);
    }
    this.setState({ data });
  };

  handleContentLineEdit = (index) => {
    console.log("Content line edit", index);
    const { data } = { ...this.state };
    data.contentInput = data.content[index];
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
            </div>
            <div className="col">
              <BranchForm
                onAddContentLine={this.handleAddContentLine}
                onAddBranch={this.handleAddBranch}
                renderInput={this.renderInput}
                contentList={this.state.data.content}
                onContentLineEdit={this.handleContentLineEdit}
                onContentLineDelete={this.handleContentLineDelete}
              />

              <div className="d-flex flex-wrap">
                {branches.map((branch) => (
                  <div key={branch.title}>
                    <Card
                      title={branch.title}
                      itemList={branch.content}
                      id={branch._id}
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
