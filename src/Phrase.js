import React, { Component } from 'react';

class Phrase extends Component {

  constructor(props) {
  	super(props);
  	this.props = props;
  }

  render() {
    return (
      <h2>{this.props.phrase}</h2>
    );
  }
}

export default Phrase;
