import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

const viewComplaint = props => {
  useEffect(() => {
    props.onGetComplaintsList();
  }, []);

  let complaintData = props.complaintsData.data;
  const complaintList = [];
  for (let key in complaintData) {
    complaintList.push({
      ...complaintData[key]
    });
  }
  let listOfComplaints = "No Data Found..";
  if (complaintList.length > 0) {
    listOfComplaints = complaintList.map(data => (
      <div className="custom-card"><b>{data.complaintTitle}</b><span class="d-block">{data.complaintDescription}</span><span>{data.complaintlocation}</span></div>
    ));
  }

  return (
    <div>
      <h1>View Complaint</h1>
      <div className="mt-2">{listOfComplaints}</div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    complaintsData: state.viewComplaint.response
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetComplaintsList: () => dispatch(actions.getComplaintsList())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(viewComplaint);
