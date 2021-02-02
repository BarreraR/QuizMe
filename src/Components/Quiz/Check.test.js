import React from 'react';
import ReactDOM from 'react-dom';
import Check from './Check';

it('renders Check component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Check />, div);
  ReactDOM.unmountComponentAtNode(div);
});
