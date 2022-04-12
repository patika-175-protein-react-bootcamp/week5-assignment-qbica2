import React from "react";
import PropTypes from "prop-types";

function BottomVector({ color }) {
  return (
    <svg width="521" height="136" viewBox="0 0 521 136" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.592 115H453.138L500.908 19H68.3616L20.592 115Z" fill={color}/>
    </svg>
  );
}

BottomVector.propTypes = {
  color: PropTypes.string.isRequired
};

export default BottomVector;