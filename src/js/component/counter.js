import React from "react";
import PropTypes from "prop-types";

const Counter = (props) => {
  return (
    <div className="container-fluid bg-black">
      <div className="container align-items-center text-light display-1 d-flex justify-content-center">
        <i className="fa-solid fa-clock mx-1"></i>
        <div>
          <b className="item six mx-1">{props.sixth}</b>
          <b className="item five mx-1">{props.fifth}</b>
          <b className="item four mx-1">{props.fourth}</b>
          <b className="item three mx-1">{props.third}</b>
          <b className="item two mx-1">{props.second}</b>
          <b className="item one mx-1">{props.first}</b>
        </div>
      </div>
    </div>
  );
};

Counter.propTypes = {
  sixth: PropTypes.number,
  fifth: PropTypes.number,
  fourth: PropTypes.number,
  third: PropTypes.number,
  second: PropTypes.number,
  first: PropTypes.number,
};

export default Counter;
