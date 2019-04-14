import React, { Component } from 'react';
import HelloWorld from '../../components/HelloWorld';

// eslint-disable-next-line react/prefer-stateless-function
export default class Home extends Component {
  render() {
    return (
      <div className="view-container">
        <HelloWorld msg="Home" />
      </div>
    );
  }
}
