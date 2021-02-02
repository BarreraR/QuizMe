import React from 'react';
import ReactDOM from 'react-dom';
import Row from './Row';

it('renders Row component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Row />, div);
  ReactDOM.unmountComponentAtNode(div);
});
