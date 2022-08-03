import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/home";
import NavBar from "./components/navBar";
import Mindmap from "./components/mindmap";
import MindmapView from "./components/mindmapView";
import MindmapForm from "./components/mindmapForm";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route path="/mindmaps/create" component={MindmapForm} />
        <Route path="/mindmaps/:id/edit" component={MindmapForm} />
        <Route path="/mindmaps/:id" component={MindmapView} />
        <Route path="/mindmaps" component={Mindmap} />
        <Route path="/" exact component={Home} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
