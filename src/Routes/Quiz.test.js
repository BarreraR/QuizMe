import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Quiz from './Quiz';

it('renders Quiz component', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <Quiz/>
    </BrowserRouter>, 
    div);
  ReactDOM.unmountComponentAtNode(div);
});
