import React, { Component } from "react";
import Header from "../../components/header/Header";
import AddComplaint from "../add-complaint/Add-complaint";
import ViewComplaint from "../view-complaint/View-complaint";

class Home extends Component {
  state = {
    toggleIn: "nav-link active",
    toggleOut: "nav-link",
    tabPaneActive: "tab-pane active",
    tabPane: "tab-pane"
  };
  viewComplaintClick = () => {
    this.setState({
      toggleIn:
        this.state.toggleIn === "nav-link active"
          ? "nav-link"
          : "nav-link active",
      toggleOut:
        this.state.toggleOut === "nav-link active"
          ? "nav-link"
          : "nav-link active",
      tabPaneActive:
        this.state.tabPaneActive === "tab-pane active"
          ? "tab-pane"
          : "tab-pane active",
      tabPane:
        this.state.tabPane === "tab-pane active"
          ? "tab-pane"
          : "tab-pane active"
    });
  };
  newComplaintClick = () => {
    this.setState({
      toggleIn:
        this.state.toggleIn === "nav-link active"
          ? "nav-link inActive"
          : "nav-link active",
      toggleOut:
        this.state.toggleOut === "nav-link active"
          ? "nav-link"
          : "nav-link active",
      tabPaneActive:
        this.state.tabPaneActive === "tab-pane active"
          ? "tab-pane"
          : "tab-pane active",
      tabPane:
        this.state.tabPane === "tab-pane active"
          ? "tab-pane"
          : "tab-pane active"
    });
  };

  render() {
    return (
      <main>
        <Header />
        <div className="mt-2 container">
          <div className="bg-white rounded">
            <div className="tab-style-1 rounded-top overflow-scroll-sm-bar">
              <ul className="nav nav-tabs border-0 overflow-scroll-sm">
                <li className="nav-item">
                  <a
                    className={`${this.state.toggleIn}`}
                    onClick={this.newComplaintClick}
                  >
                    New Complaint
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`${this.state.toggleOut}`}
                    onClick={this.viewComplaintClick}
                  >
                    View Complaints
                  </a>
                </li>
              </ul>
            </div>
            <div className="tab-content p-3">
              <div className={`${this.state.tabPaneActive}`}>
                <AddComplaint />
              </div>
              <div className={`${this.state.tabPane}`}>
                <ViewComplaint />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Home;
