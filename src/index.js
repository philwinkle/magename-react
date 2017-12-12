import React from 'react';
import ReactDOM from 'react-dom';
import Amplify from 'aws-amplify';
import App from './App';
import './index.css';

import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
