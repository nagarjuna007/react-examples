import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { updateObject } from "../../shared/utility";
import * as actions from "../../store/actions/index";

const addComplaint = props => {
  const [addComplaintForm, setAddComplaintForm] = useState({
    complaintTitle: "",
    complaintlocation: "",
    complaintDescription: "",
    attachments: ""
  });

  const submitHandler = event => {
    event.preventDefault();
    props.addComplaintHandler(
      addComplaintForm.complaintTitle.value,
      addComplaintForm.complaintlocation.value,
      addComplaintForm.complaintDescription.value
    );
  };

  const inputChangedHandler = (event, controlName) => {
    const updatedControls = updateObject(addComplaintForm, {
      [controlName]: updateObject(addComplaintForm[controlName], {
        value: event.target.value
      })
    });
    setAddComplaintForm(updatedControls);
  };
  let successMessage = null;
  if (props.message) {
    successMessage = <p>{props.message.statusText}</p>;
  }
  return (
    <section>
      <h1>Add Complaint</h1>
      <p> {successMessage}</p>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label>Complaint Title</label>
          <input
            type="text"
            className="form-control"
            key="addComplaintForm.complaintTitle"
            value={addComplaintForm.complaintTitle.value}
            onChange={event => inputChangedHandler(event, "complaintTitle")}
          />
        </div>
        <div className="form-group">
          <label>Complaint location/address</label>
          <textarea
            className="form-control"
            key="addComplaintForm.complaintlocation"
            value={addComplaintForm.complaintlocation.value}
            onChange={event => inputChangedHandler(event, "complaintlocation")}
          />
        </div>
        <div className="form-group">
          <label>Complaint Description</label>
          <textarea
            className="form-control"
            key="addComplaintForm.complaintDescription"
            value={addComplaintForm.complaintDescription.value}
            onChange={event =>
              inputChangedHandler(event, "complaintDescription")
            }
          />
        </div>
        <div className="form-group">
          <label className="w-100">Attachments</label>
          <input
            type="file"
            key="addComplaintForm.attachments"
            value={addComplaintForm.attachments.value}
            onChange={event => inputChangedHandler(event, "attachments")}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          SUBMIT
        </button>
      </form>
    </section>
  );
};

const mapStateToProps = state => {
  debugger;
  return {
    message: state.addComplaint.message
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addComplaintHandler: (
      complaintTitle,
      complaintlocation,
      complaintDescription
    ) =>
      dispatch(
        actions.addComplaintAction(
          complaintTitle,
          complaintlocation,
          complaintDescription
        )
      )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(addComplaint);
