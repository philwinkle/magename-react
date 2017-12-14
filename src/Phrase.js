import React from 'react';

const Phrase = ({ match }) => (
  <h2>{match.params.phrase}</h2>
);

export default Phrase;