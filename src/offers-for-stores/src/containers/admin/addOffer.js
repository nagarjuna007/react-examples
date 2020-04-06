import React, { Component } from "react";

class AddOffer extends Component {
  render() {
    return (
      <form className="form-theme-1 container my-3">
        <h3 className="mt-0 pt-0 text-white pb-2">Create Resume</h3>
        <div className="row">
          <div className="col-6 col-sm-4 col-md-3">
            <div className="custom-form-group mb-3">
              <label>First Name</label>
              <input type="text" className="line-input" />
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3">
            <div className="custom-form-group mb-3">
              <label>Last Name</label>
              <input type="text" className="line-input" />
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3">
            <div className="custom-form-group mb-3">
              <label>Resume Title</label>
              <input type="text" className="line-input" />
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3">
            <div className="custom-form-group mb-3">
              <label>Total Experience</label>
              <input type="text" className="line-input" />
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3">
            <div className="custom-form-group mb-3">
              <label>Relevent Experence</label>
              <input type="text" className="line-input" />
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3">
            <div className="custom-form-group mb-3">
              <label>Primary skills</label>
              <input type="text" className="line-input" />
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3">
            <div className="custom-form-group mb-3">
              <label>secondary skills</label>
              <input type="text" className="line-input" />
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3">
            <div className="custom-form-group mb-3">
              <label>Prefered location</label>
              <input type="text" className="line-input" />
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3">
            <div className="custom-form-group mb-3">
              <label>Projects</label>
              <input type="text" className="line-input" />
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3">
            <div className="custom-form-group mb-3">
              <label>Profile description</label>
              <input type="text" className="line-input" />
            </div>
          </div>
          <div className="col-12 mt-2">
            <button type="submit" className="mr-2 mb-3 btn btn-black">
              <span>create resume</span>
            </button>
            <button type="submit" className="btn btn-black mb-3">
              <span>use my profile Details</span>
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default AddOffer;