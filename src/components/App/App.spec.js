import React from 'react';
import {render} from '@testing-library/react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('Has Salseron as the title', () => {
  const {getByText} = render(<App />);
  expect(getByText('Salsaron')).toBeInTheDocument();
});