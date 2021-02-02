import React from 'react';
import ReactDOM from 'react-dom';
import Results from './Results';

it('renders Results component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Results category={[]}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
