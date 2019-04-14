import React, { Component } from 'react';
import HelloWorld from '../../components/HelloWorld';

// eslint-disable-next-line react/prefer-stateless-function
export default class About extends Component {
  render() {
    return (
      <div className="view-container">
        <HelloWorld msg="About" />
      </div>
    );
  }
}
