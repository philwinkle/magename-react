import React, { Component } from 'react';
import twitterPng from './twitter.png';

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
        >
          <span>Another, please</span>
        </button>
        <Twitter phrase={this.props.phrase}/>
        <iframe src="http://ghbtns.com/github-btn.html?user=philwinkle&repo=magename&type=watch&count=true&size=large" allowTransparency="true" frameBorder="0" scrolling="0" width="120" height="30"></iframe>
      </div>
    )
  }
}

class Twitter extends Component {
  constructor(props) {
    super(props);
    this.props = props;

    this.twitterShare = this.twitterShare.bind(this);
  }

  twitterShare() {
    let twitterShareUrl = `https://twitter.com/intent/tweet?text=My%20Magento-based%20business%20should%20be%20named%20${this.props.phrase}!%20Find%20yours%20at%20&url=${window.location}`;
    window.open(twitterShareUrl, 'sharer', 'toolbar=0,status=0,width=548,height=325');
  }

  render() {
    return (
      <a
        href="#"
        onClick={this.twitterShare}
        className="twitter-share-button" data-size="large">
        <img src={twitterPng} alt="share your magename on twitter" width="81" height="34" />
      </a>
    )
  }
}

export default Social;
