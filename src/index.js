import React from 'react';
import ReactDOM from 'react-dom';
import Amplify from 'aws-amplify';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import aws_exports from './aws-exports';
import './index.css';

Amplify.configure(aws_exports);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();