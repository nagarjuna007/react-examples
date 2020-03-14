import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

const addOffer = props => {
  const submitHandler = event => {
    event.preventDefault();
    props.addComplaintHandler();
  };

  return (
    <form onSubmit={submitHandler} className="form-theme-1 container my-3">
      <h3 className="mt-0 pt-0 text-white pb-2">ADD OFFER</h3>
      <div className="row">
        <div className="col-6 col-sm-4 col-md-3">
          <div className="custom-form-group mb-3">
            <label>Store Name</label>
            <input type="text" className="line-input" />
          </div>
        </div>
        <div className="col-6 col-sm-4 col-md-3">
          <div className="custom-form-group mb-3">
            <label>Store Country</label>
            <input type="text" className="line-input" />
          </div>
        </div>
        <div className="col-6 col-sm-4 col-md-3">
          <div className="custom-form-group mb-3">
            <label>Store City</label>
            <input type="text" className="line-input" />
          </div>
        </div>
        <div className="col-6 col-sm-4 col-md-3">
          <div className="custom-form-group mb-3">
            <label>Store Location</label>
            <input type="text" className="line-input" />
          </div>
        </div>
        <div className="col-6 col-sm-4 col-md-3">
          <div className="custom-form-group mb-3">
            <label>Offer (%)</label>
            <input type="text" className="line-input" />
          </div>
        </div>
        <div className="col-6 col-sm-4 col-md-3">
          <div className="custom-form-group mb-3">
            <label>Buy something</label>
            <input type="text" className="line-input" />
          </div>
        </div>
        <div className="col-6 col-sm-4 col-md-3">
          <div className="custom-form-group mb-3">
            <label>Get something</label>
            <input type="text" className="line-input" />
          </div>
        </div>
        <div className="col-6 col-sm-4 col-md-3">
          <div className="custom-form-group mb-3">
            <label>Offer Title</label>
            <input type="text" className="line-input" />
          </div>
        </div>
        <div className="col-6 col-sm-4 col-md-3">
          <div className="custom-form-group mb-3">
            <label>End Date</label>
            <input type="text" className="line-input" />
          </div>
        </div>
        <div className="col-6 col-sm-4 col-md-3">
          <div className="custom-form-group mb-3">
            <label>Category</label>
            <input type="text" className="line-input" />
          </div>
        </div>
        <div className="col-6 col-sm-4 col-md-3">
          <div className="custom-form-group mb-3">
            <label>Layout</label>
            <input type="text" className="line-input" />
          </div>
        </div>
         <div className="col-6 col-sm-4 col-md-3">
          <div className="custom-form-group mb-3">
            <label>Mobile Number</label>
            <input type="text" className="line-input" />
          </div>
        </div>
         <div className="col-6 col-sm-4 col-md-3">
          <div className="custom-form-group mb-3">
            <label>Online Site Link</label>
            <input type="text" className="line-input" />
          </div>
        </div>
        <div className="col-12 mt-2">
          <button type="submit">
            <span>SUBMIT</span>
          </button>
        </div>
      </div>
    </form>
  );
};

const mapStateToProps = state => {
  return {
    message: state.addOffer.response
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addOfferHandler: () => dispatch(actions.addOfferAction())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(addOffer);
