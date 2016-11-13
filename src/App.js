import React, { Component } from 'react';
import Loading from './Loading';
import Phrase from './Phrase';
import Social from './Social';
import axios from 'axios';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      phrase: ''
    }

    this.handleGetPhrase = this.handleGetPhrase.bind(this);
  }

  handleGetPhrase() {
    this.setState({
      loading: true
    });
    axios.get('https://rtb5re5jh8.execute-api.us-east-1.amazonaws.com/prod/name/random/')
    .then(res => {
      this.setState({
        phrase: res.data.phrase,
        loading: false
      })
    })
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
