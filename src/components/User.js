import React, { PropTypes } from 'react';

class User extends React.Component {
  static propTypes = {
    match: PropTypes.object
  };

  render () {
    return (
      <p>{`User id is: ${this.props.match.params.userId}`}</p>
    );
  }
}

export default User;
