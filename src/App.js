import React from "react";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./components/home";
import NavBar from "./components/navBar";
import Mindmap from "./components/mindmap";
import MindmapView from "./components/mindmapView";
import MindmapForm from "./components/newMindmapForm";
import AddBranchForm from "./components/addBranchForm";
import AddBranchContentForm from "./components/addBranchContentForm";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <div className="main-container">
      <ToastContainer />
      <NavBar />
      <Switch>
        <Route path="/mindmaps/create" component={MindmapForm} />
        <Route path="/mindmaps/add-branch" component={AddBranchForm} />
        <Route
          path="/mindmaps/add-branch-content"
          component={AddBranchContentForm}
        />
        <Route path="/mindmaps/:id/edit" component={MindmapForm} />
        <Route path="/mindmaps/:id" component={MindmapView} />
        <Route path="/mindmaps" component={Mindmap} />
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  );
}

export default App;
