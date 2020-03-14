import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

const offersList = props => {
  return (
    <div className="container mt-3">
      <div className="card-1">
      <h3 className="mt-0 pt-0 text-white">CARD-1</h3>
        <ul>
          <li>Store Name - <span>asdas</span></li>
          <li>Store Country- <span>asdas</span></li>
          <li>Store City- <span>asdas</span></li>
          <li>Store Location- <span>asdas</span></li>
          <li>Offer (%) - <span>asdas</span></li>
          <li>Buy something - <span className="pr-2">2</span>  Get something - <span>4</span></li>
          <li>Offer Title - <span>asdas</span></li>
          <li>End Date - <span>asdas</span></li>
          <li>Category - <span>asdas</span></li>
          <li>Online Site Link - <span>asdas</span></li>
        </ul>
      </div>
      <div className="card-2">CARD-2  </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(offersList);
