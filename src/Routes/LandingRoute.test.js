import React from 'react';
import ReactDOM from 'react-dom';
import LandingRoute from './LandingRoute';

it('renders LandingRoute component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LandingRoute />, div);
  ReactDOM.unmountComponentAtNode(div);
});
