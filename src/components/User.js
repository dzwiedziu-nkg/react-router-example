import React, { PropTypes } from 'react';

class User extends React.Component {
  static propTypes = {
    params: PropTypes.object
  };

  render () {
    return (
      <p>{`User id is: ${this.props.params.userId}`}</p>
    );
  }
}

export default User;