import React, { Component } from 'react';
import twitterPng from './twitter.png';

class Twitter extends Component {
  constructor(props) {
    super(props);
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

export default Twitter;