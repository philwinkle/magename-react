import React, { Component } from 'react';
import Twitter from './Twitter';

class Social extends Component {

  constructor(props) {
    super(props);
    this.props = props;
  }

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
        <iframe src="http://ghbtns.com/github-btn.html?user=philwinkle&repo=magename&type=watch&count=true&size=large" allowTransparency="true" frameBorder="0" scrolling="0" width="120" height="30"></iframe>
      </div>
    )
  }
}

export default Social;
