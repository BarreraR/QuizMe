import React from 'react';
import ReactDOM from 'react-dom';
import Answer from './Answer';

it('renders Dashboard component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Answer />, div);
  ReactDOM.unmountComponentAtNode(div);
});
