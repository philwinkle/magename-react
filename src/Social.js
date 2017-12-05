import React, { Component } from 'react';
import Twitter from './Twitter';

class Social extends Component {

  render() {
    return (
      <div className="row">
        <button
          className='another'
          onClick={this.props.phraseHandler}
          disabled={this.props.loading}
        >
          <span>Another, please</span>
        </button>
        <Twitter phrase={this.props.phrase}/>
      </div>
    )
  }
}

export default Social;
