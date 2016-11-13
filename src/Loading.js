import React, { Component } from 'react';
import spinner from './spinner.svg';

class Loading extends Component {

  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    let loading = this.props.loading;

    return (
      <div className="row">
      {loading && <img src={spinner} alt="loading"/>}
      </div>
    );
  }
}

export default Loading;