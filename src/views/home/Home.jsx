import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HelloWorld from '../../components/HelloWorld';

export default class Home extends Component {
  static propTypes = {
    msg: PropTypes.string,
    count: PropTypes.number,
  };

  static defaultProps = {
    msg: 'Home',
    count: 1,
  };

  constructor(props) {
    super(props);

    this.state = {
      count: props.count,
    };
  }

  render() {
    const { msg } = this.props;
    const { count } = this.state;

    return (
      <div className="view-container">
        <HelloWorld msg={msg + count} />
      </div>
    );
  }
}
