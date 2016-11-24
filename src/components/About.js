import React from 'react';
import { Link } from 'react-router';

class About extends React.Component {
  render () {
    return (
      <div className="about">
        <p>Super Duper Example App!</p>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default About;