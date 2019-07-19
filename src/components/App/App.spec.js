import React from 'react';
import {render, fireEvent} from '@testing-library/react';
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
  const {getByText, getByLabelText, debug} = render(<App />);
  await wait(async () => {
    fireEvent.change(getByLabelText(/Email/i), { target: { value: 'rudy@gmail.com' } })
    fireEvent.change(getByLabelText(/Password/i), { target: { value: 'password' } })

    const loginButton = getByText('Log In');
    loginButton.click();
    await findByText('Log Out')
  });
});