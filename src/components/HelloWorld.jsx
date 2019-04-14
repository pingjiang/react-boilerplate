import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class HelloWorld extends PureComponent {
  static propTypes = {
    msg: PropTypes.string.isRequired,
  };

  render() {
    const { msg } = this.props;
    return <div className="helloworld">{msg}</div>;
  }
}
