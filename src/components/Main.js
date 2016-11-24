import React from 'react';
import { Link } from 'react-router';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <p>This is home!</p>
        <Link to="/about">About</Link>
      </div>
    );
  }
}

export default AppComponent;
