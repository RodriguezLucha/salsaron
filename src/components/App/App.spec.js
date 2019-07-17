import React from 'react';
import {render} from '@testing-library/react';
import ReactDOM from 'react-dom';
import App from './App';
import {wait} from '@testing-library/dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('Has Salsaron title', () => {
  const {getByText} = render(<App />);
  expect(getByText('Salsaron')).toBeInTheDocument();
});

it('Can perform a login', async() => {
  const {getByText} = render(<App />);
  await wait(() => {
    const LoginButton = getByText('Log In');
  });
});