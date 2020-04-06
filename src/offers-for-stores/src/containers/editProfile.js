import React, { Component } from "react";
import Message from "../components/message";

const initialState = {
  firstName: "",
  lastName: "",
  resumeTitle: "",
  totalExperience: "",
  releventExperence: "",
  primarySkills: "",
  secondarySkills: "",
  preferedLocation: "",
  projects: "",
  profileDescription: "",
  errors: {
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
  formError: ""
};

const validateForm = (state, errors) => {
  let valid = true;
  Object.values(state).forEach(val => val.length < 1 && (valid = false));
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    // this.setState({ firstName: event.target.value });
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
    let errors = this.state.errors;
    const validEmailRegex = RegExp(
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );
    const nameRegex = RegExp(/^[a-z\d]{5,12}$/i);
    const numExpRegex = RegExp(/^\d{1,2}$/i);
    const PhoneNumRegex = RegExp(/^\d{11}$/i);
    const textAreaRegex = RegExp(
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );
    switch (nam) {
      case "firstName":
        if (val.length < 5) {
          errors.firstName = "Must be 5 chars long!";
        } else if (val.length > 50) {
          errors.firstName = "less than 50 chars shot!";
        } else if (val.length < 1) {
          errors.firstName = "required..!";
        } else if (!numberRegex.test(val)) {
          errors.firstName = "Invalid Input";
        } else {
          errors.firstName = "";
        }
        break;
      case "lastName":
        errors.lastName = val.length < 5 ? "Must be 5 characters long!" : "";
        break;
      case "resumeTitle":
        errors.resumeTitle = val.length < 5 ? "Must be 5 characters long!" : "";
        break;
      case "totalExperience":
        errors.totalExperience =
          val.length > 2 ? "Must be 2 characters long!" : "";
        break;
      case "releventExperence":
        errors.releventExperence =
          val.length > 2 ? "Must be 2 characters long!" : "";
        break;
      case "primarySkills":
        errors.primarySkills =
          val.length < 5 ? "Must be 5 characters long!" : "";
        break;
      case "secondarySkills":
        errors.secondarySkills =
          val.length < 5 ? "Must be 5 characters long!" : "";
        break;
      case "preferedLocation":
        errors.preferedLocation =
          val.length < 5 ? "Must be 5 characters long!" : "";
        break;
      case "projects":
        errors.projects = val.length < 5 ? "Must be 5 characters long!" : "";
        break;
      case "profileDescription":
        errors.profileDescription =
          val.length < 5 ? "Must be 5 characters long!" : "";
        break;
      default:
        break;
    }
    this.setState({ errors, [nam]: val });
  }

  handleSubmit(event) {
    event.preventDefault();
    // console.log(this.state);
    if (validateForm(this.state, this.state.errors)) {
      console.log("Valid Form");
      console.log(this.state);
      this.setState(initialState);
    } else {
      console.log("Invalid Form");
      this.setState({ formError: "Invalid SUBMIT Fill Inputs and submit" });
    }
  }

  render() {
    return (
      <form
        className="form-theme-1 container my-3"
        onSubmit={this.handleSubmit}
      >
        <h3 className="mt-0 pt-0 text-white pb-2 pb-4">Edit Profile</h3>
        <div className="row">
          <div className="col-6 col-sm-4 col-md-3">
            <div className="custom-form-group mb-3">
              <label>First Name</label>
              <input
                type="text"
                className="line-input"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleChange}
              />
              <small>{this.state.errors.firstName}</small>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3">
            <div className="custom-form-group mb-3">
              <label>Last Name</label>
              <input
                type="text"
                className="line-input"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleChange}
              />
              <small>{this.state.errors.lastName}</small>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3">
            <div className="custom-form-group mb-3">
              <label>Resume Title</label>
              <input
                type="text"
                className="line-input"
                name="resumeTitle"
                value={this.state.resumeTitle}
                onChange={this.handleChange}
              />
              <small>{this.state.errors.resumeTitle}</small>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3">
            <div className="custom-form-group mb-3">
              <label>Total Experience</label>
              <input
                type="text"
                className="line-input"
                name="totalExperience"
                value={this.state.totalExperience}
                onChange={this.handleChange}
              />
              <small>{this.state.errors.totalExperience}</small>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3">
            <div className="custom-form-group mb-3">
              <label>Relevent Experence</label>
              <input
                type="text"
                className="line-input"
                name="releventExperence"
                value={this.state.releventExperence}
                onChange={this.handleChange}
              />
              <small>{this.state.errors.releventExperence}</small>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3">
            <div className="custom-form-group mb-3">
              <label>Primary skills</label>
              <input
                type="text"
                className="line-input"
                name="primarySkills"
                value={this.state.primarySkills}
                onChange={this.handleChange}
              />
              <small>{this.state.errors.primarySkills}</small>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3">
            <div className="custom-form-group mb-3">
              <label>Secondary skills</label>
              <input
                type="text"
                className="line-input"
                name="secondarySkills"
                value={this.state.secondarySkills}
                onChange={this.handleChange}
              />
              <small>{this.state.errors.secondarySkills}</small>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3">
            <div className="custom-form-group mb-3">
              <label>Prefered location</label>
              <input
                type="text"
                className="line-input"
                name="preferedLocation"
                value={this.state.preferedLocation}
                onChange={this.handleChange}
              />
              <small>{this.state.errors.preferedLocation}</small>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3">
            <div className="custom-form-group mb-3">
              <label>Projects</label>
              <input
                type="text"
                className="line-input"
                name="projects"
                value={this.state.projects}
                onChange={this.handleChange}
              />
              <small>{this.state.errors.projects}</small>
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
              <small>{this.state.errors.profileDescription}</small>
            </div>
          </div>
          <div className="col-12 mt-2">
            <button type="submit" className="mr-2 mb-3 btn btn-black">
              <span>save</span>
            </button>
          </div>
        </div>
        <Message messageinfo={this.state.formError} />
      </form>
    );
  }
}

export default EditProfile;
