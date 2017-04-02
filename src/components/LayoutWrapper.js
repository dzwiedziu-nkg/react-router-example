import React from 'react';
import { Link } from 'react-router-dom';

const LayoutWrapper = (props) => {
  return (
    <div className="index">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <div className="container">
        {props.children}
      </div>
    </div>
  )
};

export default LayoutWrapper;
