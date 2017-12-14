import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Twitter from './Twitter';

class Social extends Component {

  render() {
    return (
      <div className="row">
        <Link to={`/phrase/${this.props.nextPhrase}`}
          className='another'
          onClick={this.props.phraseHandler}
          disabled={this.props.loading}
        >
          <span>Another, please</span>
        </Link>
        <Twitter phrase={this.props.phrase}/>
        <iframe src="//ghbtns.com/github-btn.html?user=philwinkle&repo=magename&type=watch&count=true&size=large" allowTransparency="true" frameBorder="0" scrolling="0" width="120" height="30"></iframe>
      </div>
    )
  }
}

export default Social;
