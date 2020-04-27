import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

const initialState = {
  resumeDetails: {
    firstName: "",
    lastName: "",
    resumeTitle: "",
    totalExperience: "",
    releventExperence: "",
    primarySkills: "",
    secondarySkills: "",
    preferedLocation: "",
    projects: "",
    profileDescription: ""
  },
  errors: ""
};

class AddOffer extends Component {
  constructor(props) {
    console.log("constructor");
    super(props);
    this.state = initialState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    // this.setState({ firstName: event.target.value });
    let nam = event.target.name;
    let val = event.target.value;
    // this.setState({ resumeDetails, [nam]: val });
    this.setState({
      resumeDetails: {
        ...this.state.resumeDetails,
        [nam]: val
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    // console.log(this.state);
    this.setState({
      resumeDetails: {
        ...this.state.resumeDetails,
        firstName: this.props.onEditProfile.data.firstName,
        lastName: this.props.onEditProfile.data.lastName,
        resumeTitle: this.props.onEditProfile.data.resumeTitle,
        totalExperience: this.props.onEditProfile.data.totalExperience,
        releventExperence: this.props.onEditProfile.data.releventExperence,
        primarySkills: this.props.onEditProfile.data.primarySkills,
        secondarySkills: this.props.onEditProfile.data.secondarySkills,
        preferedLocation: this.props.onEditProfile.data.preferedLocation,
        projects: this.props.onEditProfile.data.projects,
        profileDescription: this.props.onEditProfile.data.profileDescription
      }
    });
  }
  componentWillMount() {
    console.log("componentWillMount");
  }
  componentDidMount() {
    this.props.onProfileDetails();
    // console.log(this.props.onEditProfile);
    console.log("componentDidMount");
  }

  componentWillUpdate() {
    console.log("componentWillUpdate");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    return true;
  }

  // static getDerivedStateFromProps(props, state) {
  //   console.log("getDerivedStateFromProps");
  //   return null;
  // }
  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log("getSnapshotBeforeUpdate");
  //   return null;
  // }
  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    console.log("render");
    return (
      <section>
        <form
          className="form-theme-1 container my-3"
          onSubmit={this.handleSubmit}
        >
          <h3 className="mt-0 pt-0 text-white pb-4">Create Resume</h3>
          <div className="row">
            <div className="col-6 col-sm-4 col-md-3">
              <div className="custom-form-group mb-3">
                <label>First Name</label>
                <input
                  type="text"
                  className="line-input"
                  name="firstName"
                  value={this.state.resumeDetails.firstName}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="col-6 col-sm-4 col-md-3">
              <div className="custom-form-group mb-3">
                <label>Last Name</label>
                <input
                  type="text"
                  className="line-input"
                  name="lastName"
                  value={this.state.resumeDetails.lastName}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="col-6 col-sm-4 col-md-3">
              <div className="custom-form-group mb-3">
                <label>Resume Title</label>
                <input
                  type="text"
                  className="line-input"
                  name="resumeTitle"
                  value={this.state.resumeDetails.resumeTitle}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="col-6 col-sm-4 col-md-3">
              <div className="custom-form-group mb-3">
                <label>Total Experience</label>
                <input
                  type="text"
                  className="line-input"
                  name="totalExperience"
                  value={this.state.resumeDetails.totalExperience}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="col-6 col-sm-4 col-md-3">
              <div className="custom-form-group mb-3">
                <label>Relevent Experence</label>
                <input
                  type="text"
                  className="line-input"
                  name="releventExperence"
                  value={this.state.resumeDetails.releventExperence}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="col-6 col-sm-4 col-md-3">
              <div className="custom-form-group mb-3">
                <label>Primary skills</label>
                <input
                  type="text"
                  className="line-input"
                  name="primarySkills"
                  value={this.state.resumeDetails.primarySkills}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="col-6 col-sm-4 col-md-3">
              <div className="custom-form-group mb-3">
                <label>secondary skills</label>
                <input
                  type="text"
                  className="line-input"
                  name="secondarySkills"
                  value={this.state.resumeDetails.secondarySkills}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="col-6 col-sm-4 col-md-3">
              <div className="custom-form-group mb-3">
                <label>Prefered location</label>
                <input
                  type="text"
                  className="line-input"
                  name="preferedLocation"
                  value={this.state.resumeDetails.preferedLocation}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="col-6 col-sm-4 col-md-3">
              <div className="custom-form-group mb-3">
                <label>Projects</label>
                <input
                  type="text"
                  className="line-input"
                  name="projects"
                  value={this.state.resumeDetails.projects}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="col-6 col-sm-4 col-md-3">
              <div className="custom-form-group mb-3">
                <label>Profile description</label>
                <input
                  type="text"
                  className="line-input"
                  name="profileDescription"
                  value={this.state.profileDescription}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="col-12 mt-2">
              <button type="submit" className="mr-2 mb-3 btn btn-black">
                <span>use my profile Details</span>
              </button>
            </div>
          </div>
        </form>

        <div className="container pb-4">
          <div className="card-1  mt-1 mr-1">
            <h3 className="mt-0 pt-0 text-white">RESUME - 1</h3>
            <p>{this.state.resumeDetails.resumeTitle}</p>
            <ul>
              <li>
                FullName{" "}
                <span className="d-block">
                  {this.state.resumeDetails.firstName}{" "}
                  {this.state.resumeDetails.lastName}
                </span>
              </li>
              <li>
                Total Exp{" "}
                <span className="d-block">
                  {this.state.resumeDetails.totalExperience}
                </span>
              </li>
              <li>
                Rel Exp{" "}
                <span className="d-block">
                  {this.state.resumeDetails.releventExperence}
                </span>
              </li>
              <li>
                Primary skills{" "}
                <span className="d-block">
                  {this.state.resumeDetails.primarySkills}
                </span>
              </li>
              <li>
                Secondary skills{" "}
                <span className="d-block">
                  {this.state.resumeDetails.secondarySkills}
                </span>
              </li>
              <li>
                Prefered location{" "}
                <span className="d-block">
                  {this.state.resumeDetails.preferedLocation}
                </span>
              </li>
              <li>
                Projects{" "}
                <span className="d-block">
                  {this.state.resumeDetails.projects}
                </span>
              </li>
              <li>
                Profile description{" "}
                <span className="d-block">
                  {this.state.resumeDetails.profileDescription}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    onEditProfile: state.editProfile
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onProfileDetails: () => {
      dispatch(actions.profileDetails());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddOffer);
