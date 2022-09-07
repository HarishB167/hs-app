import React, { Component } from "react";
import appsService from "../services/appsService";
import SpinnerWhileLoading from "./common/spinnerWhileLoading";

class Home extends Component {
  state = { apps: [], showSpinner: true };

  async componentDidMount() {
    if (!(this.props.appState.apps && this.props.appState.apps.length !== 0)) {
      const apps = await appsService.getApps();
      console.log("apps :>> ", apps);
      this.props.setState("apps", apps);
    }
    this.setState({ showSpinner: false });
  }

  render() {
    return (
      <div className="container container_center">
        <SpinnerWhileLoading showSpinnerWhen={this.state.showSpinner}>
          {this.props.appState.apps &&
            this.props.appState.apps.map((item) => (
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
                  <a
                    className="stretched-link"
                    href={item.link}
                    target="_blank"
                  >
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
        </SpinnerWhileLoading>
      </div>
    );
  }
}

export default Home;
