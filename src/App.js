import React, { Component } from 'react';
import Loading from './Loading';
import Phrase from './Phrase';
import Social from './Social';
import Noun from './Noun';
import Verb from './Verb';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      phrase: ''
    }

    this.handleGetPhrase = this.handleGetPhrase.bind(this);
  }

  getNoun() {
    return Noun[Math.floor(Math.random()*Noun.length)] + 'Gento';
  }

  getVerb() {
    return 'Mage' + Verb[Math.floor(Math.random()*Verb.length)];
  }

  getPhrase() {
    if([0,1][Math.floor(Math.random()*2)] === 0){
      return this.getNoun();
    }

    return this.getVerb();
  }

  handleGetPhrase() {

    const state = {
      loading: true
    };

    this.setState(state);

    //felt too fast
    setTimeout(() => {
      state.phrase = this.getPhrase();
      state.loading = false;
      this.setState(state);
    }, 500);
  }

  componentDidMount() {
    this.handleGetPhrase();
  }

  render() {
    return (
      <div className="App">
        <h1>MageName</h1>
        <h3>Your Magento-based business should be named:</h3>
        <Phrase phrase={this.state.phrase} />
        <Loading loading={this.state.loading} />
        <Social
          phrase={this.state.phrase}
          phraseHandler={this.handleGetPhrase}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

export default App;
