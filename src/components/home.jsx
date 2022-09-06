import React, { Component } from "react";
import appsService from "../services/appsService";

class Home extends Component {
  state = { apps: [] };

  async componentDidMount() {
    const apps = await appsService.getApps();
    console.log("apps :>> ", apps);
    this.setState({ apps });
  }

  render() {
    return (
      <div className="container container_center">
        {this.state.apps.map((item) => (
          <div className="app-details list-group-item">
            <div
              onClick={() => (window.location.href = item.link)}
              className="logo-title-link d-flex align-items-center flex-column c-pointer"
            >
              <img
                className="img-thumbnail home-page-thumbnail"
                src={item.logo_url}
                alt={item.name}
              />
              <a className="stretched-link" href={item.link} target="_blank">
                {item.name}
              </a>
            </div>
            <div className="description text-center">
              {item.description.length >= 100
                ? item.description.substring(0, 100) + "..."
                : item.description}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Home;
