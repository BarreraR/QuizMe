import React from 'react';
import ReactDOM from 'react-dom';
import Create from './Create';

it('renders Create component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Create category={[]}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
