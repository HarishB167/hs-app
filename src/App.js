import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./components/home";
import NavBar from "./components/navBar";
import Mindmap from "./components/mindmap";
import MindmapView from "./components/mindmapView";
import MindmapForm from "./components/newMindmapForm";
import BranchForm from "./components/branchForm";
import BranchContentForm from "./components/branchContentForm";
import MindmapImageView from "./components/mindmapImageView";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const [appState, setAppState] = useState({});

  const setState = (key, value) => {
    const state = { ...appState };
    state[key] = value;
    setAppState(state);
  };
  return (
    <div className="main-container">
      <ToastContainer />
      <NavBar />
      <Switch>
        <Route path="/mindmaps/create" component={MindmapForm} />
        <Route
          path="/mindmaps/:id/branch-content"
          component={BranchContentForm}
        />
        <Route path="/mindmaps/:id/edit" component={MindmapForm} />
        <Route path="/mindmaps/:id/branch" component={BranchForm} />
        <Route path="/mindmaps/:id/view-image" component={MindmapImageView} />
        <Route path="/mindmaps/:id" component={MindmapView} />
        <Route
          path="/mindmaps"
          render={(props) => (
            <Mindmap appState={appState} setState={setState} {...props} />
          )}
        />
        <Route
          path="/"
          exact
          render={(props) => (
            <Home appState={appState} setState={setState} {...props} />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
