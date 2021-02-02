import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';

it('renders Dashboard component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Dashboard category={[]}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
