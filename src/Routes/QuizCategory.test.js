import React from 'react';
import ReactDOM from 'react-dom';
import QuizCategory from './QuizCategory';

it('renders QuizCategory component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<QuizCategory category={[]}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
