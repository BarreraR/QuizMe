import React from 'react';
import ReactDOM from 'react-dom';
import Register from './Register';

it('renders Register component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Register/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
