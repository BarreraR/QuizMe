import React from 'react';
import ReactDOM from 'react-dom';
import Question from './Question';

it('renders Question component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Question quiz={[]}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
