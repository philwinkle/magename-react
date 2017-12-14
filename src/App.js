import React, { Component } from 'react';
import {BrowserRouter as Router, Route, matchPath} from 'react-router-dom';
import Loading from './Loading';
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
      state.phrase = this.state.nextPhrase || matchPath.path || this.getPhrase();
      state.nextPhrase = this.getPhrase();
      state.loading = false;
      this.setState(state);
    }, 500);
  }

  componentDidMount() {
    this.handleGetPhrase();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <h1>MageName</h1>
          <h3>Your Magento-based business should be named:</h3>
          <Route exact={true} path="/" component={()=>(
              <h2>{this.state.phrase}</h2>
          )} />
          <Route path="/phrase/:phrase" component={({match})=>(
              <h2>{match.params.phrase}</h2>
          )} />
          <Loading loading={this.state.loading} />
          <Social
            phrase={this.state.phrase}
            nextPhrase={this.state.nextPhrase}
            phraseHandler={this.handleGetPhrase}
            loading={this.state.loading}
          />
        </div>
      </Router>
    );
  }
}

export default App;
